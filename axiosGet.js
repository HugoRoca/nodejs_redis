const axios = require("axios");

(async () => {
    try {
        const response = await axios.get("https://vpc-es-sbsearch-prd-a5xq7pyb6cvphjra33ojtejvwa.us-east-1.es.amazonaws.com");
        console.log(response);
    } catch (error) {
        console.log(`Error al procesar: ${error}`);
    }
})();