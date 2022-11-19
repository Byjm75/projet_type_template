/* ICI EX DE BASE


import express from "express";
import cors from "cors";
import objetduRouter from "./routes/ObjetRoutes";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // 'http://localhost:3000'
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use('/api/objet', objetduRouter);


app.listen(8080, () => { 
    console.log(`L'api est en route sur l'adresse localhost:8080`);
});

*/
