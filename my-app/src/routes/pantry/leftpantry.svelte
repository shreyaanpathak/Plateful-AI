<script lang="ts">
	import { pantry_items, selected_items, culture } from '$lib/stores/pantrystore.js';
	import { onDestroy } from 'svelte';
	import Category from '$lib/components/category.svelte';
	import { Essentials, Fruits, Meats, Vegetables } from '$lib/util/categories';
	let allItems: Array<string> = [];
	let unsub = pantry_items.subscribe((value) => {
		allItems = value;
	});
	let currentCulture = '';
	$: culture.set(currentCulture);
	let selectedItem: string = '';

	let items: string[] = [];
	selected_items.subscribe((value) => (items = value));
	onDestroy(unsub);
	let inputValue: string = '';
	let ulValue;
	function update(food: string) {
		if (food.trim().length === 0) return;
		let elems = document.getElementsByClassName(food);
		for (let elem of elems) {
			elem.classList.toggle('active');
		}
		if (!items.includes(food.trim())) {
			selected_items.set([...items, food.trim()]);
		} else selected_items.set(items.filter((item) => item.trim() !== food.trim()));
	}
	function myFunction() {
		var input, filter, ul, li, button, i, txtValue;
		input = document.getElementById('myInput');
		filter = inputValue.toUpperCase();
		ul = document.getElementById('ULLL');
		li = ul?.getElementsByTagName('li')!;
		for (i = 0; i < li?.length ?? 0; i++) {
			let a = li[i].getElementsByTagName('button')[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = '';
			} else {
				li[i].style.display = 'none';
			}
		}
	}
	let categories = [Essentials, Vegetables, Fruits, Meats];
</script>

<div class="mt-12 ml-6 mr-6 mb-12">
	<h1 class="title text-6xl font-bold">Pantry</h1>
	<h2 class="subtitle mt-4 text-lg font-bold">You have selected {items.length} items</h2>

	<select bind:value={selectedItem}>
		{#each items as item}
			<option>{item}</option>
		{/each}
	</select>
	<button
		on:click={() => {
			selected_items.set(items.filter((item) => item.trim() !== selectedItem.trim()));
			let elems = document.getElementsByClassName(selectedItem);
			for (let elem of elems) {
				elem.classList.remove('active');
			}
		}}
		class="inline rounded-xl bg-orange-300 p-4">-</button
	>
	<div class="flex flex-row">
		<input
			bind:value={currentCulture}
			type="text"
			id="cultureInput"
			placeholder="Enter culture (will be automatically saved)"
			title="cultureinput"
			class="h-12 w-full rounded-2xl pl-6"
		/>
		<button
			on:click={() => update(inputValue.trim())}
			class="invisible rounded-3xl bg-orange-300 p-2 text-center text-4xl">+</button
		>
	</div>
	<div class="flex flex-row">
		<input
			bind:value={inputValue}
			type="text"
			id="myInput"
			on:keyup={myFunction}
			placeholder="Search for items..."
			title="search"
			class="h-12 w-full rounded-2xl pl-6"
		/>
		<button
			on:click={() => update(inputValue.trim())}
			class="h-1/4 rounded-3xl bg-orange-300 p-2 text-center text-4xl">+</button
		>
	</div>

	<div>
		{#if inputValue?.trim()?.length > 0}
			<ul class="relative mt-0 rounded-xl bg-orange-300" bind:this={ulValue} id="ULLL">
				{#each [...new Set([...allItems])] as item}
					<li
						id={`${item}`}
						class={`roboto w-auto bg-[#ffd384] p-2 text-center text-[#cc5519] hover:scale-125 ${item.trim()}`}
					>
						<button on:click={() => update(item.trim())}>{item}</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	<div class="mt-4 mb-24 flex min-w-full flex-col items-start gap-y-4">
		{#each categories as category}
			<Category data={category} />
		{/each}
	</div>
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

	:global(.active) {
		background-color: #ef945f;
	}

	.input {
		background-color: #fff5e4;
	}
</style>
