class Artist < ApplicationRecord
  has_many :songs
  has_many :infos
end
