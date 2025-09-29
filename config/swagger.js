import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";

dotenv.config();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auth & Tasks API",
      version: "1.0.0",
      description:
        "REST API with Authentication and CRUD operations for users and tasks",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    servers: [
      {
        url: process.env.BASE_URL,
        // || "http://localhost:5000/api",
      },
    ],
  },
  apis: ["./routes/*.js"], // path to your route files
};

// const swaggerSpec = swaggerJSDoc(options);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiMiddleware = swaggerUi;
