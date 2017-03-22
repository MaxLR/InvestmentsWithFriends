class AddNestingToComments < ActiveRecord::Migration
  def change
    add_column :comments, :level, :integer, null: false, default: 1
  end
end
