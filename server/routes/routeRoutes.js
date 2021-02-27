const router = require('express').Router();
const routeController = require('../controllers/routeController');

router.post('/newOrOpenRoute/', routeController.newOrOpenRoute)
router.get('/findAll/', routeController.findAll)
// router.post('/newOrOpenChatInvert', chatController.newOrOpenChatInvert)
// router.post('/addMessage', chatController.addMessage)
// router.post('/addMessageInvert', chatController.addMessageInvert)
// router.get('/getMessages/:user', chatController.getMessages)

module.exports = router;