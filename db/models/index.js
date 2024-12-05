import { defineMangas } from './mangas.model.js'
import { defineUsers } from './users.model.js'

export function defineModels(sequelize){
    defineMangas(sequelize)
    defineUsers(sequelize)
}
