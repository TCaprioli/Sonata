Rails.application.routes.draw do
  resources :playlists
  resources :playlist_songs
  resources :songs
  resources :artists
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
