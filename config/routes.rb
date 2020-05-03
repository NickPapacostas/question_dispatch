Rails.application.routes.draw do
  namespace :api do
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]

    delete :logout, to: "sessions#logout"
    get :logged_in, to: "sessions#logged_in"
  end 

  
  get '*path', to: 'homepage#index'
  root 'homepage#index'

  
  # get '/dashboard', to: 'homepage#index'
end
