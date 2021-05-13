class Tag < ApplicationRecord
  has_many :plan_tags
  has_many :plans, through: :plan_tags
end