json.id post.id
json.poster_id post.poster_id
json.postee_id post.postee_id
json.body post.body

json.poster_f_name post.poster.f_name
json.poster_l_name post.poster.l_name
json.postee_f_name post.postee.f_name
json.postee_l_name post.postee.l_name
json.poster_profile_photo_url asset_path(post.poster.profile_photo.url)

ids = post.comments.map do |comment|
  comment.id
end

json.commentIds ids
