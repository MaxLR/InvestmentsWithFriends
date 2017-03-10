# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

max = User.create!({f_name: "Max", l_name: "Rauchman", sex: "M",
  password: "asdfasdf", email: "max@email.com", birthday: "8-26-1990",
  profile_photo: File.open('app/assets/images/max.jpg')})
jeff = User.create!({f_name: "Jeff", l_name: "Wu", sex: "M",
  password: "starwars", email: "jeff@email.com", birthday: "9-29-1989",
  profile_photo: File.open('app/assets/images/jwu.jpg')})
warren = User.create!({f_name: "Warren", l_name: "Buffet", sex: "M",
  password: "password1", email: "w_buffet@berkshire_hathaway.com",
  birthday: "8-30-1930",
  profile_photo: File.open('app/assets/images/buffet.jpg')})
ben = User.create!({f_name: "Ben", l_name: "Graham", sex: "M",
  password: "password1", email: "bgraham@email.com", birthday: "9-21-1976",
  profile_photo: File.open('app/assets/images/ben.jpg')})
peter = User.create!({f_name: "Peter", l_name: "Lynch", sex: "M",
  password: "password1", email: "p.lynch@email.com", birthday: "1-19-1944",
  profile_photo: File.open('app/assets/images/pete.jpg')})
bill = User.create!({f_name: "Bill", l_name: "Gates", sex: "M",
  password: "password1", email: "bill_gates@microsoft.com", birthday: "10-28-1955",
  profile_photo: File.open('app/assets/images/bill.jpg')})
carl = User.create!({f_name: "Carl", l_name: "Icahn", sex: "M",
  password: "password1", email: "c.icahn@email.com", birthday: "2-16-1936",
  profile_photo: File.open('app/assets/images/carl.jpg')})
richard = User.create!({f_name: "Richard", l_name: "Branson", sex: "M",
  password: "password1", email: "richard@virgin-group.com", birthday: "7-18-1950",
  profile_photo: File.open('app/assets/images/richard.jpg')})
mark = User.create!({f_name: "Mark", l_name: "Cuban", sex: "M",
  password: "password1", email: "mark@markcuban.com", birthday: "7-31-1958",
  profile_photo: File.open('app/assets/images/mark.jpg')})
lori = User.create!({f_name: "Lori", l_name: "Greiner", sex: "F",
  password: "password1", email: "lori@lorigreiner.com", birthday: "12-9-1969",
  profile_photo: File.open('app/assets/images/lori.jpeg')})
barb = User.create!({f_name: "Barbara", l_name: "Corcoran", sex: "F",
  password: "password1", email: "barb@barbaracorcoran.com", birthday: "3-10-1949",
  profile_photo: File.open('app/assets/images/barb.jpeg')})
adam = User.create!({f_name: "Adam", l_name: "Richard", sex: "M",
  password: "password1", email: "adam.richard@gmail.com", birthday: "7-10-1984",
  profile_photo: File.open('app/assets/images/arich.jpg')})

Friendship.destroy_all

Friendship.create!({friender_id: max.id, friendee_id: jeff.id, status: "accepted"})
Friendship.create!({friender_id: ben.id, friendee_id: jeff.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: warren.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: ben.id})
Friendship.create!({friender_id: bill.id, friendee_id: max.id})
Friendship.create!({friender_id: mark.id, friendee_id: max.id})
Friendship.create!({friender_id: max.id, friendee_id: peter.id, status: "accepted"})
Friendship.create!({friender_id: carl.id, friendee_id: max.id})
Friendship.create!({friender_id: max.id, friendee_id: richard.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: mark.id})
Friendship.create!({friender_id: max.id, friendee_id: lori.id, status: "accepted"})
Friendship.create!({friender_id: max.id, friendee_id: adam.id, status: "accepted"})
Friendship.create!({friender_id: jeff.id, friendee_id: mark.id})
Friendship.create!({friender_id: barb.id, friendee_id: richard.id, status: "accepted"})
Friendship.create!({friender_id: barb.id, friendee_id: adam.id, status: "accepted"})
Friendship.create!({friender_id: barb.id, friendee_id: peter.id, status: "accepted"})
Friendship.create!({friender_id: adam.id, friendee_id: mark.id, status: "accepted"})
Friendship.create!({friender_id: adam.id, friendee_id: jeff.id, status: "accepted"})
Friendship.create!({friender_id: adam.id, friendee_id: bill.id})
Friendship.create!({friender_id: warren.id, friendee_id: richard.id, status: "accepted"})
Friendship.create!({friender_id: warren.id, friendee_id: adam.id, status: "accepted"})
Friendship.create!({friender_id: jeff.id, friendee_id: barb.id, status: "accepted"})
Friendship.create!({friender_id: jeff.id, friendee_id: carl.id, status: "accepted"})
Friendship.create!({friender_id: jeff.id, friendee_id: peter.id, status: "accepted"})
Friendship.create!({friender_id: lori.id, friendee_id: jeff.id})
Friendship.create!({friender_id: warren.id, friendee_id: jeff.id})
Friendship.create!({friender_id: richard.id, friendee_id: jeff.id})

