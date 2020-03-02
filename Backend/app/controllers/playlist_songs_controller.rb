class PlaylistSongsController < ApplicationController
  def index
    @users = User.all
    @playlists = Playlist.all
    @songs = Song.all
    @artist = Artist.all

    info = {
      "users": @users,
      "playlists": @playlists,
      "songs": @songs,
      "artists": @artist
    }

    render json: info
  end
end
