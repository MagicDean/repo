const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
})
const UserModal= mongoose.model('User',UserSchema)
const connect =() =>{
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr')

    mongoose.connection.on('open',()=>{
        console.log('连接成功');
        const user=new UserModal({
            nickname:'fuck',
            password:'1234',
            age:12,
        })
        user.save();
    });
    
};

connect();