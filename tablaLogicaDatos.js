"use strict";

const redisConnection = require("./asyncRedis");
//const redisConnection = require("./redis-connection");
const redis = new redisConnection();

(async () => {
    try {
        let data = [
            {
               "TablaLogicaDatosID":15801,
               "TablaLogicaID":158,
               "Codigo":"MisClientes",
               "Descripcion":"0 : Deshabilitar, 1: Habilitar",
               "Valor":"1"
            },
            {
               "TablaLogicaDatosID":15802,
               "TablaLogicaID":158,
               "Codigo":"FichaEnriquecida",
               "Descripcion":"Permite habilitar la funcionalidad de ficha enriquecida para desktop y mobile. 0 : Deshabilitar, 1: Habilitar",
               "Valor":"1"
            },
            {
               "TablaLogicaDatosID":15803,
               "TablaLogicaID":158,
               "Codigo":"FichaResponsive",
               "Descripcion":"Permite habilitar la funcionalidad de ficha responsive. 0 : Deshabilitar, 1: Habilitar",
               "Valor":"1"
            },
            {
               "TablaLogicaDatosID":23705,
               "TablaLogicaID":158,
               "Codigo":"LasMasGanadoras",
               "Descripcion":"Permite habilitar la funcionalidad de palanca Las Mas Ganadoras. 0:Deshabilitar,1:Habilitar",
               "Valor":"1"
            },
            {
               "TablaLogicaDatosID":23706,
               "TablaLogicaID":158,
               "Codigo":"Promociones",
               "Descripcion":"Permite habilitar la funcionalidad de ficha responsive. 0 : Deshabilitar, 1: Habilitar",
               "Valor":"1"
            },
            {
               "TablaLogicaDatosID":23707,
               "TablaLogicaID":158,
               "Codigo":"MenuCategoria",
               "Descripcion":"Permite habilitar la funcionalidad del menu categorías. 0 : Deshabilitar, 1: Habilitar",
               "Valor":"1"
            },
            {
               "TablaLogicaDatosID":23708,
               "TablaLogicaID":158,
               "Codigo":"Condiciones",
               "Descripcion":"Permite habilitar la funcionalidad de condiciones en el desplegable del buscador. 0 : Deshabilitar, 1: Habilitar",
               "Valor":"1"
            }
         ];
        await redis.set("QA_SB_GANA_SB2_4_TablaLogicaDatos_158", JSON.stringify(data));
    } catch (error) {
        console.log(`Error al procesar: ${error}`);
    }
})();