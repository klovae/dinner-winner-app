class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.integer :stars
      t.references :plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
