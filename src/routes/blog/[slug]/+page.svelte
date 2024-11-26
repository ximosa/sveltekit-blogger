<script>
    import { onMount } from 'svelte';
    
    export let data;
    let post = null;
    
    async function fetchPost() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const BLOG_ID = import.meta.env.VITE_BLOG_ID;
      const slug = data.slug;
    
      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/search?key=${API_KEY}&q=${slug}&fetchBodies=true`
        );
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          post = data.items.find(p => createSlug(p.title) === slug);
        }
        
        if (!post) {
          const allPostsResponse = await fetch(
            `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=500&fetchBodies=true`
          );
          const allPostsData = await allPostsResponse.json();
          post = allPostsData.items.find(p => createSlug(p.title) === slug);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }
    
    function createSlug(title) {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }
    
    onMount(fetchPost);
    </script>
    
    
    
    {#if post}
      <div class="blog-post extra-line large-text">
        <h1>{post.title}</h1>
        {#if post.images && post.images[0]}
          <img src={post.images[0].url} alt={post.title} />
        {/if}
        <div class="content">
          {@html post.content}
        </div>
      </div>
    {:else}
      <p>Cargando...</p>
    {/if}
    
    <style>
      .blog-post {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
      }
    
      .blog-post img {
        max-width: 100%;
        height: auto;
        margin: 2rem 0;
      }
    
      .content {
        line-height: 1.8;
      }
    
    </style>
    