"use strict";

const redisConnection = require("./asyncRedis");
//const redisConnection = require("./redis-connection");
const redis = new redisConnection();

(async () => {
    try {
        let data = [
            {
               "IdSeccion":"CAT",
               "Seccion":"Categorías",
               "ElasticsearchCampo":"categorias.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":1,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Fragancias",
               "Descripcion":null,
               "Codigo":"cat-fragancia",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"CAT",
               "Seccion":"Categorías",
               "ElasticsearchCampo":"categorias.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":2,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Maquillaje",
               "Descripcion":null,
               "Codigo":"cat-maquillaje",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"CAT",
               "Seccion":"Categorías",
               "ElasticsearchCampo":"categorias.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":3,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Cuidado Personal",
               "Descripcion":null,
               "Codigo":"cat-cuidado-personal",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"CAT",
               "Seccion":"Categorías",
               "ElasticsearchCampo":"categorias.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":4,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Tratamiento Facial",
               "Descripcion":null,
               "Codigo":"cat-tratamiento-facial",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"CAT",
               "Seccion":"Categorías",
               "ElasticsearchCampo":"categorias.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":5,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Bijouterie",
               "Descripcion":null,
               "Codigo":"cat-bijouterie",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"CAT",
               "Seccion":"Categorías",
               "ElasticsearchCampo":"categorias.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":6,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Moda",
               "Descripcion":null,
               "Codigo":"cat-moda",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"CAT",
               "Seccion":"Categorías",
               "ElasticsearchCampo":"categorias.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":7,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Herramientas de Venta",
               "Descripcion":null,
               "Codigo":"cat-herramientas-de-venta",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":0
            },
            {
               "IdSeccion":"MAR",
               "Seccion":"Marcas",
               "ElasticsearchCampo":"marcas.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":8,
               "IdPadre":0,
               "Tipo":"inclusive",
               "FiltroNombre":"Ésika",
               "Descripcion":null,
               "Codigo":"mar-esika",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"MAR",
               "Seccion":"Marcas",
               "ElasticsearchCampo":"marcas.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":9,
               "IdPadre":0,
               "Tipo":"inclusive",
               "FiltroNombre":"L'Bel",
               "Descripcion":null,
               "Codigo":"mar-lbel",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"MAR",
               "Seccion":"Marcas",
               "ElasticsearchCampo":"marcas.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":10,
               "IdPadre":0,
               "Tipo":"inclusive",
               "FiltroNombre":"Cyzone",
               "Descripcion":null,
               "Codigo":"mar-cyzone",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"PRE",
               "Seccion":"Precios",
               "ElasticsearchCampo":"precio",
               "ElasticsearchOperador":"range",
               "IdFiltro":11,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Hasta S/. 30.00",
               "Descripcion":null,
               "Codigo":"pre-0-30",
               "ValorMinimo":0,
               "ValorMaximo":30.01,
               "Estado":1
            },
            {
               "IdSeccion":"PRE",
               "Seccion":"Precios",
               "ElasticsearchCampo":"precio",
               "ElasticsearchOperador":"range",
               "IdFiltro":12,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"S/. 30.01 - S/. 50.00",
               "Descripcion":null,
               "Codigo":"pre-30-50",
               "ValorMinimo":30.01,
               "ValorMaximo":50.01,
               "Estado":1
            },
            {
               "IdSeccion":"PRE",
               "Seccion":"Precios",
               "ElasticsearchCampo":"precio",
               "ElasticsearchOperador":"range",
               "IdFiltro":13,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"S/. 50.01 - S/. 70.00",
               "Descripcion":null,
               "Codigo":"pre-50-70",
               "ValorMinimo":50.01,
               "ValorMaximo":70.01,
               "Estado":1
            },
            {
               "IdSeccion":"PRE",
               "Seccion":"Precios",
               "ElasticsearchCampo":"precio",
               "ElasticsearchOperador":"range",
               "IdFiltro":14,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"S/. 70.01 a más",
               "Descripcion":null,
               "Codigo":"pre-70-0",
               "ValorMinimo":70.01,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"seccion1.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":15,
               "IdPadre":0,
               "Tipo":"excluded",
               "FiltroNombre":"Gana+ / Ofertas",
               "Descripcion":null,
               "Codigo":"sec-gana",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"seccion1.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":16,
               "IdPadre":0,
               "Tipo":"excluded",
               "FiltroNombre":"Catálogo",
               "Descripcion":null,
               "Codigo":"sec-cat",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"seccion1.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":17,
               "IdPadre":0,
               "Tipo":"excluded",
               "FiltroNombre":"Expofertas",
               "Descripcion":null,
               "Codigo":"sec-exp",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"tipoPersonalizacion",
               "ElasticsearchOperador":"term",
               "IdFiltro":18,
               "IdPadre":15,
               "Tipo":"excluded",
               "FiltroNombre":"SR",
               "Descripcion":"Ofertas especiales",
               "Codigo":"sec-sr",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"tipoPersonalizacion",
               "ElasticsearchOperador":"term",
               "IdFiltro":19,
               "IdPadre":15,
               "Tipo":"excluded",
               "FiltroNombre":"OPM",
               "Descripcion":"Ofertas para mí",
               "Codigo":"sec-opm",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"tipoPersonalizacion",
               "ElasticsearchOperador":"term",
               "IdFiltro":20,
               "IdPadre":15,
               "Tipo":"excluded",
               "FiltroNombre":"HV",
               "Descripcion":"Herramienta de ventas",
               "Codigo":"sec-hv",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"tipoPersonalizacion",
               "ElasticsearchOperador":"term",
               "IdFiltro":21,
               "IdPadre":15,
               "Tipo":"excluded",
               "FiltroNombre":"GND",
               "Descripcion":"Guia de negocio",
               "Codigo":"sec-gnd",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"tipoPersonalizacion",
               "ElasticsearchOperador":"term",
               "IdFiltro":22,
               "IdPadre":15,
               "Tipo":"excluded",
               "FiltroNombre":"OPT",
               "Descripcion":"Ofertas para tí",
               "Codigo":"sec-opt",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"tipoPersonalizacion",
               "ElasticsearchOperador":"term",
               "IdFiltro":23,
               "IdPadre":15,
               "Tipo":"excluded",
               "FiltroNombre":"ODD",
               "Descripcion":"Ofertas del día",
               "Codigo":"sec-odd",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"tipoPersonalizacion",
               "ElasticsearchOperador":"term",
               "IdFiltro":24,
               "IdPadre":15,
               "Tipo":"excluded",
               "FiltroNombre":"LMG",
               "Descripcion":"Las más ganadoras",
               "Codigo":"sec-lmg",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"SEC",
               "Seccion":"Secciones",
               "ElasticsearchCampo":"tipoPersonalizacion",
               "ElasticsearchOperador":"term",
               "IdFiltro":25,
               "IdPadre":15,
               "Tipo":"excluded",
               "FiltroNombre":"LAN",
               "Descripcion":"Lanzamientos",
               "Codigo":"sec-lan",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":1
            },
            {
               "IdSeccion":"CAT",
               "Seccion":"Categorías",
               "ElasticsearchCampo":"categorias.keyword",
               "ElasticsearchOperador":"term",
               "IdFiltro":26,
               "IdPadre":0,
               "Tipo":"last-inclusive-level",
               "FiltroNombre":"Festival",
               "Descripcion":null,
               "Codigo":"cat-festival",
               "ValorMinimo":0,
               "ValorMaximo":0,
               "Estado":0
            }
         ];
        await redis.set("QA_SBBuscador_CO_FiltroBuscador", JSON.stringify(data));
    } catch (error) {
        console.log(`Error al procesar: ${error}`);
    }
})();