Post.destroy_all

post1 = Post.create!({poster_id: jeff.id, postee_id: adam.id, body: "Hey man, how's it going?"})
post2 = Post.create!({poster_id: adam.id, postee_id: max.id, body: "Hey man, great profile!"})
post3 = Post.create!({poster_id: ben.id, postee_id: ben.id, body: "People who invest make money for themselves; people who speculate make money for their brokers."})
post4 = Post.create!({poster_id: ben.id, postee_id: ben.id, body: "An investment operation is one which, upon thorough analysis, promises safety of principal and an adequate return. Operations not meeting these requirements are speculative."})
post5 = Post.create!({poster_id: jeff.id, postee_id: max.id, body: "How's your project been going?"})
post6 = Post.create!({poster_id: max.id, postee_id: adam.id, body: "Can't wait to try out Slack Jr.!"})
post7 = Post.create!({poster_id: barb.id, postee_id: barb.id, body: "Check out my appearance on the new season of Shark Tank!"})
post8 = Post.create!({poster_id: jeff.id, postee_id: jeff.id, body: "Has anyone seen my backpack?"})
post9 = Post.create!({poster_id: warren.id, postee_id: warren.id, body: "Like Ben Graham always says, 'Those who do not remember the past are condemned to repeat it'"})
post10 = Post.create!({poster_id: lori.id, postee_id: peter.id, body: "I loved your books on Beating Wall Street"})
post11 = Post.create!({poster_id: ben.id, postee_id: ben.id, body: "In the short run, the market is a voting machine but in the long run, it is a weighing machine."})
post12 = Post.create!({poster_id: mark.id, postee_id: richard.id, body: "Yacht race this weekend?"})
post13 = Post.create!({poster_id: max.id, postee_id: max.id, body: "Today has been a great day!"})
post14 = Post.create!({poster_id: warren.id, postee_id: mark.id, body: "Interesting acquisition that you made this past week, can't wait to see how it turns out!"})
post15 = Post.create!({poster_id: ben.id, postee_id: ben.id, body: "The intelligent investor is a realist who sells to optimists and buys from pessimists."})
post16 = Post.create!({poster_id: mark.id, postee_id: mark.id, body: "Excited to watch my Mavs beat the Lakers tonight!"})
post17 = Post.create!({poster_id: mark.id, postee_id: mark.id, body: "Ignoring artificial intelligence and neural networks now is like ignoring computers in the 70s. Learn about it now!"})


post30 = Post.create!({poster_id: max.id, postee_id: max.id, body: "Thanks for visiting Investments with Friends!"})

Comment.destroy_all

Comment.create!({user_id: adam.id, body: "Great! How about you?", commentable_id: post1.id, commentable_type: "Post"})
Comment.create!({user_id: max.id, body: "It's coming along, hopefully I'll finish sometime soon!", commentable_id: post5.id, commentable_type: "Post"})
Comment.create!({user_id: adam.id, body: "You can try it out already, our userbase is constantly growing!", commentable_id: post6.id, commentable_type: "Post"})
Comment.create!({user_id: jeff.id, body: "Great insight!", commentable_id: post3.id, commentable_type: "Post"})
Comment.create!({user_id: jeff.id, body: "Wow, this is really interesting!", commentable_id: post15.id, commentable_type: "Post"})
Comment.create!({user_id: max.id, body: "I know! I spent hours designing it!", commentable_id: post2.id, commentable_type: "Post"})
Comment.create!({user_id: adam.id, body: "Wow! You can really tell!", commentable_id: post2.id, commentable_type: "Post"})
Comment.create!({user_id: mark.id, body: "Glad you were able to join us!", commentable_id: post7.id, commentable_type: "Post"})
Comment.create!({user_id: barb.id, body: "It was a great experience! I can't wait until next season!", commentable_id: post7.id, commentable_type: "Post"})
Comment.create!({user_id: peter.id, body: "Thanks Lori! That mean's a lot coming from you!", commentable_id: post10.id, commentable_type: "Post"})
Comment.create!({user_id: richard.id, body: "You're on. Get ready to lose", commentable_id: post12.id, commentable_type: "Post"})
Comment.create!({user_id: jeff.id, body: "Wow! That sounds great!", commentable_id: post6.id, commentable_type: "Post"})
Comment.create!({user_id: ben.id, body: "Glad to see someone is listening to me!", commentable_id: post9.id, commentable_type: "Post"})
Comment.create!({user_id: warren.id, body: "Of course!", commentable_id: post9.id, commentable_type: "Post"})
Comment.create!({user_id: mark.id, body: "Thanks, it was a little riskier than I usually like, but this seemed like too good of an opportunity to pass up!", commentable_id: post14.id, commentable_type: "Post"})
Comment.create!({user_id: warren.id, body: "Too much risk for my taste, but I can definitely see the appeal!", commentable_id: post14.id, commentable_type: "Post"})
Comment.create!({user_id: warren.id, body: "I couldn't agree more!", commentable_id: post17.id, commentable_type: "Post"})
