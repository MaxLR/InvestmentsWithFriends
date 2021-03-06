# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170404182019) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string   "body",                         null: false
    t.integer  "user_id",                      null: false
    t.integer  "commentable_id",               null: false
    t.string   "commentable_type",             null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "level",            default: 1, null: false
  end

  add_index "comments", ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "friender_id",                     null: false
    t.integer  "friendee_id",                     null: false
    t.string   "status",      default: "pending", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "friendships", ["friender_id", "friendee_id"], name: "index_friendships_on_friender_id_and_friendee_id", unique: true, using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.integer  "likeable_id",   null: false
    t.string   "likeable_type", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "likes", ["likeable_type", "likeable_id", "user_id"], name: "index_likes_on_likeable_type_and_likeable_id_and_user_id", unique: true, using: :btree

  create_table "posts", force: :cascade do |t|
    t.integer  "poster_id",  null: false
    t.integer  "postee_id",  null: false
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["postee_id"], name: "index_posts_on_postee_id", using: :btree
  add_index "posts", ["poster_id"], name: "index_posts_on_poster_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "f_name",                                  null: false
    t.string   "l_name",                                  null: false
    t.string   "email",                                   null: false
    t.string   "sex",                                     null: false
    t.string   "birthday",                                null: false
    t.string   "password_digest",                         null: false
    t.string   "session_token",                           null: false
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.string   "profile_photo_file_name"
    t.string   "profile_photo_content_type"
    t.integer  "profile_photo_file_size"
    t.datetime "profile_photo_updated_at"
    t.string   "cover_photo_file_name"
    t.string   "cover_photo_content_type"
    t.integer  "cover_photo_file_size"
    t.datetime "cover_photo_updated_at"
    t.string   "hometown",                   default: ""
    t.string   "current_city",               default: ""
    t.string   "relationship",               default: ""
    t.string   "school",                     default: ""
    t.string   "employer",                   default: ""
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["f_name"], name: "index_users_on_f_name", using: :btree
  add_index "users", ["l_name"], name: "index_users_on_l_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
