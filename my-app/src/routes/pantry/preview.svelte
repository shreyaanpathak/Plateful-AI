<script lang="ts">
	export let recipe: {
		name: string;
		ingredients: string[];
		steps: string[];
		image: string;
	};

	import { visible } from '$lib/stores/pantrystore';
	let cur = false;
	visible.subscribe((value) => {
		cur = value;
	});
</script>

<button
	on:click={() => {
		visible.set(!cur);
		console.log(cur);
	}}
	class="flex w-fit flex-row overflow-scroll rounded-xl bg-[#FFF5E4] p-10"
>
	<img src={recipe.image ?? "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FSeries%2F2022-07-How-To-Make-an-Omelet-Step-by-Step%2F2022_July_K_EDR_OMELET_31904"} alt="screw this thing" class="w-1/4 rounded-xl" />
	<div class="ml-4 flex flex-col">
		<h1 class="text-2xl">{recipe.name}</h1>
		<div class="mt-10 overflow-scroll text-2xl">
			<span class="font-bold">Ingredients</span>:
			<ul>
				{#each recipe.ingredients.slice(0, 5) as i}
					<li>{i}</li>
				{/each}
				{#if recipe.ingredients.length > 5}
					...
				{/if}
			</ul>
		</div>
		<br />
	</div>
</button>
