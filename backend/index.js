const express = require("express")
const cors = require("cors")

const multer = require('multer');
const path = require('path');

const mongoose = require('mongoose')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Uploads directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Unique file name with timestamp
    },
});
const upload = multer({ storage });
const app = express()
app.use(cors())
app.use(express.json())
url = "mongodb+srv://daevaang14:HzIPoc6Vdc16ErFi@varcelapp.wva7a.mongodb.net/"
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology:true,
}).then(()=>console.log("connected mongoose"))
.catch((err)=> console.error(err))

const userschema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    resume: { type: String, required: true },
})

const User = mongoose.model("User", userschema)

app.post('/api/signup', upload.single('resume'), async (req, res) => {
    try {
      console.log(req.file);
      const { name, email, contact } = req.body;
      const resumePath = req.file.path; // Get file path from multer
  
      // Create new user
      const newUser = new User({ name, email, contact, resume: resumePath });
      await newUser.save();
  
      res.json({ message: 'User registered successfully!' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));