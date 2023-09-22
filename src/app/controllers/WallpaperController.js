
const Wallpaper = require('../models/Wallpaper')

class wallpaperControllers {
    async getWallPapers (req, res) {
        try {
          const walls = await Wallpaper.find({})
          res.json({status : 200, wallpapers : walls})
        } catch (error) {
          res.json({status : 500})
        }
    }

    async getWallPapersByID (req, res) {
        try {
          const walls = await Wallpaper.findById({_id : req.query.id})
          res.json({status : 200, wallpaper : walls})
        } catch (error) {
          res.json({status : 500})
        }
    }

    async insertWallPapers (req, res) {
        try {
          const walls = new Wallpaper(req.body)
          walls.image = req.file.path
          await walls.save()
          res.json({status : 200})
        } catch (error) {
          res.json({status : 500})
        }
    }

    async deleteWallPapers (req, res) {
        try {
          await Wallpaper.deleteOne({_id : req.body.id})
          res.json({status : 200})
        } catch (error) {
          res.json({status : 500})
        }
    }

    async updateWallPapers (req, res) {
        try {
          if (req.file.path = '') {
            await Wallpaper.updateOne({_id : req.body.id}, {title : req.body.title, video : req.body.video, URLHD : req.body.URLHD, URL2K: req.body.URL2K, URL4K: req.body.URL4K, type : req.body.type})
          } else {
            await Wallpaper.updateOne({_id : req.body.id}, {title : req.body.title, video : req.body.video, URLHD : req.body.URLHD, URL2K: req.body.URL2K, URL4K: req.body.URL4K, image : req.file.path, type : req.body.type})
          }
          res.json({status : 200})
        } catch (error) {
          res.json({status : 500})
        }
    }
}

module.exports = new wallpaperControllers