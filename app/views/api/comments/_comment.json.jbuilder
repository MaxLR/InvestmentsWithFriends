json.id comment.id
json.commentableId comment.commentable_id
json.commentableType comment.commentable_type
json.body comment.body
json.level comment.level


json.userId comment.user_id
json.userFName comment.user.f_name
json.userLName comment.user.l_name
json.userProfilePhoto asset_path(comment.user.profile_photo.url)

ids = comment.comments.map do |curr_comment|
  curr_comment.id
end

json.commentIds ids
