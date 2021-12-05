const mongoose=require('mongoose');

const dbConnect=async ()=> {
     try {
          await mongoose.connect(process.env.MONGO_URL,{
               useUnifiedTopology: true,
               useNewUrlParser: true,
          });
          console.log("Database Connected Successfully");
     } catch (error) {
          console.log(error.message);
     }
};

module.exports=dbConnect;