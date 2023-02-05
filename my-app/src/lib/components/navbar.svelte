<script lang="ts">
	import { page } from '$app/stores';
	const hrefs = ['Home', 'Ingredients', 'About'];

	function isActive(href: string) {
		console.log($page.url.pathname, href);
		return ($page.url.pathname === '/' && href === 'Home') || $page.url.pathname.slice(1) === href;
	}
</script>

<body>
	<div class="topnav font-bold text-4xl pt-2 pl-2 pb-2 text-[#FFE5B7]">Plateful</div>
</body>

<style>
	body {
		background-color: #ffe5b7;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	.topnav {
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

	/* Add a color to the active/current link */
	.topnav a.active {
		background-color: lightcoral;
		color: white;
	}
</style>
