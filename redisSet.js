"use strict";

const redisConnection = require("./redis-connection");
const redis = new redisConnection();

(async () => {
    try {
        let data = [{
                "_id": "5c21d04d34b4a04750f9aa6f",
                "index": 0,
                "guid": "c9f32788-0116-48e9-86d5-9c7649f70c58",
                "isActive": true,
                "picture": "http://placehold.it/32x32",
                "age": 26,
                "eyeColor": "brown",
                "name": "Luz Farmer",
                "gender": "female",
                "company": "KONGLE",
                "email": "luzfarmer@kongle.com",
                "phone": "+1 (936) 525-2610",
                "friends": [{
                        "id": 0,
                        "name": "Tania Cardenas"
                    },
                    {
                        "id": 1,
                        "name": "Cherry Bishop"
                    },
                    {
                        "id": 2,
                        "name": "Simpson French"
                    }
                ]
            },
            {
                "_id": "5c21d04db527f89279d44902",
                "index": 1,
                "guid": "144ef286-f059-4a62-98ca-b54c5130a4d7",
                "isActive": false,
                "picture": "http://placehold.it/32x32",
                "age": 28,
                "eyeColor": "green",
                "name": "Addie Oconnor",
                "gender": "female",
                "company": "FOSSIEL",
                "email": "addieoconnor@fossiel.com",
                "phone": "+1 (879) 555-3751",
                "friends": [{
                        "id": 0,
                        "name": "Vaughn Ratliff"
                    },
                    {
                        "id": 1,
                        "name": "Delores Glover"
                    },
                    {
                        "id": 2,
                        "name": "Jayne Puckett"
                    }
                ]
            }
        ];
        await redis.set("numeros", JSON.stringify(data));
    } catch (error) {
        console.log(`Error al procesar: ${error}`);
    }
})();