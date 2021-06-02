class Api::PlansController < ApplicationController

  def index
    plans = Plan.all
    render json: PlanSerializer.new(plans).to_serialized_json
  end

  def create
    new_plan = Plan.create(plan_params)
    if new_plan.save
      if params[:tag_ids].length > 0
        params[:tag_ids].each do |tag_id|
          new_plan.tags << Tag.find_by(id: tag_id)
        end
      end

      render json: PlanSerializer.new(new_plan).to_serialized_json
    else
      render json: new_plan.errors.to_json
    end
  end

  private

  def plan_params
    params.require(:plan).permit(
      :title, 
      :description,
      meals_attributes: [
        :title, :recipe_url, :notes
      ])
  end

end
