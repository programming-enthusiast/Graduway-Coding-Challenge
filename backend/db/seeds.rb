# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.create([
  { name: 'Wilson Lumpkin' }, 
  { name: 'Robert Toombs' }, 
  { name: 'Saxby Chambliss' }, 
  { name: 'Wyche Fowler' }
])
Language.create([
  { lang_code: 'en', lang_name: 'English' },
  { lang_code: 'de', lang_name: 'German'}, 
  { lang_code: 'fr', lang_name: 'French'}, 
  { lang_code: 'hu', lang_name: 'Hungarian'}, 
  { lang_code: 'es', lang_name: 'Spanish'}, 
  { lang_code: 'it', lang_name: 'Italian'}
])