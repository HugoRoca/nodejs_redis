"use strict";

const redisConnection = require("./redis-connection");
const redis = new redisConnection();

(async () => {
    try {
        let rr = await redis.get("numeros");
        console.log(rr);
    } catch (error) {
        console.log(`Error al procesar: ${error}`);
    }
})();