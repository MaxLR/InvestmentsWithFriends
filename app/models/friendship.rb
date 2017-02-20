class Friendship < ActiveRecord::Base
  validates :friender_id, uniqueness: { scope: :friendee_id }
  validates :friender_id, :friendee_id, :status, presence: true
  validates :status, inclusion: { in: ["pending", "accepted", "rejected"] }

  belongs_to :friender,
    class_name: :User,
    primary_key: :id,
    foreign_key: :friender_id

  belongs_to :friendee,
  class_name: :User,
  primary_key: :id,
  foreign_key: :friendee_id
end
