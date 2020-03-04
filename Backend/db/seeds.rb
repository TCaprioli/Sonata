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


a1 = Artist.create(name: "Burna Boy")
a2 = Artist.create(name: "Doja Cat")
a3 = Artist.create(name: "Ari Lennox ft. J Cole")
a4 = Artist.create(name: "Def Leppard")
a5 = Artist.create(name: "Fleetwood Mac")
a6 = Artist.create(name: "H.E.R.")
a7 = Artist.create(name: "Rupee")
a8 = Artist.create(name: "Fantasia")
a9 = Artist.create(name: "Fjk & Masego")
a10 = Artist.create(name: "Thundercat")
a11 = Artist.create(name: "Washed out")

u1 = User.create(username:"Tyler")

s1 = Song.create(name: "JA ARA E", mp3: "ja-ara-e.mp3", cover_art: "ja-ara-e.jpg", artist_id: a1.id)
s2 = Song.create(name: "Say So", mp3: "say-so.mp3", cover_art: "say-so.jpg", artist_id: a2.id)
s3 = Song.create(name: "Feel it all Around", mp3: "feel-it-all-around.mp3", cover_art: "feel-it-all-around.jpg", artist_id: a11.id)
s4 = Song.create(name: "Them Changes", mp3: "them-changes.mp3", cover_art: "them-changes.jpg", artist_id: a10.id)
s5 = Song.create(name: "Pour Some Sugar On Me", mp3: "pour-some-sugar-on-me.mp3", cover_art: "pour-some-sugar-on-me.jpg", artist_id: a4.id)
s6 = Song.create(name: "Best Part", mp3: "best-part.mp3", cover_art: "best-part.jpg", artist_id: a6.id)
s7 = Song.create(name: "Shea Butter Baby", mp3: "shea-butter-baby.mp3", cover_art: "shea-butter-baby.jpg", artist_id: a3.id)
s8 = Song.create(name: "When I See you", mp3: "when-i-see-you.mp3", cover_art: "when-i-see-you.jpg", artist_id: a8.id)
s9 = Song.create(name: "Tempted To Touch", mp3: "tempted-to-touch.mp3", cover_art: "tempted-to-touch.jpg", artist_id: a7.id)
s10 = Song.create(name: "Dreams", mp3: "dreams.mp3", cover_art: "dreams.jpg", artist_id: a5.id)
s11 = Song.create(name: "Work Shit Out", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
# s11 = Song.create(name: "Tadow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
# s11 = Song.create(name: "Tadow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
# s11 = Song.create(name: "Tadow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
# s11 = Song.create(name: "Tadow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
# s11 = Song.create(name: "Tadow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
# s11 = Song.create(name: "Tadow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
# s11 = Song.create(name: "Tadow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
# s11 = Song.create(name: "Tadow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)

p1 = Playlist.create(name:"playlist 1", user_id: u1.id)

PlaylistSong.create(playlist_id: p1.id , song_id: s1.id)
PlaylistSong.create(playlist_id: p1.id , song_id: s2.id)


puts "done!"
