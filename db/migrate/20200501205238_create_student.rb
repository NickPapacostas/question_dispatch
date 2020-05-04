class CreateStudent < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :email, null: false
      t.string :github_username

      t.timestamps
    end
  end
end
