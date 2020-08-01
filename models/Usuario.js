const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    email: { type: String, unique: true, lowercase: true, require: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
}, {
    timestamps: true
})

usuarioSchema.pre('save', function(next) {
    const usuario = this;
    if(!usuario.isModified('password')){
        return next();
    }

    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            next(err);
        }
    }
    bcrypt.hash(usuario.password,salt, null)
    )
}) 