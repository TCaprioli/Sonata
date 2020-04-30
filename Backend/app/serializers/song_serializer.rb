class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :mp3, :cover_art, :artist

  def artist
    self.object.artist
  end
end
