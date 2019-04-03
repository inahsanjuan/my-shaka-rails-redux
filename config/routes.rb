Rails.application.routes.draw do
  root "sims#index"

  resources :users, only: [:index, :show]
end
