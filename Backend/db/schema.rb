# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_28_221416) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.bigint "info_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["info_id"], name: "index_artists_on_info_id"
  end

  create_table "infos", force: :cascade do |t|
    t.bigint "info_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["info_id"], name: "index_infos_on_info_id"
  end

  create_table "playlist_songs", force: :cascade do |t|
    t.bigint "playlist_id", null: false
    t.bigint "song_id", null: false
    t.bigint "info_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["info_id"], name: "index_playlist_songs_on_info_id"
    t.index ["playlist_id"], name: "index_playlist_songs_on_playlist_id"
    t.index ["song_id"], name: "index_playlist_songs_on_song_id"
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.bigint "info_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["info_id"], name: "index_playlists_on_info_id"
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "name"
    t.string "mp3"
    t.string "cover_art"
    t.bigint "artist_id", null: false
    t.bigint "info_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_songs_on_artist_id"
    t.index ["info_id"], name: "index_songs_on_info_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.bigint "info_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["info_id"], name: "index_users_on_info_id"
  end

  add_foreign_key "infos", "infos"
  add_foreign_key "playlist_songs", "playlists"
  add_foreign_key "playlist_songs", "songs"
  add_foreign_key "playlists", "users"
  add_foreign_key "songs", "artists"
end
