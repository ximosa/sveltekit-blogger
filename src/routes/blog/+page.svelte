<script>
  export let data;
</script>

<div class="large-padding">
  <h1 class="center-align">Blog</h1>
  <div class="row">
    {#each data.posts as post}
      <div class="col s12 m6">
        <div class="card">
          <div class="large-padding">
            <h2>{post.title}</h2>
            <p>{@html post.content.substring(0, 200)}...</p>
            <div class="right-align">
              <a href={post.url} target="_blank" class="button">Leer más</a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>