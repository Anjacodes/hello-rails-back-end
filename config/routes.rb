# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :v1 do
    get 'greetings', to: 'greetings#hello'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
