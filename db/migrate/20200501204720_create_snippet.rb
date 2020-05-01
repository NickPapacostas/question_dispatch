class CreateSnippet < ActiveRecord::Migration[6.0]
  def change
    create_table :snippets do |t|
      t.integer :question_id
      t.text :rich_text

      t.timestamps
    end
  end
end
