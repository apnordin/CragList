const db = require("../models");

module.exports = {
    getPosts: function(req, res) {
        console.log('===GETPOSTS===')
        const usableData = req.params.routeName
        const actuallyusableData = JSON.parse(usableData)
        db.Feed.find({ routeName: actuallyusableData.routeName}, function (err, result) {
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    },
    newPost: function(req, res) {
        console.log('=====NEWPOST=====')
        const { routeName } = req.body;
        db.Feed.findOne( { 'routeName': routeName }, (err, routeMatch) => {
            if(routeMatch) {
                return;
            }
            const newRoutePost = new db.Feed({
                'routeName': routeName
            });
            newRoutePost.save((err, savedPost) => {
                if(err) return res.json(err);
                return res.json(savedPost);
            })
        })
    },
    addPost: function(req, res) {
        console.log("=======ADDPOST=====")
        const { routeName, thisPost } = req.body;
        console.log('ROUTENAME: ', routeName);
        console.log('THIS POST: ', thisPost)
        db.Feed.findOneAndUpdate({ 'routeName': routeName }, {$push: {posts: thisPost}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}