class Api::TagsController < ApplicationController
  def index
    tags = Tag.all
    render json: tags.to_json( except: [:updated_at, :created_at] )
  end

end
