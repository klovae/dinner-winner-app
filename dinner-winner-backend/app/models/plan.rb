class Plan < ApplicationRecord
  has_many :ratings
  has_many :meals
  has_many :plan_tags
  has_many :tags, through: :plan_tags
end
