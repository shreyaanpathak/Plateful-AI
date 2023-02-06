<script>
	import Leftpantry from './leftpantry.svelte';
	import Rightpantry from './rightpantry.svelte';
	import Popup from './popup.svelte';
	import { visible } from '$lib/stores/pantrystore';
	let isV = false;
	visible.subscribe((value) => {
		isV = value;
	});
</script>

<div class="pantrycontainer flex h-full w-screen overflow-hidden">
	<div class="leftcontainer h-screen w-1/3 overflow-scroll">
		<Leftpantry />
	</div>
	<div class="rightcontainer h-screen w-2/3 overflow-scroll">
		<Rightpantry />
	</div>
	{#if isV}
		<div class="popup-component drop-shadow-xl">
			<Popup />
		</div>
	{/if}
</div>

<style>
	.leftcontainer {
		background-color: #ffe5b7;
	}

	.rightcontainer {
		background-color: #ffd384;
	}

	.popup-component {
		position: absolute;
		left: 25%;
		top: 0%;
		width: 50%;
		overflow: scroll;
		height: 100vh;
	}
</style>
