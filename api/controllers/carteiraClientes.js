module.exports = () => {
    const carteiraClientesDB = app.data.carteiraClientes;
    const controller = {};

    controller.listCarteiraClientes = (req, res) => res.status(200).json(carteiraClientesDB);

    return controller;
}