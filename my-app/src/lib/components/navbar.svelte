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
