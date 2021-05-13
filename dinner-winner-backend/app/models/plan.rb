class Plan < ApplicationRecord
  belongs_to :category
  has_many :ratings
  has_many :meals
end
