const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
//req localhost:3000
//send appropros response to client
router.get('/', (req, res) => {
    const data = req.context //{ page:..., global:...}
    //moved it to landing.json
    //clear separation of concerns

    res.render('landing', data)
})

module.exports = router
