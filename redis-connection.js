"use strict";

const redis = require("ioredis");
const config = require("./config");

module.exports = class RedisConnection {
    constructor() {
        this.client = this.connect();
    }

    connect() {
        let client = new redis({
            host: config.redis.host,
            port: config.redis.port,
            retryStrategy(times){
                let delay = Math.min(times * config.redis.time_to_retry, 200);
                return delay;
            },
            maxRetriesPerRequest: config.redis.retries
        });

        client.on("connect", () => {
            console.log("Connectado a redis");
        });

        client.on("error", err => {
            console.log(`Redis error: ${err}`);
        });

        return client;
    }

    async get(key){
        return await this.client.get(key);
    }

    async set(key, value){
        return await this.client.set(key, value);
    }
}

// module.exports = class CacheManager {
//     constructor() {
//         if(config.redis && onfig.redis.enabled)
//             this.client = asyncRedis.createClient(config.redis.port, config.redis.endpoint);
//     }

//     async save(key, value) {
//         if(config.redis && onfig.redis.enabled)
//             await this.client.set(key, JSON.stringify(value));
//     }

//     async get(key) {
//         if(config.redis && onfig.redis.enabled)
//             return await this.client.get(key);
//         else
//             return null;
//     }
// }