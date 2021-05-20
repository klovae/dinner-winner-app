class ChangeDescriptionToNotes < ActiveRecord::Migration[6.0]
  def change
    rename_column :meals, :description, :notes
  end
end
