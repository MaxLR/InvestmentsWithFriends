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

  has_attached_file :profile_photo, default_url: "default-profile-photo.jpg", s3_protocol: :https
  has_attached_file :cover_photo, default_url: "default-cover-photo.jpg", s3_protocol: :https
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  has_many :sent_friendships,
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :friender_id

  has_many :received_friendships,
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :friendee_id

  has_many :sent_posts,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :poster_id

  has_many :received_posts,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :postee_id

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :user_id

  has_many :likes,
    class_name: :Like,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :user_only_name, -> { select(:f_name, :l_name, :profile_photo) },
   class_name: :User

  after_initialize :ensure_session_token

  attr_reader :password

  def all_friendships
    accepted_friendships = self.sent_friendships
      .includes(friendee: [:sent_posts, :received_posts]).where(status: "accepted")
    accepted_requests = self.received_friendships
      .includes(friender: [:sent_posts, :received_posts]).where(status: "accepted")
    accepted_requests + accepted_friendships
  end

  def all_friends
    self.all_friendships.map do |friendship|
      if friendship.friender_id == self.id
        friendship.friendee
      else
        friendship.friender
      end
    end
  end

  def friend_posts
    all_posts = []

    self.all_friends.each do |friend|
      all_posts += friend.sent_posts + friend.received_posts
    end

    return all_posts.uniq
  end

  def user_posts
    (self.sent_posts + self.received_posts).uniq
  end

  def requested_friendships
    self.sent_friendships.where(status: "pending")
  end

  def requesting_friendships
    self.received_friendships.includes(:friender).where(status: "pending")
  end

  def pending_friends
    self.requesting_friendships.map do |friendship|
      friendship.friender
    end
  end

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
