const asyncRedis = require("async-redis");
const config = require("./config");

module.exports = class AsyncRedis {
    constructor() {
        this.client = asyncRedis.createClient(config.redis.port, config.redis.host);
    }

    async set(key, value) {
        await this.client.set(key, JSON.stringify(value));
    }

    async get(key) {
        return await this.client.get(key);

    }
}