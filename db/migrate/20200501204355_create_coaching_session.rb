class CreateCoachingSession < ActiveRecord::Migration[6.0]
  def change
    create_table :coaching_sessions do |t|
      t.integer :student_id, null: false
      t.integer :coach_id, null: false
      t.string :coach_role
      t.datetime :start_time
      t.datetime :end_time
      t.string :status

      t.timestamps
    end
  end
end
