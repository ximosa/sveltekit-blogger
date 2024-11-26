<script>
  import { onMount } from 'svelte';
  
  export let data;
  let post = null;
  let comments = [];
  
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
              if (post) await fetchComments(post.id);
          }
          
          if (!post) {
              const allPostsResponse = await fetch(
                  `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=500&fetchBodies=true`
              );
              const allPostsData = await allPostsResponse.json();
              post = allPostsData.items.find(p => createSlug(p.title) === slug);
              if (post) await fetchComments(post.id);
          }
      } catch (error) {
          console.error('Error fetching post:', error);
      }
  }

  async function fetchComments(postId) {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const BLOG_ID = import.meta.env.VITE_BLOG_ID;
      
      try {
          const response = await fetch(
              `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}/comments?key=${API_KEY}`
          );
          const data = await response.json();
          comments = data.items || [];
      } catch (error) {
          console.error('Error fetching comments:', error);
          comments = [];
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
      <div class="comments-section">
        {#if post}
        <button data-ui="#comments-dialog" class="circle transparent">
          <i>comment</i>
      </button>
      
    
      <dialog id="comments-dialog" class="right">
        <header>
            <nav>
                <button data-ui="#comments-dialog" class="transparent circle large">
                    <i>close</i>
                </button>
                <h5 class="max">Comentarios</h5>
            </nav>
        </header>
        <article>
            <a 
                class="row round"
                href={`https://www.blogger.com/comment.g?blogID=${import.meta.env.VITE_BLOG_ID}&postID=${post.id}`}
                target="_blank"
            >
                <i>comment</i>
                <span>Quieres escribir comentarios</span>
                <div class="max"></div>
            </a>
        </article>
    </dialog>
    
        {/if}
    </div>
    
    
      <div class="comments">
          <h3>Comentarios</h3>
          {#if comments.length > 0}
              {#each comments as comment}
                  <div class="comment">
                      <div class="author">{comment.author.displayName}</div>
                      <div class="comment-content">{@html comment.content}</div>
                      <div class="date">{new Date(comment.published).toLocaleDateString()}</div>
                  </div>
              {/each}
          {:else}
              <p>No hay comentarios todavía.</p>
          {/if}
      </div>
  </div>
{:else}
  <p class="center-align">Cargando...<progress class="circle large"></progress></p>
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

  .comments {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #eee;
  }

  .comment {
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
  }

  .author {
      font-weight: bold;
      margin-bottom: 0.5rem;
  }

  .comment-content {
      margin: 0.5rem 0;
  }

  .date {
      color: #666;
      font-size: 0.9rem;
  }
  .comments-section {
        margin-top: 2rem;
        width: 100%;
    }
</style>
