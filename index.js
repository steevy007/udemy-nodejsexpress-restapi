const express = require('express')
const app = express()
const swaggerJsdoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')
const usersRoutes = require('./routes/users.route')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "my-posts",
            description: "API documentation",
            contact: {
                name: "Developer",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.use("/users", usersRoutes)

app.listen(3000, () => {
    console.log('I am ready to listen')
})