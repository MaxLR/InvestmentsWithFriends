# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User.create!({f_name: "Max", l_name: "Rauchman", sex: "M",
  password: "asdfasdf", email: "max@email.com", birthday: "8-26-1990"})
User.create!({f_name: "Jeff", l_name: "Wu", sex: "M",
  password: "starwars", email: "jeff@email.com", birthday: "9-29-1989"})
User.create!({f_name: "Warren", l_name: "Buffet", sex: "M",
  password: "password1", email: "w_buffet@berkshire_hathaway.com",
  birthday: "8-30-1930"})
User.create!({f_name: "Ben", l_name: "Graham", sex: "M",
  password: "password1", email: "bgraham@email.com", birthday: "9-21-1976"})
User.create!({f_name: "Peter", l_name: "Lynch", sex: "M",
  password: "password1", email: "p.lynch@email.com", birthday: "1-19-1944"})
User.create!({f_name: "Bill", l_name: "Gates", sex: "M",
  password: "password1", email: "bill_gates@microsoft.com", birthday: "10-28-1955"})
User.create!({f_name: "Carl", l_name: "Icahn", sex: "M",
  password: "password1", email: "c.icahn@email.com", birthday: "2-16-1936"})
User.create!({f_name: "Richard", l_name: "Branson", sex: "M",
  password: "password1", email: "richard@virgin-group.com", birthday: "7-18-1950"})
User.create!({f_name: "Mark", l_name: "Cuban", sex: "M",
  password: "password1", email: "mark@markcuban.com", birthday: "7-31-1958"})
User.create!({f_name: "Lori", l_name: "Greiner", sex: "F",
  password: "password1", email: "lori@lorigreiner.com", birthday: "12-9-1969"})
User.create!({f_name: "Barbara", l_name: "Corcoran", sex: "F",
  password: "password1", email: "barb@barbaracorcoran.com", birthday: "3-10-1949"})
