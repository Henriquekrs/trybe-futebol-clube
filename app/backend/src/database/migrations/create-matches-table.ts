import { DataTypes, QueryInterface } from "sequelize";

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable('matches', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        homeTeamId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'home_team_id',
        },
        homeTeamGoals: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'home_team_goals',
        },
        awayTeamId: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'away_team_id',
        },
        awayTeamGoals: {
            type: DataTypes.TIME,
            allowNull: false,
            field: 'away_team_goals',
        },
        inProgress: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'in_progress',
        },
    })
  },
  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('matches');
  }
}