# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

Meal.delete_all
Tag.delete_all
Plan.delete_all


keto = Tag.create(name: 'keto', description: 'Complies with ketogenic diet guidelines: meals are extremely low in carbs, typically high in fat')
no_gluten = Tag.create(name: 'gluten-free', description: 'All meals in this plan are gluten-free')
no_dairy = Tag.create(name: 'dairy-free', description: 'All meals in this plan are dairy-free') 
quick_60 = Tag.create(name: 'quick 60', description: 'Prep time for meals in this category are under 60 minutes on average')
quick_30 = Tag.create(name: 'quick 30', description: 'Prep time for meals in this category are under 30 minutes on average')
veggie = Tag.create(name: 'vegetarian', description: 'All meals in this plan are meat-free but may contain animal products')
vegan = Tag.create(name: 'vegan', description: 'Meals in this plan contain no animal products (honey may be an exception in some cases)')
lo_1500 = Tag.create(name: 'low-cal 1500', description: 'Meals are low in calories so daily average is under 1500 total calories')
lo_1200 = Tag.create(name: 'low-cal 1200', description: 'Meals are low in calories so daily average is under 1200 total calories')
lo_1000 = Tag.create(name: 'low-cal 1000', description: 'Daily average is under 1000 total calories')
fasting = Tag.create(name: 'fasting', description: 'Meals are in this plan are specifically tailored for intermittent fasting')

plan_a = Plan.create(title: 'Gluten-free Mexican', description: 'Gluten-free, mostly mexican inspired dishes for fast and healthy meals', likes: 2)
plan_a.tags = [quick_60, no_gluten]
plan_a.save

plan_a.meals << Meal.create(
  title: 'One Skillet Mexican Rice Casserole',
  recipe_url: 'https://www.makingthymeforhealth.com/one-skillet-mexican-rice-casserole/',
  notes: 'Needs premade rice, easy cleanup',
  plan_id: plan_a.id
)

plan_a.meals << Meal.create(
  title: 'Slow-Cooker Beef Barbacoa',
  recipe_url: 'https://www.tasteofhome.com/recipes/slow-cooker-beef-barbacoa/',
  notes: 'Long cook time with slow-cooker but prep is only 20 minutes',
  plan_id: plan_a.id
)

plan_a.meals << Meal.create(
  title: 'Roasted Poblano Corn Chowder',
  recipe_url: 'https://www.isabeleats.com/roasted-poblano-corn-chowder/',
  notes: 'Definitely not low fat',
  plan_id: plan_a.id
)

plan_a.meals << Meal.create(
  title: 'Southwest Chicken Soup',
  recipe_url: 'https://www.isabeleats.com/southwest-chicken-soup/',
  notes: "Can substitute for the corn chowder if you don't like chowders",
  plan_id: plan_a.id
)

plan_a.meals << Meal.create(
  title: 'Tequila Lime Fish Tacos',
  recipe_url: 'https://www.loveandlemons.com/tequila-lime-fish-tacos/',
  notes: 'Need to use corn tortillas for gluten-free. Has a dairy-free option too',
  plan_id: plan_a.id
)

plan_a.meals << Meal.create(
  title: 'Vegetarian Breakfast Egg Quesadillas',
  recipe_url: 'https://avocadopesto.com/vegetarian-breakfast-egg-quesadillas/',
  notes: 'Easy to modify, also dairy-free',
  plan_id: plan_a.id
)

plan_b = Plan.create(title: 'Meatless Eating For Meat-Eaters', description: 'Meals designed to appeal to non-vegetarians', likes: 0)
plan_b.tags = [quick_60, veggie]
plan_b.save

plan_b.meals << Meal.create(
  title: 'Vegan Mushroom Philly Cheese Sandwich',
  recipe_url: 'https://healthyhappylife.com/vegan-mushroom-philly-cheese/',
  notes: "No dairy, all-mushroom (no seitan) philly cheese",
  plan_id: plan_b.id
)

plan_b.meals << Meal.create(
  title: 'Indian-ish Nachos',
  recipe_url: 'https://cooking.nytimes.com/recipes/1020450-indian-ish-nachos-with-cheddar-black-beans-and-chutney',
  notes: 'Includes two different sauces',
  plan_id: plan_b.id
)

plan_b.meals << Meal.create(
  title: 'Eggplan Parmesan',
  recipe_url: 'https://www.allrecipes.com/recipe/25321/eggplant-parmesan-ii/',
  notes: 'No-fry version',
  plan_id: plan_b.id
)

plan_b.meals << Meal.create(
  title: 'Quinoa Vegetable Soup',
  recipe_url: 'https://cookieandkate.com/quinoa-vegetable-soup-recipe/',
  notes: 'Good for leftovers',
  plan_id: plan_b.id
 )

 plan_b.meals << Meal.create(
  title: 'Mushroom Stroganoff',
  recipe_url: 'https://evergreenkitchen.ca/recipe/mushroom-stroganoff',
  notes: 'One pot, lighter version with mushrooms and and a non-dairy sauce',
  plan_id: plan_b.id
 )

