class UserSerializer < ActiveModel::Serializer
  attributes :id,:username, :playlists
  def playlists
    self.object.playlists.map do |playlist|{
      id: playlist.id,
      name: playlist.name,
      songs: playlist.songs.map do |song|{
        id:song.id,
        name:song.name,
        mp3:song.mp3,
        cover_art:song.cover_art,
        artist: song.artist
      }
    end
    }
    end
  end
end
