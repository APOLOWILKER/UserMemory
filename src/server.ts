import { PrismaClient } from '@prisma/client';
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient();

// rota
// HTTP Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users;
});

// API RESTfull - padrõe

// servidor http
app.listen({
  port: 3333,
}).then(() => {
  console.log("Server running on http://localhost:3333");
})


