class RemoveMealFromMeals < ActiveRecord::Migration[6.0]
  def change
    remove_column :meals, :meal
  end
end
