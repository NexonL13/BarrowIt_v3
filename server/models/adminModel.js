module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        firstName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull:true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull:false
        }
    })

    Admin.associate = (models) => {
        Admin.hasMany(models.Asset, {
            foreignKey: "admin_id",
            onDelete: "cascade"
        })
    }

    return Admin
}