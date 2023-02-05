export default interface Category {
    name: string;
    items: string[];
}


export const Essentials = {
    name: 'Essentials',
    items: `Butter
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
`.split('\n')
}

export const Vegetables = {
    name: 'Vegetables & Greens',
    items: `Asparagus
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
    `.split('\n')
}

export const Fruits = {
    name: 'Fruits',
    items: `Bananas
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
    Apples`.split('\n')
}

export const Meats = {
    name: 'Meats & Seafood',
    items: `Beef
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
    Crab`.split('\n')
}