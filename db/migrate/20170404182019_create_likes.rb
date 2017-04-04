class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :commentable_id, null: false
      t.string :commentable_type, null: false
      t.timestamps null: false
    end

    add_index :likes, [:commentable_type, :commentable_id, :user_id], unique: true
  end
end
