class Api::PlansController < ApplicationController

  def index
    plans = Plan.all
    render json: PlanSerializer.new(plans).to_serialized_json
  end

  def create
    new_plan = Plan.create(
      title: params[:title],
      description: params[:description],
      likes: 0
    )

    render json: new_plan
  end

end
