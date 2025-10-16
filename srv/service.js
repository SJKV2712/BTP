const cds = require('@sap/cds')

module.exports = cds.service.impl(async function(srv) {

    // To print given string with world
    srv.on('printstring', req=> 
          {
            console.log(req.data.input)  //print the requested data
            return  `${req.data.input} World`
          })

    // To add Two numbers     
    srv.on('add',req=>
          {
            console.log('Number 1: %d',req.data.num1)   // To print number 1
            console.log('Number 2: %d',req.data.num2)   // To print number 2
            let result = req.data.num1 + req.data.num2;
            console.log('Result by adding two numbers : %d', result)
            return result
          })

    // To accept any input and give ouput for the conditions
    srv.on('anyinput', req=>
          {
            let result = {}

            if(req.data.brand == 'bmw'){
                result.availability = 2,
                result.branch = 'Pallikarunai'
                result.location = [ {
                  "velachery": 1,
                  "Nanmangalam": 1
                                  }]
            }else{
              result.availability = 0
            }
            console.log(req.data)
            return result;
          })
})