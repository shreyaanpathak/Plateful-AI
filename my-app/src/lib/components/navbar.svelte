<script lang="ts">
	import { page } from '$app/stores';
	const hrefs = ['Home', 'Ingredients', 'About'];

	function isActive(href: string) {
		console.log($page.url.pathname, href);
		return ($page.url.pathname === '/' && href === 'Home') || $page.url.pathname.slice(1) === href;
	}

	// images
	import TopLeft from '$lib/assets/tidepod1.png';
	import Img1 from '$lib/assets/img1.png';
	import Img2 from '$lib/assets/img2.png';

	// classes for various elements
	let rowClasses = 'w-3/6 h-96 row-elem';
	let headerClasses = 'm-8 font-bold text-4xl p-14';
</script>

<div class="topnav basis-full pt-2 pl-2 pb-2 text-4xl font-bold">Plateful</div>

<style>
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
