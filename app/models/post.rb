class Post < ActiveRecord::Base
  validates :poster_id, :postee_id, :body, presence: true

  belongs_to :poster,
    class_name: :User,
    primary_key: :id,
    foreign_key: :poster_id

  belongs_to :postee,
    class_name: :User,
    primary_key: :id,
    foreign_key: :postee_id

  has_many :comments,
    as: :commentable

  has_many :likes,
    as: :likeable
end
