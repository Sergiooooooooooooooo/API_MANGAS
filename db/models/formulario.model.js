import { DataTypes } from "sequelize";

export function defineFormularios(sequelize){
    sequelize.define('formulario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        documento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
