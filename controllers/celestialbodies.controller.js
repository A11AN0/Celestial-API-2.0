const Celestialbody = require("../models/celestialbody.model");

const findAll = async (req, res) => {
    const celestialbody = await Celestialbody.findAll();
    res.status(200).send({ celestialbody });
};

const find = async (req, res) => {
    const celestialbody = await Celestialbody.find(req.params.id);
    res.status(200).send({ celestialbody });
};

const create = async (req, res) => {
    const entry = req.body;
    const newCelestialBody = new Celestialbody(entry);
    const message = await newCelestialBody.save();
    res.status(201).send({ message, newCelestialBody });
};

module.exports = { findAll, find, create };
