Rails.application.routes.draw do

  # get '*page', to: 'homepage#index', constraints: ->(req) do
  #   !req.xhr? && req.format.html?
  # end

  root 'homepage#index'
end
