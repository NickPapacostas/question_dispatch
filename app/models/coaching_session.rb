class CoachingSession < ApplicationRecord
  has_one :student
  has_one :coach
end