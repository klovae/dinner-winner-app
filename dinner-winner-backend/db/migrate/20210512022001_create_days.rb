class CreateDays < ActiveRecord::Migration[6.0]
  def change
    create_table :days do |t|
      t.integer :number
      t.references :plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
