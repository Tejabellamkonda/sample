module.exports = (sequelize,DataTypes)=>{


    const Posts = sequelize.define("Posts",{
        name:{
            type:DataTypes.STRING,
            alloowNull:false,
        },
        dateofbirth:{
            type:DataTypes.STRING,
            alloowNull:false,
        },
        country:{
            type:DataTypes.STRING,
            alloowNull:false,
        },

        resume:{
            type:DataTypes.BLOB,
            alloowNull:false,
        },

    });
    return Posts;

}