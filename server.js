import express from "express";
import mongoose from "mongoose";
import postsRoutes from "./routes/posts.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/posts", postsRoutes);

const CONNECTION_URL =
  "mongodb+srv://naveenmetta:CylO6MzIv2Qfmm22@cluster0.kakj9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
