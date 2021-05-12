class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :title
      t.string :recipe_url
      t.text :description
      t.string :meal
      t.references :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
