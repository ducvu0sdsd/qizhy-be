
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./src/config/db')
const morgan = require('morgan')
const app = express()
const port = 3002
const Wallpaper = require('./src/app/models/Wallpaper')
const wallpaperControllers = require('./src/app/controllers/WallpaperController')
const fileUploader = require('./src/config/uploader');

app.use(express.json())
app.use(express.urlencoded({extended : true}))
dotenv.config()
app.use(morgan('combined'))
app.use(cors());

// Connect MongoDB
db.connect()

app.get('/get-wallpapers', wallpaperControllers.getWallPapers)

app.get('/get-wallpaper-by-id', wallpaperControllers.getWallPapersByID)

app.post('/insert-wallpapers', fileUploader.single('image'), wallpaperControllers.insertWallPapers)

app.post('/delete-wallpapers', wallpaperControllers.deleteWallPapers)

app.post('/update-wallpapers',fileUploader.single('image'), wallpaperControllers.updateWallPapers)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})