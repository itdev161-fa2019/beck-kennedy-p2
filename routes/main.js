const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
//req localhost:3000
//send appropros response to client
router.get('/', (req, res) => {
    const data = {
        image_profile: 'http://123emoji.com/wp-content/uploads/2016/04/45.png',
        greeting: 'hello! Welcome to my portfolio site!',
        introduction: 'I am a web developer from Wisconsin.',
        languages: [
            {name:'javascript', years:2},
            {name:'java', years:1},
            {name:'c#', years:1},
            {name: 'HTML/CSS', years:2}
        ]
    }

    res.render('landing', data)
})

module.exports = router
