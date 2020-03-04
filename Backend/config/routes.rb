Rails.application.routes.draw do
  resources :playlists, only: [:index,:create, :show, :update, :destroy]
  resources :playlist_songs, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index, :show, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
