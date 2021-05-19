class Api::PlansController < ApplicationController

  def index
    plans = Plan.all
    render json: PlanSerializer.new(plans).to_serialized_json
  end

end
