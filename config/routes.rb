Rails.application.routes.draw do
  namespace :api do
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]
    resources :questions, only: [:create]

    delete :logout, to: "sessions#logout"
    get :logged_in, to: "sessions#logged_in"
  end


  get '*path', to: 'homepage#index'
  root 'homepage#index'

  mount ActionCable.server, at: '/cable'
end
