# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
f_name          | string    | not null, indexed
l_name          | string    | not null, indexed
email           | string    | not null, indexed, unique
sex             | string    | not null
birthday        | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
prof_photo_url  | string    | (from AWS paperclip)
cover_photo_url | string    | (from AWS paperclip)

has_many posts, comments, likes, friendings

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
ticker      | string    | not null, indexed
amount      | integer   | not null
buy_price   | integer   | not null
open_date   | string    | not null
close_date  | string    | not null
return_val  | float     | not null
status      | string    | not null, default: "open", only:["open", "closed"] indexed
user_id     | integer   | not null, foreign key (references users), indexed

belongs_to user
has_many comments, likes

## friendings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
friender_id | integer   | not null, foreign key (references users), indexed
friendee_id | string    | not null, foreign key (references users), indexed
status      | string    | default: "pending", only: ["rejected", "pending", "accepted"] indexed

belongs_to user

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts), indexed
user_id     | integer   | not null, foreign key (references users), indexed
body        | string    | not null

belongs_to user, post
has_many likes

## likings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique: likeable_id
likeable_id | integer   | not null, foreign key (polymorphic reference to post or comment id), indexed

belongs_to user, likeable
