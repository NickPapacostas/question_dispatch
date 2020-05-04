class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.integer :student_id
      t.text :description
      t.text :error_message
      t.string :github_username
      t.string :state

      t.timestamps
    end
  end
end
