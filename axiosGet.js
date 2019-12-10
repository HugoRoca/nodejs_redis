const axios = require("axios");

(async () => {
    try {
        const response = await axios.get("url");
        console.log(response);
    } catch (error) {
        console.log(`Error al procesar: ${error}`);
    }
})();