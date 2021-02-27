/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    newOrOpenRoute: async function(routeData) {
        // console.log('FROM ROUTE.JS: ROUTEDATA: ', routeData)
        return axios.post("/route/newOrOpenRoute/", routeData);
    },
    getAllRoutes: async function() {
        return axios.get("/route/findAll/");
    }
};