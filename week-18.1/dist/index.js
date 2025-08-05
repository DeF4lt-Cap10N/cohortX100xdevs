import { PrismaClient } from "@prisma/client";
import express from "express";
const client = new PrismaClient();
const app = express();
app.use(express.json());
app.get("/user", async (req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    });
});
app.get("/user/:id", async (req, res) => {
    // const id = req.params.id as unknown as number;
    const id = req.params.id;
    const user = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            todos: true,
        }
    });
    res.json({
        user
    });
});
app.listen(3000);
// async function User() {
//    const user= await client.user.findFirst({
//         where:{
//             id:1
//         },
//         include:{
//             todos:true
//         }
//     })
//     console.log(user);
// }
// User();
// async function CreateUser() {
//     await client.user.create({
//         data:{
//             username:"Rahul",
//             password:"245343",
//             age:45
//         }
//     })
// }
// CreateUser();
// async function CreateTodo() {
//     await client.todo.create({
//         data:{
//             title:"go to gym",
//             description: "bicerps tricep sixpack in one day",
//             userId:1
//         }
//     })
// }
// CreateTodo();
//# sourceMappingURL=index.js.map