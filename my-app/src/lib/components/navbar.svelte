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
    let rowClasses = "w-3/6 h-96 row-elem";
    let headerClasses = "m-8 font-bold text-4xl p-14";

</script>

<body>
	<div class="topnav font-bold text-4xl pt-2 pl-2 pb-2">Plateful</div>

    <div class="flex flex-row">
        <div class={rowClasses}>
            <img class="my-6 m-auto h-full" src={Img1}>
        </div>
        <div class="{rowClasses} {headerClasses}">
            <h1>The Best Homecooked Meal in Your Own Pantry</h1>
            <p class="text-xl font-normal pt-14 leading-relaxed">
                Plateful is the ultimate kitchen assistant that helps you make the most out 
                of the food you already have at home. Say goodbye to food waste and hello to
                 delicious, home-cooked meals.
            </p>
        </div>
    </div>

    <div class="flex flex-row accent">
        <div class="{rowClasses} {headerClasses}">
            <h1>What is Plateful?</h1>
            <p class="text-xl font-normal pt-14 leading-relaxed">
                Plateful makes meal planning and recipe creation effortless. Simply select 
                the food items you have in your kitchen and the website will search through
                 a database of thousands of recipes to find the perfect match. From hearty 
                 soups and stews to delectable desserts, Plateful has something for every palate.
            </p>
        </div>
        <div class={rowClasses}>
            <img class="my-6 m-auto h-full" src={Img2}>
        </div>
    </div>

    <div class="flex flex-row">
        <div class={rowClasses}>
            <img class="my-6 m-auto h-full" src={Img1}>
        </div>
        <div class="{rowClasses} {headerClasses}">
            <h1>How Does Plateful Work?</h1>
            <p class="text-xl font-normal pt-14 leading-relaxed">
                Plateful analyzes a user's ingredients and suggest recipes that not only 
                use up what they already have, but also make the most of their unique flavor
                 profiles. Whether it's a busy weeknight or a special occasion, Plateful is 
                 the perfect tool for anyone looking to simplify meal planning and elevate 
                 their cooking game
            </p>
        </div>
    </div>
</body> 

<style>
    .row-elem {
        text-align: center;
        color: #CC5519;
    }

    .accent {
        background-color: #FED384;
    }

	body {
		background-color: #ffe5b7;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	.topnav {
        color: #FFE5B7;
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
