# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  f_name                     :string           not null
#  l_name                     :string           not null
#  email                      :string           not null
#  sex                        :string           not null
#  birthday                   :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_photo_file_name    :string
#  profile_photo_content_type :string
#  profile_photo_file_size    :integer
#  profile_photo_updated_at   :datetime
#  cover_photo_file_name      :string
#  cover_photo_content_type   :string
#  cover_photo_file_size      :integer
#  cover_photo_updated_at     :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
