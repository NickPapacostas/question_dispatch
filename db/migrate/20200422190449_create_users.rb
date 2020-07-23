class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email, unique: true
      t.string :first_name
      t.string :last_name
      t.string :github_username
      t.string :password_digest
      t.text :roles, array: true, default: []

      t.timestamps
    end
  end
end
