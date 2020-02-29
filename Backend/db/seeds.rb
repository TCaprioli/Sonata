# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
PlaylistSong.destroy_all
Song.destroy_all
Playlist.destroy_all
Artist.destroy_all
User.destroy_all


Artist.create(name:"Burna Boy")
User.create(username:"Tyler")
Song.create(name: "JA ARA E", cover_art:"0c42a99e64525bcfb979f5cb8872f249.1000x1000x1.jpg", artist_id: Artist.first.id)
Playlist.create(name:"playlist 1", user_id: User.first.id)
PlaylistSong.create(playlist_id: Playlist.first.id , song_id: Song.first.id)

puts "done!"
