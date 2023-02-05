<script lang="ts">
	import { page } from '$app/stores';
	const hrefs = ['Home', 'Ingredients', 'About'];

	function isActive(href: string) {
		console.log($page.url.pathname, href);
		return ($page.url.pathname === '/' && href === 'Home') || $page.url.pathname.slice(1) === href;
	}
</script>

<body>
	<div class="topnav">
		{#each hrefs as href}
			<a class={isActive(href) ? 'active' : ''} href={href === 'Home' ? '/' : href}>{href}</a>
		{/each}
	</div>
</body>

<style>
	.topnav {
		background-color: rgba(254, 136, 75, 1);
		overflow: hidden;
		border-radius: 20px;
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
