module.exports = (sequelize, DataTypes) => {

    const Audit = sequelize.define("Audit", {
        actor: {
            type: DataTypes.STRING,
            allowNull:true
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false
        },
        role: {
            type: DataTypes.STRING,
            allowNull:false
        },

    })

    return Audit
}
