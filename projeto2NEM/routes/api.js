//var axios = require('axios');
var express = require('express');
//const { default: Cardbacks } = require('../../projeto2-react/src/cardbacks');
var router = express.Router();

//GET cardbacks
router.get('/cardbacklist', function(req, res) {
    console.log("AAAAAAAAAAA")
    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks',
        headers: {
          'x-rapidapi-key': '9b116cd926msh4547d15bdc179dbp187562jsn0a60e822fafd',
          'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
      };
    

    axios.request(options).then(function (response) {
        //console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
        return;
    });

});
module.exports = router;