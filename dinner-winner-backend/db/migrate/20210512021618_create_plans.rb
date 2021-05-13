class CreatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :plans do |t|
      t.string :title
      t.text :description
      t.integer :likes
      t.timestamps
    end
  end
end
