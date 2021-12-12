const express = require('express');
const multer = require('multer');
const path = require('path/posix');

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

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
})

app.post('/uploadUserPhoto', upload.single("photo"), async (req, res) => {
    console.log(req.file.path);
    res.send(req.file.path);
})


app.get('/getDefaultPhotoUrl', (req, res) => {
    console.log('sendFile');
    res.send('/public/images/no-photo.png');
})


app.listen(PORT, () => {
    console.log('Server has been started...', PORT);
})