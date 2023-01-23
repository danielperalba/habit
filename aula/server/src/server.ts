import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'


const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/**
 * 
 * Metodo HTTP: 
Get (Quando for buscar uma informacao, quando a rota trazer uma lista ou um dado de um bd)
Post (Quando a rota vai criar alguma coisa)
Put (Quando a rota vai atualizar algum recurso por completo)
Path (Quando for atualizar alguma informacao especifica de um recurso)
Delete (Quando for deletar algum recurso do backend)
*/

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server running!')
})