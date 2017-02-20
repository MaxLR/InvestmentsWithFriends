class Friendship < ActiveRecord::Base
  validates :friender_id, uniqueness: { scope: :friendee_id }
  validates :friender_id, :friendee_id, :status, presence: true
  validates :status, inclusion: { in: ["pending", "accepted", "rejected"] }
end
