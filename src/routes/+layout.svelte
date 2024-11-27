<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Header />

<main class="overflow-hidden">
  <slot />
</main>

<Footer />
<style>
  main {
    overflow-x: hidden;
    width: 100%;
  }
  </style>