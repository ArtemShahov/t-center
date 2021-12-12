const express = require('express');
const multer = require('multer');
const path = require('path/posix');
const fs = require('fs');

const PORT = process.env.PORT || 5050;
const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
})
const upload = multer({ storage: storage });

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
})

app.post('/uploadUserPhoto', upload.single("photo"), async (req, res) => {
  res.send(req.file.path);
})

app.post('/deleteUserPhoto', (req, res) => {
  const photoPath = __dirname + '/' + req.body.photoUrl;
  if (fs.existsSync(photoPath)) {
    fs.unlink(__dirname + '/' + req.body.photoUrl, function (err) {
      if (err) throw err;
      console.log('File deleted!');
      res.send('success');
    });
  } else {
    res.send('File is not exist');
  }
})


app.listen(PORT, () => {
  console.log('Server has been started...', PORT);
})