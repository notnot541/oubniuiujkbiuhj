import express from 'express';
const app = express();
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
const port = 8000;

app.listen((res, err) => {
 console.log(port)
 if(err) return console.log(err)
})

  async function main() {
    await prisma.user.create({
        data: {
          name: 'notnot',
          email: 'newew@gmail.com',
        }
     }) }
  
  main()
    .catch(e => console.error(e))
    .finally(async () => {
      console.log()
      await prisma.$disconnect();
    });