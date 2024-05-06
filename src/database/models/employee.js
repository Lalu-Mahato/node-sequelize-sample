module.exports = (sequelize, DataTypes) => {
    const employee = sequelize.define(
        'employee',
        {
            empno: DataTypes.INTEGER(4),
            ename: DataTypes.STRING(10),
            job: DataTypes.STRING(9),
            mgr: DataTypes.INTEGER(4),
            hiredate: DataTypes.DATE,
            sal: DataTypes.DECIMAL(7, 2),
            comm: DataTypes.DECIMAL(7, 2),
            deptno: DataTypes.INTEGER(4),
        },
        {
            underscored: true,
            timestamps: true,
        },
    );
    employee.associate = (models) => {
        employee.belongsTo(models.department, {
            foreignKey: 'deptno',
            as: 'department',
        });
    };
    return employee;
};
