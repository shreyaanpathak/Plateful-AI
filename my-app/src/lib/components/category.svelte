<script lang="ts">
	import { selected_items } from '$lib/stores/pantrystore';
	import type Category from '$lib/util/categories';
	import '@fontsource/roboto';
	export let data: Category;

	let items: string[] = [];
	selected_items.subscribe((value) => (items = value));

	function update(food: string) {
		let elems = document.getElementsByClassName(food);
		for (let elem of elems) {
			elem.classList.toggle('active');
		}
		if (!items.includes(food.trim())) {
			selected_items.set([...items, food.trim()]);
		} else selected_items.set(items.filter((item) => item.trim() !== food.trim()));
	}
</script>

<div class="flex w-full flex-col items-start justify-start rounded-xl bg-[#FFF8EB]">
	<h1 class="flex flex-row items-center justify-center p-4 text-2xl font-bold text-[#FF884B]/75">
		<span class="mr-4 inline-block h-10 w-10 rounded-3xl bg-orange-300" />{data.name}
	</h1>
	<div class="grid w-full basis-full grid-cols-3 items-center gap-x-4 gap-y-2 pl-4 pb-4 pr-4">
		{#each data.items as item}
			{#if item.trim()}
				<button
					on:click={() => update(item)}
					class={`roboto w-auto bg-[#ffd384] p-2 text-center text-[#cc5519] hover:scale-125 ${item.trim()}`}
				>
					{item.trim()}
				</button>
			{/if}
		{/each}
	</div>
</div>

<style>
	:global(html) {
		overflow-y: hidden;
	}
	.roboto {
		font-family: 'Roboto', sans-serif;
	}
</style>
