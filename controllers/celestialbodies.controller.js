const Celestialbody = require("../models/celestialbody.model");

const findAll = async (req, res) => {
    const celestialbody = await Celestialbody.findAll();
    res.status(200).send({ celestialbody });
};

module.exports = { findAll };