/* ICI EX DE BASE


import express from "express";
import cors from "cors";
import objetduRouter from "./routes/ObjetRoutes";
import AppDataSource from "./data-source";

AppDataSource.initialize()
  .then(() => {
    const app = express();



const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // 'http://localhost:3000'
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use('/api/objet', objetduRouter);


app.listen(process.env.PORT, () => { 
    console.log(`L'api est en route sur l'adresse localhost:${process.env.PORT}`);
});
})
  .catch((err) => {
    console.log(`Une erreur s'est produite :`, err);
  });



*/
