const DB1 = require('../../model/DB1')


class SiteController {
    index(req,res){

        DB1.find({},function(err, DB1){
            if(!err) res.json(DB1)
            res.status(400).json({error: 'err' })
        })

    }


}

module.exports = new SiteController

