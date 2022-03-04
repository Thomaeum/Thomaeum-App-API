/**
 * This Router handles all Requests send to /auth
 * @type {Router}
 */

const router = require('express').Router();
const logger = log4js.getLogger('substitution')

// TODO this is a placeholder and should be replaced with actuall functionality
let profiles = []

router.post('/register', (req, res, next) => {
    let profile = []

    try {
        for (let i = 0; i < req.body.length; i++) {
            profile.push({
                grade: req.body.grade,
                courseType: req.body.courseType,
                courseNumber: req.body.courseNumber,
                subject: req.body.subject,
                teacher: req.body.teacher
            })
        }
    } catch (e) {
        res.send(400)
        return
    }

    profiles[profiles.length] = profile

    res.json({
        id: profiles.length-1
    })
})

module.exports = router;

logger.info('Loaded Substitution-Route')