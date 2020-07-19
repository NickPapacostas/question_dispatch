class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.integer :user_id
      t.text :description
      t.text :error_message
      t.string :github_username
      t.string :aasm_state

      t.timestamps
    end
  end
end
