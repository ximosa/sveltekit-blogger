<script>
  export let form;
</script>

<div class="large-padding">
  <h1 class="center-align">Contacto</h1>
  <div class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card">
        <form method="POST" class="large-padding">
          <div class="field label border">
            <input type="text" name="nombre" required />
            <label>Nombre</label>
          </div>

          <div class="field label border">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>

          <div class="field label border">
            <textarea name="mensaje" required class="large"></textarea>
            <label>Mensaje</label>
          </div>

          {#if form?.success}
            <div class="success-text">{form.message}</div>
          {/if}

          {#if form?.success === false}
            <div class="error-text">{form.message}</div>
          {/if}

          <div class="center-align">
            <button class="button primary large">Enviar Mensaje</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>