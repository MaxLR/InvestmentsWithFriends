Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create, :update, :destroy]
    resources :posts, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
    resources :likes, only: [:create, :destroy]
  end
end
