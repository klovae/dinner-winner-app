class CreatePlanTags < ActiveRecord::Migration[6.0]
  def change
    create_table :plan_tags do |t|
      t.belongs_to :plan
      t.belongs_to :tag
    end
    
  end
end
