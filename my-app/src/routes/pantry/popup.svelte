<script>
	import Image from '$lib/assets/img1.png';
	import ExitImage from '$lib/assets/exit-button.webp';
	import { element } from 'svelte/internal';
	import { GRECIPE, visible } from '$lib/stores/pantrystore';
	import '@fontsource/frank-ruhl-libre';
	let recipe;
	GRECIPE.subscribe((value) => {
		recipe = value;
	});
	let isV = false;
	visible.subscribe((value) => {
		isV = value;
	});
	let title = recipe.name ?? 'Title';
	let ingredients = recipe.ingredients ?? ['screw JAVA'];
	let steps = recipe.steps ?? ['placeholder', 'placeholder 2'];
	function exitPopup() {
		visible.set(!isV);
	}
</script>

<div id="container" class="pb-10 pr-10">
	<img class="image p-10" src={Image} alt="" />
	<h1 class="ml-10 text-5xl">{title}</h1>
	<div class="ml-16">
		<h2 class="text-3xl">Ingredients</h2>
		<ul>
			{#each ingredients as i}
				<li>{i}</li>
			{/each}
		</ul>
		<h2 class="text-3xl">Instructions</h2>
		<ul>
			{#each steps as i}
				<li>{i}</li>
			{/each}
		</ul>
	</div>
	<div id="exit" on:click={exitPopup}>
		<button class=""><img src={ExitImage} /></button>
	</div>
</div>

<style>
	#container {
		border-radius: 15pt;
		background-color: #fff8ea;
		font-family: 'Frank Ruhl Libre', Verdana, Geneva, Tahoma, sans-serif;
	}

	.image {
		border-radius: 35pt;
	}

	#exit {
		position: absolute;
		right: 1.5%;
		top: 1.5%;
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-color: #fe884b;
		text-align: center;
		color: white;
		font-family: 'Frank Ruhl Libre', sans-serif;
		font-weight: 500;
		font-size: 25pt;
	}

	#exit img {
		filter: invert(1);
	}
</style>
