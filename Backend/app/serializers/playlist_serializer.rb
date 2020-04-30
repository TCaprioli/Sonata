class PlaylistSerializer < ActiveModel::Serializer
  attributes :id,:name,:songs
  def songs
    self.object.songs.map do |song|{
      id:song.id,
        name:song.name,
        mp3:song.mp3,
        cover_art:song.cover_art,
        artist: song.artist
    }
    end
  end
end
