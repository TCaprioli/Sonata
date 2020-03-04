class PlaylistSongsController < ApplicationController

  def index
    @playlist_songs = PlaylistSong.all
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

    render json: info.to_json(except: [:created_at, :updated_at])
  end

  def show
    @playlist_song = PlaylistSong.find(params[:id])

    render json: info.to_json(except: [:created_at, :updated_at])
  end

  def create
    @playlist_song = PlaylistSong.create(playlist_song_params)
    render json: @playlist_song.to_json(except: [:created_at, :updated_at])
  end

  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    @playlist_song.destroy
  end

  private

  def playlist_song_params
    params.permit(:playlist_id, :song_id)
  end
end
