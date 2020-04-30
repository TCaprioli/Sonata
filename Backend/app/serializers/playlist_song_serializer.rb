class PlaylistSongSerializer < ActiveModel::Serializer
  attributes :id, :playlist_id, :song
  def song
   { id:self.object.song.id,
    name:self.object.song.name,
    mp3:self.object.song.mp3,
    cover_art:self.object.song.cover_art,
    artist: self.object.song.artist}
  end
end
