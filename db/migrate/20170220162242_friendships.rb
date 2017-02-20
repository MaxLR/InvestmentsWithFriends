class Friendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :friender_id, null: false
      t.integer :friendee_id, null: false
      t.string :status, null: false, default: "pending"

      t.timestamps
    end

    add_index :friendships, [:friender_id, :friendee_id], unique: true
  end
end
