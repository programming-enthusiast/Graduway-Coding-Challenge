class CreateLanguages < ActiveRecord::Migration[6.0]
  def change
    create_table :languages do |t|
      t.string :lang_code, null: false, default: ""
      t.string :lang_name, null: false, default: ""
      t.timestamps
    end
  end
end
