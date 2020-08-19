# Sonata-API

## Description

Sonata-API is a RESTful API built on Ruby-on-Rails and POSTgres database.

## Endpoints

Useful endpoints to be aware of include:

  * https://sonata-api.herokuapp.com/songs
  * https://sonata-api.herokuapp.com/playlists
  * https://sonata-api.herokuapp.com/playlist_songs

## Relationship

In the live demo only one user is being utilized. The entire relationship model is as follows:

Users -> playlists -> playlist_songs <- songs <- artists
