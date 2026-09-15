import mongoose from "mongoose"
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    // basic userInfo.
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true,

    },
    fullname:{
        type:String,
        required:[true,"Name is required"],
        minlength:3,
        maxlength:30,
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        trim:true,
        index:true
    },
    phone:{
        type:String,
        required:[true,"Phone no. is requied"],
        unique:true,
        trim:true,
        index:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    profile_pic:{
        type:String,
        default:null,
    },

    //role
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role",
        default:"pateint"
    },
    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branch",
        default:null,
    },
    otp:{
        type:String,
        select:false,
        default:null,
    }

},{
    timestamps:true,
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
    this.password = bcrypt.hashSync(this.password, 10)
})