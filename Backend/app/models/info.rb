class Info < ApplicationRecord
  belongs_to :artist
  belongs_to :user
  belongs_to :playlist_song
  belongs_to :playlist
  belongs_to :song
end
