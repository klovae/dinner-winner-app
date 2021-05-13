class Plan < ApplicationRecord
  belongs_to :category
  has_many :ratings
  has_many :meals
  has_and_belongs_to_many :tags
end
