class AddMoreDataToUsers < ActiveRecord::Migration
  def change
    add_column :users, :hometown, :string, default: ""
    add_column :users, :current_city, :string, default: ""
    add_column :users, :relationship, :string, default: ""
    add_column :users, :school, :string, default: ""
    add_column :users, :employer, :string, default: ""
  end
end
