class SongsController < ApplicationController
  has_many :playlists, through: :playlist_songs
  belongs_to :artist
end
