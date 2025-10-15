const cds = require('@sap/cds')

module.exports = cds.service.impl(async function(srv) {

    srv.on('printstring', req=> {
        console.log(req.data.input)  //print the requested data
        return  `${req.data.input} World`
    })
})