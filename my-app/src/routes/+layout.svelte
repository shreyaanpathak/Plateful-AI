<script>
	import Nav from '$lib/components/navbar.svelte';
	import About from '$lib/components/about.svelte';
	import '../app.css';
</script>

<Nav />
<slot />

<style>
	body {
		background-color: #ffe5b7;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
