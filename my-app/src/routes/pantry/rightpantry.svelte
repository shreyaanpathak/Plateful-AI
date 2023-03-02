<script lang="ts">
	import { culture, GRECIPE, selected_items } from '$lib/stores/pantrystore';
	import Preview from './preview.svelte';
	let currentCulture = '';
	culture.subscribe((value) => {
		currentCulture = value;
	});

	const imageurl =
		'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FSeries%2F2022-07-How-To-Make-an-Omelet-Step-by-Step%2F2022_July_K_EDR_OMELET_31904';
	let items: string[] = [];
	let recipes: {
		name: string;
		ingredients: string[];
		steps: string[];
		image: string;
	}[] = [
		{
			name: 'Omelette',
			ingredients: ['eggs', 'milk', 'butter'],
			steps: ['1. stir eggs', '2. cook eggs', '3. enjoy!'],
			image: imageurl
		},
		{
			name: 'Omelette',
			ingredients: ['eggs', 'milk', 'butter'],
			steps: ['1. stir eggs', '2. cook eggs', '3. enjoy!'],
			image: imageurl
		},
		{
			name: 'Omelette',
			ingredients: ['eggs', 'milk', 'butter'],
			steps: ['1. stir eggs', '2. cook eggs', '3. enjoy!'],
			image: imageurl
		}
	];
	let loading = false;
	selected_items.subscribe((value) => (items = value));

	async function handleSubmit() {
		/*const response = await fetch(
			`http://localhost:5000/recipe/${currentCulture}/${items.join('-')}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors'
			}
		);*/
		console.log( JSON.stringify({ingredients: items,culture: currentCulture}));
		loading = true;
		const response = await fetch("/api/recipe", 
		{
			method: "POST",
			body: JSON.stringify({
				ingredients: items,
				culture: currentCulture
			}),
		});
		loading = false;
		const data = await response.text();
		const json = JSON.parse(data);
		console.log(`data: ${data}`);
		recipes = [json];
		GRECIPE.set(json);
	}
</script>

<div class="mt-16 ml-6 text-4xl font-bold text-[#FF772B]">
	<div class="height flex flex-row">
		<div class="flex flex-col">
		<h1 class="font-serif">You have selected {items.length} items</h1>
		{#if loading}
		<span class="p-4 flex items-center flex-row rounded-xl bg-blue-300">
			<svg class="animate-spin right-0 left-0 mr-3 h-20 w-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		  	</svg>
			Loading...
		</span>
		  {/if}
		</div>
		<button
			on:click={handleSubmit}
			class="mb-5 ml-6 rounded-xl border-2 border-transparent bg-[#FFE5B7] p-2 font-bold text-[#AC3E00]"
			>Submit</button
		>
	</div>
</div>

<div class="mb-24 flex flex-col items-center gap-4">
	{#each recipes as recipe}
		<Preview {recipe} />
	{/each}
</div>
