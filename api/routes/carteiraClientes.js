module.exports = app => {
    const controller = app.controller.carteiraClientes;

    app.route('/api/v1/carteiraClientes')
        .get(controller.listCarteiraClientes);
}