<script lang="ts">

  import { Container, Col, Row, Breadcrumb, BreadcrumbItem } from 'sveltestrap';
  import { onDestroy, onMount } from "svelte";
  import { DISPATCHER } from "./stores/dispatcher.store";
  import { store } from "./stores/web.store";
  import Mattress from './components/mattress.svelte';
  import Home from './components/home.svelte';

  let mattress: any = null
  let pillow: any = null
  $: url = window.location.href;

  const unsubscribe = store.subscribeToWebData((res) => {
    if (res) {
      console.log('UNWIND SLEEP STATE', res)
      mattress = res.mattress
      pillow = res.pillow
    }
  });

  function init() {
    DISPATCHER("INIT_STORE");
  }

  $: onMount(() => {
    init();
  });

  onDestroy(unsubscribe);

</script>

{#if mattress !== null && pillow !== null && url}
  {#if url === `${window.location.origin}/`}
    <Home />
  {:else if url === `${window.location.origin}/mattress`}
    <Mattress {mattress} />
  {/if}
{/if}

<style lang='scss'>

</style>
