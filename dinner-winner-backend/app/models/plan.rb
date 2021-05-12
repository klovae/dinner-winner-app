class Plan < ApplicationRecord
  belongs_to :category
  has_many :ratings
  has_many :days
  has_many :meals, through: :days
end
