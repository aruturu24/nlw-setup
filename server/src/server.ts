import fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = fastify();
const PORT = parseInt(process.env["PORT"] || "3333");

app.register(cors);
app.register(appRoutes);

app.listen({
  port: PORT,
  host: "0.0.0.0"
}).then(() => {
  console.log("Server running at localhost:" + PORT);
})
