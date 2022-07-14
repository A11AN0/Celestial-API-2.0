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

    static async find(name) {
        const { rows } = await db.query(
            `SELECT * FROM public.cbodies WHERE LOWER(name) = '${name.toLowerCase()}'`,
        );
        console.table(rows);
        return rows;
    }

    async save() {
        const celestialBody = { ...this };
        const { command } = await db.query(
            `INSERT INTO public.cbodies(name, radius_km, day_length_hr, year_length_days, sun_distance_milkm)VALUES('${celestialBody.name}', ${celestialBody.radius}, ${celestialBody.lengthOfDay}, ${celestialBody.lengthOfYear}, ${celestialBody.distanceFromSun})`,
        );
        console.log(
            `celestial body: ${celestialBody.name} created, ${command} successful`,
        );
        console.table(Celestialbody.findAll());
        return `celestial body: ${celestialBody.name} created`;
    }
}

module.exports = Celestialbody;
