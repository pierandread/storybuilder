const router = require('express').Router();
const story = require('./controllers/story');
const user = require('./controllers/user');
const checkAuth = require('./middleware/check-auth');

router.get('/stories', checkAuth, story.getStories);
router.get('/stories/:id', checkAuth, story.getStory);
router.post('/stories', checkAuth, story.postStory);
router.post('/user/signup', user.signUp);
router.post('/user/login', user.login);
router.delete('/user/:id', user.remove);

module.exports = router;
