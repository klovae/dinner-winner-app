# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

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
plan_a.tags = [quick_30, no_gluten]
plan_a.save