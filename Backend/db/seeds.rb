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
a11 = Artist.create(name: "Dirty Loops")
a12 = Artist.create(name: "Nujabes")
a13 = Artist.create(name: "Gold Link")
a14 = Artist.create(name: "Q Lazzarus")
a15 = Artist.create(name: "Enigma")
a16 = Artist.create(name: "Future ft. Drake")
a17 = Artist.create(name: "Stone Temple Pilots")
a18 = Artist.create(name: "Avenged Sevenfold")
a19 = Artist.create(name: "Mari")
a20 = Artist.create(name: "Emarosa")
a21 = Artist.create(name: "Sébastien Tellier")


u1 = User.create(username:"Tyler")

s1 = Song.create(name: "JA ARA E", mp3: "ja-ara-e.mp3", cover_art: "ja-ara-e.jpg", artist_id: a1.id)
s2 = Song.create(name: "Say So", mp3: "say-so.mp3", cover_art: "say-so.jpg", artist_id: a2.id)
Song.create(name: "Feel it all Around", mp3: "feel-it-all-around.mp3", cover_art: "feel-it-all-around.jpg", artist_id: a11.id)
Song.create(name: "Them Changes", mp3: "them-changes.mp3", cover_art: "them-changes.jpg", artist_id: a10.id)
Song.create(name: "Pour Some Sugar On Me", mp3: "pour-some-sugar-on-me.mp3", cover_art: "pour-some-sugar-on-me.jpg", artist_id: a4.id)
Song.create(name: "Best Part", mp3: "best-part.mp3", cover_art: "best-part.jpg", artist_id: a6.id)
Song.create(name: "Shea Butter Baby", mp3: "shea-butter-baby.mp3", cover_art: "shea-butter-baby.jpg", artist_id: a3.id)
Song.create(name: "When I See you", mp3: "when-i-see-you.mp3", cover_art: "when-i-see-you.jpg", artist_id: a8.id)
Song.create(name: "Tempted To Touch", mp3: "tempted-to-touch.mp3", cover_art: "tempted-to-touch.jpg", artist_id: a7.id)
Song.create(name: "Dreams", mp3: "dreams.mp3", cover_art: "dreams.jpg", artist_id: a5.id)
Song.create(name: "Tadaow", mp3: "tadow.mp3", cover_art: "tadow.jpg", artist_id: a9.id)
Song.create(name: "Work Shit Out", mp3: "work-shit-out.mp3", cover_art: "work-shit-out.jpg", artist_id: a11.id)
Song.create(name: "Feather", mp3: "feather.mp3", cover_art: "feather.jpg", artist_id: a12.id)
Song.create(name: "Crew", mp3: "crew.mp3", cover_art: "crew.jpg", artist_id: a13.id)
Song.create(name: "Sadness", mp3: "sadness.mp3", cover_art: "sadness.jpg", artist_id: a15.id)
Song.create(name: "Life Is Good", mp3: "life-is-good.mp3", cover_art: "life-is-good.jpg", artist_id: a16.id)
Song.create(name: "Plush", mp3: "plush.mp3", cover_art: "plush.jpg", artist_id: a17.id)
Song.create(name: "So Far Away", mp3: "so-far-away.mp3", cover_art: "so-far-away.jpg", artist_id: a18.id)
Song.create(name: "Atlas", mp3: "atlas.mp3", cover_art: "atlas.jpg", artist_id: a19.id)
Song.create(name: "Givin' Up", mp3: "givin-up.mp3", cover_art: "givin-up.jpg", artist_id: a20.id)
Song.create(name: "Look", mp3: "look.mp3", cover_art: "look.jpg", artist_id: a21.id)
Song.create(name: "Goodbye Horses", mp3: "goodbye-horses.mp3", cover_art: "goodbye-horses.jpg", artist_id: a14.id)

p1 = Playlist.create(name:"playlist 1", user_id: u1.id)

PlaylistSong.create(playlist_id: p1.id , song_id: s1.id)
PlaylistSong.create(playlist_id: p1.id , song_id: s2.id)


puts "done!"
