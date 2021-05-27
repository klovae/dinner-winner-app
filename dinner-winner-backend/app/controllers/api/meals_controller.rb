class Api::MealsController < ApplicationController

  def create
    meals = meal_params
    binding.pry
    new_meals = meals.map do |meal|
      Meal.create(
        title: meal["title"],
        recipe_url: meal["recipe_url"],
        notes: meal["notes"],
        plan_id: meal["plan_id"]
      )
    end
    render json: new_meals.to_json( except: [:updated_at, :created_at] )
  end

  private

  def meal_params
    params.require(:meals).permit(:title, :recipe_url, :notes, :plan_id)
  end

end
