<script>
	let rowClasses = 'w-1/2 h-96 row-elem';
	let headerClasses = 'mt-24 font-bold text-4xl';
	import Img1 from '$lib/assets/img1.png';
	import Img2 from '$lib/assets/img2.png';
	import '@fontsource/frank-ruhl-libre';
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import Typewriter from 'svelte-typewriter';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<div class="pagecontainer">
		<div class="topnav font-bold text-4xl pt-2 pl-2 pb-2 basis-full">Plateful</div>
		<div class="flex flex-row h-screen justify-center items-center">
			<div class={rowClasses}>
				<img in:fly={{ duration: 1200 }} alt="Food" class="my-6 m-auto h-full" src={Img1} />
			</div>
			<div class="{rowClasses} {headerClasses} mb-48 flex flex-col items-center justify-center">
				<Typewriter interval={40}>
					<h1 in:slide class="text-5xl font-extrabold tracking-tight leading-snug">
						The Best Homecooked Meals in Your Own Pantry
					</h1>
				</Typewriter>
				<p
					in:slide={{ delay: 300 }}
					class="text-xl font-normal mt-14 p-6 rounded-xl w-9/12 leading-relaxed paragraph"
				>
					Plateful is the ultimate kitchen assistant that helps you make the most out of the food
					you
					<span class="underline-light-blue-300 underline underline-offset-2">already have</span> at
					home. Say goodbye to food waste and hello to delicious, home-cooked meals.
				</p>
			</div>
		</div>

		<div class="flex flex-row accent h-screen items-center justify-center">
			<div class="{rowClasses} {headerClasses} flex flex-col items-center">
				<h1 class="text-6xl font-extrabold tracking-tight">What is Plateful?</h1>
				<p
					class="text-xl font-normal mt-14 mb-6 p-6 w-8/12 rounded-xl text-left leading-relaxed paragraph"
				>
					Plateful makes meal planning and recipe creation effortless. Simply select the food items
					you have in your kitchen and the website will search through a database of thousands of
					recipes to find the perfect match. From hearty soups and stews to delectable desserts,
					Plateful has something for every palate.
				</p>
			</div>
			<div class={rowClasses}>
				<img alt="chefs" class="my-6 m-auto h-full" src={Img2} />
			</div>
		</div>

		<div class="flex flex-row h-screen items-center justify-center">
			<div class={rowClasses}>
				<img alt="food" class="my-6 m-auto h-full" src={Img1} />
			</div>
			<div class="{rowClasses} {headerClasses} flex flex-col items-center">
				<h1 class="text-5xl font-extrabold tracking-tight">How Does Plateful Work?</h1>
				<p
					class="text-xl font-bold mt-14 p-4 rounded-xl pr-8 leading-relaxed paragraph text-right w-8/12"
				>
					Plateful analyzes a user's ingredients and suggest recipes that not only use up what they
					already have, but also make the most of their unique flavor profiles. Whether it's a busy
					weeknight or a special occasion, Plateful is the perfect tool for anyone looking to
					simplify meal planning and elevate their cooking game
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.row-elem {
		text-align: center;
		color: #cc5519;
	}

	.accent {
		background-color: #fed384;
	}

	.pagecontainer {
		background-color: #ffe5b7;
		font-family: 'Frank Ruhl Libre', Verdana, Geneva, Tahoma, sans-serif;
	}

	.topnav {
		color: #ffe5b7;
		background-color: rgba(254, 136, 75, 1);
		overflow: hidden;
	}

	/* Style the links inside the navigation bar */
	.topnav a {
		float: right;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
		border-radius: 5px;
	}

	/* Change the color of links on hover */
	.topnav a:hover {
		background-color: white;
		color: black;
	}

	.paragraph {
		border-width: 2px;
		background-color: #fff5e4;
	}

	/* Add a color to the active/current link */
	.topnav a.active {
		background-color: lightcoral;
		color: white;
	}
</style>
