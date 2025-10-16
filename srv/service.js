const cds = require('@sap/cds')

module.exports = cds.service.impl(async function(srv) {

    srv.on('printstring', req=> 
         {
            console.log(req.data.input)  //print the requested data
            return  `${req.data.input} World`
         })
    srv.on('add',req=>
          {
            console.log('Number 1: %d',req.data.num1)   // To print number 1
            console.log('Number 2: %d',req.data.num2)   // To print number 2
            let result = req.data.num1 + req.data.num2;
            console.log('Result by adding two numbers : %d', result)
            return result
          }
    )
})