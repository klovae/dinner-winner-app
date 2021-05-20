class PlanSerializer
  def initialize(plan_object)
    @plan = plan_object
  end

  def to_serialized_json
    options = {
      include: {
        tags: {
          only: [:id, :name]
        },
        meals: {
          only: [:id, :title, :recipe_url, :notes]
        }
        
      }, except: [:created_at, :updated_at]
    }

    @plan.to_json(options)
  end
  
end
