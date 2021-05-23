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

    params[:tag_ids].each do |tag_id|
      new_plan.tags << Tag.find_by(id: tag_id)
    end

    render json: PlanSerializer.new(new_plan).to_serialized_json
  end

end
