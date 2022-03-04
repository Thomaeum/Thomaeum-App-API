/**
 * This Router handles all Requests send to /auth
 * @type {Router}
 */

const router = require('express').Router();
const logger = log4js.getLogger('substitution')

// TODO replace with database
let profiles = []

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function randomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

router.get('/', (req, res) => {
    logger.info("Got request for substitution plan")

    //TODO replace with database request
    let result = []
    let amount = 10

    for (let i = 0; i < amount; i++) {
        result.push({
            start: randomNumber(1,6), //TODO check if this format is correct
            range: randomNumber(1,2), //TODO check if this format is correct
            regularCourse: {
                subject: config.subjects[randomNumber(0,config.subjects.length)],
                courseID: i,
                courseType: Boolean(randomNumber(0,1))
            },
            changedCourse: {
                teacher: config.teachers[randomNumber(0,config.teachers.length)],
                room: randomNumber(0,1000) + randomLetter(),
                subject: {
                    subject: config.subjects[randomNumber(0, config.subjects.length)],
                    courseID: i + amount,
                    courseType: Boolean(randomNumber(0, 1))
                },
            },
            annotations: "Haha lol ich kann hier schreiben was ich will :)",
            type: config.substitutionTypes[randomNumber(0,config.substitutionTypes.length)]
        })
    }

    // TODO filter by profile
    // TODO filter by date
    // TODO filter by date range
    // TODO filter by grade
    // TODO filter by subject
    // TODO filter by teacher
    // TODO filter by course ID
    // TODO filter by course Type
    // TODO filter with hash

    res.json(result)
})

router.post('/register', (req, res) => {
    logger.info("Got request to register new profile")
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

    // TODO push to database
    profiles[profiles.length] = profile

    res.json({
        id: profiles.length-1
    })
})

module.exports = router;

logger.info('Loaded Substitution-Route')