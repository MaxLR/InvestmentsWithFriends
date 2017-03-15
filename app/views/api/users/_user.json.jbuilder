json.id user.id
json.f_name user.f_name
json.l_name user.l_name
json.email user.email
json.sex user.sex
json.birthday user.birthday
json.hometown user.hometown
json.currentCity user.current_city
json.relationship user.relationship
json.school user.school
json.employer user.employer
json.profile_photo_url asset_path(user.profile_photo.url)
json.cover_photo_url asset_path(user.cover_photo.url)

json.friends user.all_friendships, :id, :friendee_id, :friender_id, :status
json.requestedFriendships user.requested_friendships, :id, :friendee_id, :friender_id, :status

json.pendingRequests user.requesting_friendships do |friendship|
  json.id friendship.id
  json.friender_id friendship.friender.id
  json.f_name friendship.friender.f_name
  json.l_name friendship.friender.l_name
  json.profilePhotoUrl asset_path(friendship.friender.profile_photo.url)
end
