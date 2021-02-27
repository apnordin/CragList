const db = require("../models");

module.exports = {
    newOrOpenRoute: function(req, res) {
        console.log('========NEWROUTE======')
        const { name, type, lat, long, address, grade, height, approach, facilities, info } = req.body;
        console.log('REQBODY: ', req.body)
        db.Route.findOne({ 'name': name }, (err, routeMatch) => {
            if(routeMatch) {
                return;
            }
            const newRoute = new db.Route({
                'name': name,
                'type': type,
                'lat': lat,
                'long': long,
                'address': address,
                'grade': grade,
                'height': height,
                'approach': approach,
                'facilities': facilities,
                'info': info
            });
            newRoute.save((err, savedRoute) => {
                if (err) return res.json(err);
                return res.json(savedRoute);
            })
        })
    },
    findAll: function(req, res) {
        console.log('===FINDALLROUTES===')
        db.Route
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}