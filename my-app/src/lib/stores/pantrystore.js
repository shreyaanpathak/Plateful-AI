import { readable, writable } from "svelte/store";



export const GRECIPE = writable({});

export const visible = writable(false);
export const selected_items = writable(new Array());

export const culture = writable("");

export const pantry_items = readable(`
Butter
Eggs 
Garlic
Flour
Olive oil
Rice 
Ketchup 
Soy Sauce
Bread
Brown Sugar
Oregano 
Potato
Honey 
Paprika 
Vanilla extract 
Spaghetti 
Baking Soda
Vegetable Oil
Milk
Almond Milk
Oat Milk
Coconut Milk
Asparagus
Bell pepper
Broccoli
Cabbage
Carrot
Celery
Corn
Cucumber
Garlic
Ginger
Lettuce
Mushroom
Onion
Parsley
Peas
Potato
Radish
Spinach
Tomatoes
Collard greens
Fennel
Green beans
Olives
Peppers
Shallots
Swiss chard
Turnips
Zucchini
Avocado
Bananas
Oranges
Grapes
Strawberries
Blueberries
Raspberries
Blackberries
Cherries
Plums
Pears
Peaches
Pineapple
Mango
Kiwi
Papaya
Watermelon
Cantaloupe
Honeydew
Grapefruit
Cranberries
Blackcurrants
Apples
Beef
Pork
Chicken
Turkey
Lamb
Veal
Bison
Duck
Goose
Venison
Elk
Rabbit
Quail
Salmon
Tuna
Cod
Sole
Halibut
Shrimp
Crab
`.split('\n').filter(x => x.length > 0));