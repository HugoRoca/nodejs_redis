const axios = require("axios");

(async () => {
    try {
        const response = await axios.post("url", { test: "test" });
        console.log(response);
    } catch (error) {
        console.log(`Error al procesar: ${error}`);
    }
})();