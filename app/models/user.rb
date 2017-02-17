# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  f_name                     :string           not null
#  l_name                     :string           not null
#  email                      :string           not null
#  sex                        :string           not null
#  birthday                   :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_photo_file_name    :string
#  profile_photo_content_type :string
#  profile_photo_file_size    :integer
#  profile_photo_updated_at   :datetime
#  cover_photo_file_name      :string
#  cover_photo_content_type   :string
#  cover_photo_file_size      :integer
#  cover_photo_updated_at     :datetime
#

class User < ActiveRecord::Base
  validates :f_name, presence: true
  validates :l_name, presence: true
  validates :sex, :birthday, presence: true
  validates :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :profile_photo, default_url: "default-profile-photo.jpg"
  has_attached_file :cover_photo, default_url: "default-cover-photo.jpg"
  validates_attachment_content_type :profile_photo, :cover_photo,
  content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end
end
