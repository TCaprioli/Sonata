Rails.application.routes.draw do
  resources :playlists, only: [:index,:create, :show, :update, :destroy]
  resources :playlist_songs, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :update]
  resources :songs, only:[:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
