<script>
	import Leftpantry from './leftpantry.svelte';
	import Rightpantry from './rightpantry.svelte';
</script>

<div class="pantrycontainer flex h-screen w-screen">
	<div class="leftcontainer h-screen w-1/3">
		<Leftpantry />
	</div>
	<div class="rightcontainer h-screen w-2/3">
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
