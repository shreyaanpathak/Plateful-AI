<script>
	import Leftpantry from './leftpantry.svelte';
	import Rightpantry from './rightpantry.svelte';
</script>

<div class="pantrycontainer flex h-full w-screen overflow-hidden">
	<div class="leftcontainer h-screen w-1/3 overflow-scroll">
		<Leftpantry />
	</div>
	<div class="rightcontainer h-screen w-2/3 overflow-scroll">
		<Rightpantry />
	</div>
</div>

<style>
	.leftcontainer {
		background-color: #ffe5b7;
	}

	.rightcontainer {
		background-color: #ffd384;
	}
</style>
