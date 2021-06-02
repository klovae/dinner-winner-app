class Plan < ApplicationRecord
  has_many :ratings
  has_many :meals
  has_many :plan_tags
  has_many :tags, through: :plan_tags
  accepts_nested_attributes_for :meals, allow_destroy: true

  validates :title, presence: true
  

end
