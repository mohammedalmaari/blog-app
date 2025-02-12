import mongoose,{Schema,Document} from "mongoose";

interface IBlog extends Document{
        title: string;
        content: string;
        author: string;
        date: string;
}

const blogSchema:Schema = new Schema({
    title:{type:String },
    content:{type:String },
    author:{type:String },
    date:{type:String},
},{ timestamps: true })

export const blogModel = mongoose.model<IBlog>("blogs",blogSchema);
