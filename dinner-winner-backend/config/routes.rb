Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :plans, only: [:index, :create, :update, :destroy]
    resources :meals, only: [:create, :destroy]
    resources :ratings, only: [:create]
end
