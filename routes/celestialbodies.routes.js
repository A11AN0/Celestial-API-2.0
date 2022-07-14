const Router = require("express");
const db = require("../config/pool.config");
const celestialbodies = require("../controllers/celestialbodies.controller");
const { findAll, find, create } = celestialbodies;
const router = Router();

router.get("/", findAll);

//1. Get a specific celestial body status 200:success
router.get("/:id", find);

// //2. Post (make a new celestial body) status 201:resource created
router.post("/", create);

// //3. Delete a celestial body 204; resource deleted
// router.delete("/:id", destroy);

module.exports = router;
