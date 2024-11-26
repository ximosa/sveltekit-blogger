<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let allPosts = [];
  let displayedPosts = [];
  let categories = [];
  let selectedCategory = '';
  let loading = true;
  let error = '';

  let currentPage = 1;
  const postsPerPage = 6;
  let totalPages = 0;

  async function fetchPosts() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BLOG_ID = import.meta.env.VITE_BLOG_ID;
   
    try {
      loading = true;
      const response = await fetch(
        `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&fetchImages=true&maxResults=100&fetchBodies=true`
      );
     
      if (!response.ok) {
        throw new Error('Error al cargar los posts');
      }

      const data = await response.json();
     
      if (!data.items) {
        throw new Error('No se encontraron posts');
      }

      allPosts = data.items.map(post => ({
        ...post,
        slug: createSlug(post.title)
      }));
     
      const allLabels = allPosts.flatMap(post => post.labels || []);
      categories = [...new Set(allLabels)].sort();
     
      filterAndPaginate();
    } catch (err) {
      console.error('Error:', err);
      error = err.message;
    } finally {
      loading = false;
    }
  }

  function createSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function filterAndPaginate() {
    const filteredPosts = selectedCategory
      ? allPosts.filter(post => post.labels?.includes(selectedCategory))
      : allPosts;

    totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    if (currentPage > totalPages) {
      currentPage = 1;
    }

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    displayedPosts = filteredPosts.slice(startIndex, endIndex);
  }

  function handleCategoryChange(event) {
    const select = event.target;
    selectedCategory = select.value;
    currentPage = 1;
    filterAndPaginate();
  }

  function handlePageChange(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      currentPage = newPage;
      filterAndPaginate();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleCategoryClick(category, event) {
    event.preventDefault();
    event.stopPropagation();
    selectedCategory = category;
    currentPage = 1;
    filterAndPaginate();
  }

  function goToPost(slug) {
    goto(`/blog/${slug}`);
  }

  function createExcerpt(content) {
    const strippedContent = content.replace(/<[^>]*>/g, '');
    return strippedContent.substring(0, 150) + '...';
  }

  onMount(fetchPosts);
</script>

<div class="blog">
  <h1>Blog</h1>
  
  {#if loading}
    <div class="loading">
      Cargando posts...
      {#if allPosts.length > 0}
        <p>Posts cargados hasta ahora: {allPosts.length}</p>
      {/if}
    </div>
  {:else if error}
    <div class="error">{error}</div>
  {:else}
    <div class="categories">
      <select
        value={selectedCategory}
        on:change={handleCategoryChange}
      >
        <option value="">Todas las categorías</option>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
      <span class="post-count">
        {#if selectedCategory}
          Mostrando posts en categoría: {selectedCategory}
        {:else}
          Mostrando todos los posts
        {/if}
      </span>
    </div>

    <div class="posts">
      {#each displayedPosts as post (post.id)}
        <article class="post-card">
          <div class="post-content" on:click={() => goToPost(post.slug)}>
            {#if post.images?.[0]}
              <img src={post.images[0].url} alt={post.title} />
            {/if}
            <h2>{post.title}</h2>
            <p>{createExcerpt(post.content)}</p>
          </div>
          {#if post.labels}
            <div class="labels">
              {#each post.labels as label}
                <a
                  href="#"
                  class="label"
                  class:active={selectedCategory === label}
                  on:click={(e) => handleCategoryClick(label, e)}
                >
                  {label}
                </a>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    </div>

    {#if totalPages > 1}
      <div class="pagination">
        <button
          on:click={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        
        {#if currentPage > 3}
          <button on:click={() => handlePageChange(1)}>1</button>
          {#if currentPage > 4}
            <span class="dots">...</span>
          {/if}
        {/if}
        
        {#each Array(totalPages) as _, i}
          {#if i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1}
            <button
              class:active={currentPage === i + 1}
              on:click={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          {/if}
        {/each}
        
        {#if currentPage < totalPages - 2}
          {#if currentPage < totalPages - 3}
            <span class="dots">...</span>
          {/if}
          <button on:click={() => handlePageChange(totalPages)}>{totalPages}</button>
        {/if}
        
        <button
          on:click={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    {/if}
  {/if}
</div>

<style>
  .blog {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .loading, .error {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
  }

  .error {
    color: #dc3545;
  }

  .categories {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .post-count {
    color: #666;
    font-size: 0.9rem;
  }

  select {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 200px;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .post-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .post-content {
    cursor: pointer;
    transition: transform 0.2s;
  }

  .post-content:hover {
    transform: translateY(-5px);
  }

  .post-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .post-card h2 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
    color: #333;
  }

  .post-card p {
    color: #666;
    line-height: 1.4;
  }

  .labels {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }

  .label {
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
    color: #666;
    text-decoration: none;
    transition: all 0.2s;
  }

  .label:hover {
    background: #e0e0e0;
    color: #333;
  }

  .label.active {
    background: #4CAF50;
    color: white;
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin: 2rem 0;
  }

  .pagination button {
    padding: 0.5rem 1rem;
    border: 1px solid #750707;
    background: rgb(19, 8, 8);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    color: white;
  }

  .pagination button:hover:not(:disabled) {
    background: #4b4949;
  }

  .pagination button.active {
    background: #21023a;
    color: white;
    border-color: #4CAF50;
  }

  .pagination button:disabled {
    background: #5f5959;
    cursor: not-allowed;
    opacity: 0.5;
  }

  .dots {
    padding: 0.5rem;
    color: #666;
  }
</style>
