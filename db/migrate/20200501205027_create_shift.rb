class CreateShift < ActiveRecord::Migration[6.0]
  def change
    create_table :shifts do |t|
      t.integer :user_id, null: false
      t.string :roles
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
  end
end
