class User < ApplicationRecord
  has_secure_password

  valdidates_presence_of :email
  valdidates_uniqueness_of :email
end
