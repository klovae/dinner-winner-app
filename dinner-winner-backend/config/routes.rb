Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do  
    resources :plans, only: [:index, :create, :update, :destroy] do
      resources :meals, only: [:index, :create, :destroy]
    end

    resources :tags, only: [:index]
  end
end
