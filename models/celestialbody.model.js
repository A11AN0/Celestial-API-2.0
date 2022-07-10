const db = require("../config/pool.config");

class Celestialbody {
    constructor(data) {
        this.name = data.name;
        this.distanceFromSun = data.distanceFromSun;
        this.radius = data.radius;
        this.lengthOfDay = data.lengthOfDay;
        this.lengthOfYear = data.lengthOfYear;
    }

    static async findAll() {
        const query = "SELECT * FROM public.cbodies";
        const { rows } = await db.query(query);
        console.table(rows);
        return rows;
    }
}

module.exports = Celestialbody;
