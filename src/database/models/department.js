module.exports = (sequelize, DataTypes) => {
    const department = sequelize.define(
        'department',
        {
            deptno: DataTypes.INTEGER(2),
            dname: DataTypes.INTEGER(14),
            loc: DataTypes.STRING(13),
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    department.associate = (models) => {
        department.hasMany(models.employee, {
            foreignKey: 'deptno',
            as: 'employees',
        });
    };
    return department;
};
