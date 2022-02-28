import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    await db.users.create({
    data: {
      email: "flexmedicca@gmail.com",
      password:
        "$2a$10$qxHSlvXvQKqMJa0cExda8ej0GUGslsaZxAwpLdjOIOx/TKlYrwBX2"
    }
  });
}

seed();
