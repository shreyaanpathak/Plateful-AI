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
	selected_items.subscribe((value) => (items = value));

	async function handleSubmit() {
		const response = await fetch(
			`http://localhost:5000/recipe/${currentCulture}/${items.join('-')}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors'
			}
		);
		const data = await response.json();
		console.log(`data: ${data}`);
		recipes = [JSON.parse(data)];
		GRECIPE.set(JSON.parse(data));
		console.log(recipes, data);
	}
</script>

<div class="mt-16 ml-6 text-4xl font-bold text-[#FF772B]">
	<div class="height flex flex-row">
		<h1 class="">You have selected {items.length} items</h1>
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
