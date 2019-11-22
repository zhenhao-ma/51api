# Beginner guide to use Sequelize
## Requirement: Install CLI (command-line-interface)
```
npm install --save sequelize-cli
```
## Common operation
### create new Model
```
npx sequelize-cli model:generate --name NewModel --attributes attr1:string,attr2:string,attr3:string
```
beware after the path of the auto-generated model file is
> orm/models/
### run migration after each orm update
```
npx sequelize-cli db:migrate
```
### undo last migration
```
npx sequelize-cli db:migrate:undo
```
### revert to a migration record
you can find the migration record at the path:
> orm/migrations/
```
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```
## Official Document
see official document of [sequelize.v5](https://sequelize.org/v5/manual)
