class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.string :ticker
      t.integer :amount
      t.decimal :buy_price
      t.datetime :close_date
      t.decimal :return_val
      t.string :status
      t.timestamps null: false
    end
    add_index :posts, :user_id
    add_index :posts, :status
    add_index :posts, :ticker
  end
end
