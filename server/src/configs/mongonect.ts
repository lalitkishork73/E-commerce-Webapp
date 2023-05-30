import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lalitkishork73:UzPr9bb6Wvxda9eC@cluster0.o2wavxe.mongodb.net/group27Da?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
}).then(()=>console.log("Connected to mongodb")).catch((err) => console.log(err));