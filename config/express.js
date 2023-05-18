const bodyParser = require("body-parser");
const config = require("config");
const express = require("express");

module.exports = () => {
    const app = express();

    require('../api/routes/carteiraClientes')(app);
    
    //setando variáveis da aplicação
    app.set('port', process.env.PORT || config.get('server.port'));

    //middleware
    app.use(bodyParser.json());

    //endpoints
    consign({cwd: 'api'})
    .then('data')
    .then('controllers')
    .then('routes')
    .into(app);
    
    return app;
}