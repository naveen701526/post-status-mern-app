import express from "express";
import mongoose from "mongoose";

const app = express();

const CONNECTION_URL =
  "mongodb+srv://naveenmetta:hD%4fbkugWyjwL7a@cluster0.kakj9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
