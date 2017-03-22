class Comment < ActiveRecord::Base
  validates :body, :user_id, :commentable_id, :commentable_type, presence: true
  validates :level, inclusion: { in: [1, 2] }

  belongs_to :commentable,
    polymorphic: true

  belongs_to :user

  has_many :comments,
    as: :commentable
end
