import { Table, Model, Column, AutoIncrement, PrimaryKey, CreatedAt, UpdatedAt, DataType, } from 'sequelize-typescript'
@Table({
    tableName: 'users',
    timestamps: true
})
export class User extends Model<User>{
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        field: 'id'
    })
    id!: number

    @Column({
        type: DataType.STRING,
        field: 'username',
        allowNull: false,
        unique: true
    })
    username!: string

    @Column({
        type: DataType.STRING,
        field:'password',
        allowNull: false
    })
    password!: string

    @Column({
        type: DataType.STRING,
        field:'email',
        allowNull: false,
        unique: true
    })
    email!: string

    @Column({
        type: DataType.STRING,
        field:'gender',
    })
    gender!: string

    @Column({
        type: DataType.STRING,
        field:'phone',
    })
    phone!: string

    @CreatedAt
    @Column({
        field:'created_at'
    })
    created_at: Date

    @UpdatedAt
    @Column({
        field:'updated_at'
    })
    updated_at: Date
}