const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 8005;

//connecting to DB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/usersTestDB");
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
    console.log(error);
    process.exit(1);
  }
};

//creating schema and model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name is required"]
  },
  image: {
    type: String,
    required: [true, "user image is required"],
  },
});

const User = mongoose.model("users", userSchema);

//file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get("/register", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.post("/register", upload.single("image"), async  (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      image: req.file.filename,
    });
    await newUser.save()
    res.status(201).send(newUser)
  } catch (error) {
     res.status(500).send(error.message);
  }
});

app.get("/test", (req, res) => {
  res.status(200).send("testing apni ");
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`); // server is listening on port 8005
  await connectDB();
});
