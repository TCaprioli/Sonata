class PlaylistsController < ApplicationController
  def index
    @users = User.all
    @playlists = Playlist.all
    @songs = Songs.all
    @artist = Artist.all

    info = {
      "users": @users,
      "playlists": @playlists,
      "songs": @songs,
      "artists": @artists
    }

    render json: info
  end
end
