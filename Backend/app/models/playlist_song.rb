class PlaylistSong < ApplicationRecord
  belongs_to :playlist
  belongs_to :song
  has_many :infos
end
