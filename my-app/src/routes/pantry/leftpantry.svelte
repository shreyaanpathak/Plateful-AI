<script lang="ts">
	import { pantry_items } from '$lib/stores/pantrystore.js';
	import { onDestroy } from 'svelte';
	import Category from '$lib/components/category.svelte';
	let items: Array<string> = [];
	let unsub = pantry_items.subscribe((value) => {
		items = value;
	});

	onDestroy(unsub);
	let allItems = ['you', 'are', 'stupid'];
</script>

<div class="mt-12 ml-6 mr-6">
	<h1 class="title text-6xl font-bold">Pantry</h1>
	<h2 class="subtitle mt-4 text-lg font-bold">You have selected {items.length} items</h2>

	<input
		class="input mt-6 w-full rounded-xl p-4"
		type="text"
		id="myInput"
		onkeyup="myFunction()"
		placeholder="Search for items..."
		title="Type in a name"
	/>
	<div class="flex flex-col items-start" />
</div>

<style>
	.title {
		color: rgba(255, 136, 75, 1);
		opacity: 53%;
	}

	.subtitle {
		color: #ff772b;
		opacity: 78%;
	}

	.input {
		background-color: #fff5e4;
	}
</style>
