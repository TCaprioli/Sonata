Rails.application.routes.draw do
  resources :playlists, only: [:show, :update]
  resources :playlist_songs, only: [:index, :create, :update, :destroy]
  resources :users, only: [:show, :update, ]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
