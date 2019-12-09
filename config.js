const config = {
    redis: {
        port: 6379,
        host: "ecconsultorasqa.ombwyy.0001.use1.cache.amazonaws.com",
        retries: 3,
        time_to_retry: 100,
        time_live: 3600 // tiempo de vida en segundos
    }
}

module.exports = config;