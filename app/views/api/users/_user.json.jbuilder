json.id user.id
json.f_name user.f_name
json.l_name user.l_name
json.email user.email
json.sex user.sex
json.birthday user.birthday
json.profile_photo_url asset_path(user.profile_photo.url)
json.cover_photo_url asset_path(user.cover_photo.url)


# json.all_friends user.all_friends
# json.requested_friends user.requested_friends.friendee_id
# json.requesting_friends user.requesting_friends.friender_id

json.friends user.all_friends, :id, :friendee_id, :friender_id, :status
json.pendingFriends user.requested_friends, :id, :friendee_id, :friender_id, :status
json.requestingFriends user.requesting_friends, :id, :friendee_id, :friender_id, :status

# json.friendships do
#   user.all_friends.each do |friend|
#     json.set! friend.id do
#       json.extract! friend, :id, :friendee_id, :friender_id, :status
#     end
#   end
# end
# json.requested_friends do
#   user.requested_friends.each do |friend|
#     json.set! friend.id do
#       json.extract! friend, :id, :friendee_id, :friender_id, :status
#     end
#   end
# end
# json.requesting_friends do
#   user.requesting_friends.each do |friend|
#     json.set! friend.id do
#       json.extract! friend, :id, :friendee_id, :friender_id, :status
#     end
#   end
# end
