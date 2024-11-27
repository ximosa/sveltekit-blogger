import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const css = {
  code: ".blog-post.svelte-158yjop.svelte-158yjop{max-width:800px;margin:0 auto;padding:2rem}.blog-post.svelte-158yjop img.svelte-158yjop{max-width:100%;height:auto;margin:2rem 0}.content.svelte-158yjop.svelte-158yjop{line-height:1.8}.comments.svelte-158yjop.svelte-158yjop{margin-top:3rem;padding-top:2rem;border-top:1px solid #eee}.comment.svelte-158yjop.svelte-158yjop{padding:1rem 0;border-bottom:1px solid #eee}.author.svelte-158yjop.svelte-158yjop{font-weight:bold;margin-bottom:0.5rem}.comment-content.svelte-158yjop.svelte-158yjop{margin:0.5rem 0}.date.svelte-158yjop.svelte-158yjop{color:#666;font-size:0.9rem}.comments-section.svelte-158yjop.svelte-158yjop{margin-top:2rem;width:100%}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from \'svelte\';\\r\\n  \\r\\n  export let data;\\r\\n  let post = null;\\r\\n  let comments = [];\\r\\n  \\r\\n  async function fetchPost() {\\r\\n      const API_KEY = import.meta.env.VITE_API_KEY;\\r\\n      const BLOG_ID = import.meta.env.VITE_BLOG_ID;\\r\\n      const slug = data.slug;\\r\\n  \\r\\n      try {\\r\\n          const response = await fetch(\\r\\n              `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/search?key=${API_KEY}&q=${slug}&fetchBodies=true`\\r\\n          );\\r\\n          const data = await response.json();\\r\\n          \\r\\n          if (data.items && data.items.length > 0) {\\r\\n              post = data.items.find(p => createSlug(p.title) === slug);\\r\\n              if (post) await fetchComments(post.id);\\r\\n          }\\r\\n          \\r\\n          if (!post) {\\r\\n              const allPostsResponse = await fetch(\\r\\n                  `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=500&fetchBodies=true`\\r\\n              );\\r\\n              const allPostsData = await allPostsResponse.json();\\r\\n              post = allPostsData.items.find(p => createSlug(p.title) === slug);\\r\\n              if (post) await fetchComments(post.id);\\r\\n          }\\r\\n      } catch (error) {\\r\\n          console.error(\'Error fetching post:\', error);\\r\\n      }\\r\\n  }\\r\\n\\r\\n  async function fetchComments(postId) {\\r\\n      const API_KEY = import.meta.env.VITE_API_KEY;\\r\\n      const BLOG_ID = import.meta.env.VITE_BLOG_ID;\\r\\n      \\r\\n      try {\\r\\n          const response = await fetch(\\r\\n              `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}/comments?key=${API_KEY}`\\r\\n          );\\r\\n          const data = await response.json();\\r\\n          comments = data.items || [];\\r\\n      } catch (error) {\\r\\n          console.error(\'Error fetching comments:\', error);\\r\\n          comments = [];\\r\\n      }\\r\\n  }\\r\\n\\r\\n  function createSlug(title) {\\r\\n      return title\\r\\n          .toLowerCase()\\r\\n          .replace(/[^a-z0-9]+/g, \'-\')\\r\\n          .replace(/(^-|-$)/g, \'\');\\r\\n  }\\r\\n  \\r\\n  onMount(fetchPost);\\r\\n<\/script>\\r\\n\\r\\n{#if post}\\r\\n  <div class=\\"blog-post extra-line large-text\\">\\r\\n      <h1>{post.title}</h1>\\r\\n      {#if post.images && post.images[0]}\\r\\n          <img src={post.images[0].url} alt={post.title} />\\r\\n      {/if}\\r\\n      <div class=\\"content\\">\\r\\n          {@html post.content}\\r\\n      </div>\\r\\n      <div class=\\"comments-section\\">\\r\\n        {#if post}\\r\\n        <button data-ui=\\"#comments-dialog\\" class=\\"circle transparent\\">\\r\\n          <i>comment</i>\\r\\n      </button>\\r\\n      \\r\\n    \\r\\n      <dialog id=\\"comments-dialog\\" class=\\"right\\">\\r\\n        <header>\\r\\n            <nav>\\r\\n                <button data-ui=\\"#comments-dialog\\" class=\\"transparent circle large\\">\\r\\n                    <i>close</i>\\r\\n                </button>\\r\\n                <h5 class=\\"max\\">Comentarios</h5>\\r\\n            </nav>\\r\\n        </header>\\r\\n        <article>\\r\\n            <a \\r\\n                class=\\"row round\\"\\r\\n                href={`https://www.blogger.com/comment.g?blogID=${import.meta.env.VITE_BLOG_ID}&postID=${post.id}`}\\r\\n                target=\\"_blank\\"\\r\\n            >\\r\\n                <i>comment</i>\\r\\n                <span>Quieres escribir comentarios</span>\\r\\n                <div class=\\"max\\"></div>\\r\\n            </a>\\r\\n        </article>\\r\\n    </dialog>\\r\\n    \\r\\n        {/if}\\r\\n    </div>\\r\\n    \\r\\n    \\r\\n      <div class=\\"comments\\">\\r\\n          <h3>Comentarios</h3>\\r\\n          {#if comments.length > 0}\\r\\n              {#each comments as comment}\\r\\n                  <div class=\\"comment\\">\\r\\n                      <div class=\\"author\\">{comment.author.displayName}</div>\\r\\n                      <div class=\\"comment-content\\">{@html comment.content}</div>\\r\\n                      <div class=\\"date\\">{new Date(comment.published).toLocaleDateString()}</div>\\r\\n                  </div>\\r\\n              {/each}\\r\\n          {:else}\\r\\n              <p>No hay comentarios todavía.</p>\\r\\n          {/if}\\r\\n      </div>\\r\\n  </div>\\r\\n{:else}\\r\\n  <p class=\\"center-align\\">Cargando...<progress class=\\"circle large\\"></progress></p>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  .blog-post {\\r\\n      max-width: 800px;\\r\\n      margin: 0 auto;\\r\\n      padding: 2rem;\\r\\n  }\\r\\n\\r\\n  .blog-post img {\\r\\n      max-width: 100%;\\r\\n      height: auto;\\r\\n      margin: 2rem 0;\\r\\n  }\\r\\n\\r\\n  .content {\\r\\n      line-height: 1.8;\\r\\n  }\\r\\n\\r\\n  .comments {\\r\\n      margin-top: 3rem;\\r\\n      padding-top: 2rem;\\r\\n      border-top: 1px solid #eee;\\r\\n  }\\r\\n\\r\\n  .comment {\\r\\n      padding: 1rem 0;\\r\\n      border-bottom: 1px solid #eee;\\r\\n  }\\r\\n\\r\\n  .author {\\r\\n      font-weight: bold;\\r\\n      margin-bottom: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .comment-content {\\r\\n      margin: 0.5rem 0;\\r\\n  }\\r\\n\\r\\n  .date {\\r\\n      color: #666;\\r\\n      font-size: 0.9rem;\\r\\n  }\\r\\n  .comments-section {\\r\\n        margin-top: 2rem;\\r\\n        width: 100%;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4HE,wCAAW,CACP,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IACb,CAEA,yBAAU,CAAC,kBAAI,CACX,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CAAC,CACjB,CAEA,sCAAS,CACL,WAAW,CAAE,GACjB,CAEA,uCAAU,CACN,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAC1B,CAEA,sCAAS,CACL,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAC7B,CAEA,qCAAQ,CACJ,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,MACnB,CAEA,8CAAiB,CACb,MAAM,CAAE,MAAM,CAAC,CACnB,CAEA,mCAAM,CACF,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MACf,CACA,+CAAkB,CACZ,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IACX"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${`<p class="center-align" data-svelte-h="svelte-19i1o7s">Cargando...<progress class="circle large"></progress></p>`}`;
});
export {
  Page as default
};