# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

max = User.create!({f_name: "Max", l_name: "Rauchman", sex: "M",
  password: "asdfasdf", email: "max@email.com", birthday: "8-26-1990"})
jeff = User.create!({f_name: "Jeff", l_name: "Wu", sex: "M",
  password: "starwars", email: "jeff@email.com", birthday: "9-29-1989"})
warren = User.create!({f_name: "Warren", l_name: "Buffet", sex: "M",
  password: "password1", email: "w_buffet@berkshire_hathaway.com",
  birthday: "8-30-1930"})
ben = User.create!({f_name: "Ben", l_name: "Graham", sex: "M",
  password: "password1", email: "bgraham@email.com", birthday: "9-21-1976"})
peter = User.create!({f_name: "Peter", l_name: "Lynch", sex: "M",
  password: "password1", email: "p.lynch@email.com", birthday: "1-19-1944"})
bill = User.create!({f_name: "Bill", l_name: "Gates", sex: "M",
  password: "password1", email: "bill_gates@microsoft.com", birthday: "10-28-1955"})
carl = User.create!({f_name: "Carl", l_name: "Icahn", sex: "M",
  password: "password1", email: "c.icahn@email.com", birthday: "2-16-1936"})
richard = User.create!({f_name: "Richard", l_name: "Branson", sex: "M",
  password: "password1", email: "richard@virgin-group.com", birthday: "7-18-1950"})
mark = User.create!({f_name: "Mark", l_name: "Cuban", sex: "M",
  password: "password1", email: "mark@markcuban.com", birthday: "7-31-1958"})
lori = User.create!({f_name: "Lori", l_name: "Greiner", sex: "F",
  password: "password1", email: "lori@lorigreiner.com", birthday: "12-9-1969"})
barb = User.create!({f_name: "Barbara", l_name: "Corcoran", sex: "F",
  password: "password1", email: "barb@barbaracorcoran.com", birthday: "3-10-1949"})
adam = User.create!({f_name: "Adam", l_name: "Richard", sex: "M",
  password: "password1", email: "adam.richard@gmail.com", birthday: "7-10-1984"})

Friendship.destroy_all

Friendship.create!({friender_id: max.id, friendee_id: jeff.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: warren.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: ben.id})
Friendship.create!({friender_id: max.id, friendee_id: bill.id})
Friendship.create!({friender_id: max.id, friendee_id: peter.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: carl.id})
Friendship.create!({friender_id: max.id, friendee_id: richard.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: mark.id})
Friendship.create!({friender_id: max.id, friendee_id: lori.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: adam.id, status: "accepted"})
Friendship.create!({friender_id: jeff.id, friendee_id: mark.id})
Friendship.create!({friender_id: barb.id, friendee_id: jeff.id})
Friendship.create!({friender_id: barb.id, friendee_id: richard.id, status: "accepted"})
Friendship.create!({friender_id: barb.id, friendee_id: adam.id, status: "accepted"})
Friendship.create!({friender_id: adam.id, friendee_id: mark.id, status: "accepted"})
Friendship.create!({friender_id: adam.id, friendee_id: jeff.id, status: "accepted"})
Friendship.create!({friender_id: adam.id, friendee_id: bill.id})
Friendship.create!({friender_id: warren.id, friendee_id: richard.id, status: "accepted"})
Friendship.create!({friender_id: warren.id, friendee_id: adam.id, status: "accepted"})
Friendship.create!({friender_id: lori.id, friendee_id: jeff.id})
Friendship.create!({friender_id: warren.id, friendee_id: jeff.id})
Friendship.create!({friender_id: richard.id, friendee_id: jeff.id})

Post.destroy_all

Post.create!({poster_id: jeff.id, postee_id: jeff.id, body: "test post"})
Post.create!({poster_id: jeff.id, postee_id: jeff.id, body: "more test stuff"})
Post.create!({poster_id: jeff.id, postee_id: jeff.id, body: "posting on my own page"})
Post.create!({poster_id: jeff.id, postee_id: max.id, body: "test post on other user's page"})
Post.create!({poster_id: jeff.id, postee_id: max.id, body: "test post again"})
Post.create!({poster_id: jeff.id, postee_id: adam.id, body: "abcdefg"})
Post.create!({poster_id: jeff.id, postee_id: adam.id, body: "Posty McPosterson"})
Post.create!({poster_id: adam.id, postee_id: jeff.id, body: "Reply McReplyerson"})
Post.create!({poster_id: adam.id, postee_id: jeff.id, body: "testing testing 1 2 3"})
