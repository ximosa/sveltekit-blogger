<script>
  import { page } from '$app/stores';
</script>

<nav class="primary">
  <a href="/" class="brand">
    <img src="/logo.svg" alt="Logo" />
    <span>Mi Blog</span>
  </a>
  <a href="/" class:active={$page.url.pathname === '/'}>Inicio</a>
  <a href="/sobremi" class:active={$page.url.pathname === '/sobremi'}>Sobre Mí</a>
  <a href="/blog" class:active={$page.url.pathname === '/blog'}>Blog</a>
  <a href="/contacto" class:active={$page.url.pathname === '/contacto'}>Contacto</a>
</nav>

<main class="responsive">
  <slot />
</main>

<footer class="center-align">
  <p>© {new Date().getFullYear()} Mi Blog. Todos los derechos reservados.</p>
</footer>