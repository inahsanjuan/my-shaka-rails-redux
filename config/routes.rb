Rails.application.routes.draw do
  root "sims#index"
  resources :users, only: [:index, :show]
  match "*path", to: "sims#index", via: :all
end
