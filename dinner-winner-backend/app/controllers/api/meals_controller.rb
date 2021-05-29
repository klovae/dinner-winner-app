class Api::MealsController < ApplicationController

  def create
    plan = Plan.find_by(id: params[:plan_id])
    new_meals = []
    meal_params.each do |meal|
      plan.meals << Meal.new(meal)
      new_meals << plan.meals.last 
    end
    render json: new_meals.to_json( except: [:updated_at, :created_at] )
  end

  def destroy
    meal = Meal.find_by(id: params[:id])
    meal.destroy
    render json: meal.to_json( except: [:updated_at, :created_at] )

  end

  private

  def meal_params
    params.require(:meal).map do |p|
      p.permit(:title, :recipe_url, :notes)
    end
  end


end
