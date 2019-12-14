const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const ProjectController = require('../controllers/ProjectController')

//req localhost:3000
//send appropros response to client
router.get('/', (req, res) => {
    const data = req.context //{ page:..., global:...}
    //moved it to landing.json
    //clear separation of concerns

    //instantiation
    const projectCtr = new ProjectController()
    projectCtr.get()
    //this is an array
        .then(projects => {
            data['projects'] = projects,
            res.render('landing', data)
        })
        .catch(err => {
            res.send('oops! ' + err.message)
        })


})

module.exports = router
