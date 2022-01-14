const middleware = {}

middleware['authUser'] = require('../middleware/authUser.js')
middleware['authUser'] = middleware['authUser'].default || middleware['authUser']

middleware['test'] = require('../middleware/test.js')
middleware['test'] = middleware['test'].default || middleware['test']

export default middleware
