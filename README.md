-------------------------------------------------------------------INSTALLATION POUR TOUT PROJET EN REACT----------------------------------------------------------------------------------

----INSTALLATION, CREATION DU DOSSIER ET DU GIT--------------------------

-Créé un nouveau dossier (le titre sera le meme pour le git et le react !sans lettre capitale!) puis click droit ouvrir le terminal avec "git bash".

    - ouvrir Github et créer un new repository avec le meme nom de dossier.
    - ouvrir le dossier dans VSCode puis le Terminal

Dans le Terminal créer le Gitignore
echo node_modules >> .gitignore
echo dist >> .gitignore

Nouveau Fichier = README.md

Dans le Terminal bash du VSCode, éxécuter cette option car le dossier est deja créé "…or push an existing repository from the command line".
git remote add origin https://github.com/Byjm75/nom_du_repo.git

Initialisation de package.json
npm init -y

Initailisation de tsconfig.json
tsc --init
Dans le fichier tsconfig.json, décommanter (l.52) outDir: et mettre = "./dist"
puis supp toutes les autres lignes !commenté! en gardant les titre /_ titre _/.
MODELE
{
"compilerOptions": {
/_ Language and Environment _/
"target": "es2016", /_ Set the JavaScript language version for emitted JavaScript and include compatible library declarations. _/
/_ Modules _/
"module": "commonjs", /_ Specify what module code is generated. _/
/_ Emit _/
"outDir": "./dist", /_ Specify an output folder for all emitted files. _/
/_ Interop Constraints _/
"esModuleInterop": true, /_ Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. _/
"forceConsistentCasingInFileNames": true, /_ Ensure that casing is correct in imports. _/
/_ Type Checking _/
"strict": true, /_ Enable all strict type-checking options. _/
/_ Completeness _/
// "skipDefaultLibCheck": true, /_ Skip type checking .d.ts files that are included with TypeScript. _/
"skipLibCheck": true /_ Skip type checking all .d.ts files. _/
}
}

----INSTALLATION DES DEPENDENCIES------------------------------------------

express:
npm i express

----INSTALLATION DES DEV DEPENDENCIES------------------------------------------

typescript:
npm i -D typescript
types/express:
npm i -D @types/express
Node:
npm i -D ts-node
Nodemon:
npm i -D nodemon

----CREATION DE DOSSIERS ET FICHIERS----------------------------------------
Nouveau dossier = src puis
Nouveau fichier = index.ts puis =>

import express from "express";

const app = express();
app.use(express.json());

----INSTALLATION DEPENDENCIE + DEV DEPENCIE--------------------------------------
cors:
npm i cors
npm i @types/cors
puis =>
import cors from 'cors';
!la suite de app.use express!
app.use(cors({
origin: '\*', // 'http://localhost:3000'
methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

---

Mise en place de l'ecoute du Localhost à la suite =>
app.listen(8080, () => {
console.log(`L'api est en route sur l'adresse localhost:8080`);
});

Dans le fichier package.json
"scripts": {
!A MODIFIER! => "start": "nodemon src/index.ts"
},

ON LANCE LE SERVER DANS LE TERMINAL
npm start

---

----INSTALLATION DES ROUTES REACT ET DES FICHIERS-----------------------

Dans la racine de src =>
Nouveau dossier = routes puis
Nouveau fichier = ObjetRoutes.ts

---

Dans la racine de src =>
Nouveau dossier = controllers puis
Nouveau fichier = ObjetControllers.ts

---

Dans la racine de src =>
Nouveau dossier = services puis
Nouveau fichier = ObjetServices.ts

---

Dans la racine de src =>
Nouveau dossier = models puis
Nouveau dossier = interfaces puis
Nouveau fichier = Objet.ts

---

-------------------------------------------------------------ETAPE CREATION BBD-------------------------------------------------------------------------------------------------------------

Voir note "BASE DE DONNEES"

-------------------------------------------------------------INSTALLATION ORM RELATION API-BBD--------------------------------------------------------------------------------------------------

Documentation et Notice sur typeorm.io

TypeORM installation ds Terminal
npm install typeorm --save
npm install reflect-metadata --save
et importez-le quelque part dans l'emplacement global de votre application (par exemple dans app.ts):
import "reflect-metadata"
npm install @types/node --save-dev
npm install pg --save (PosgreSQL)

Ds tsconfig =>
Aprés la ligne "skipLibCheck": true,  
"emitDecoratorMetadata": true,
"experimentalDecorators": true,

Dans la racine de src =>
Nouveau fichier = dataSource.ts
(la base de données est stocker ds le fichier dataSource
et est créer via le terminal shellpsql (voir blocnote: Base De Données )

Ds Index
import AppDataSource from './data-source';
AppDataSource.initialize()
.then(() => {
const app = express();

Ds fichier dataSource
import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'Loisodu14',
database: 'Nom de la BDD',
synchronize: false,
logging: false,
entities: [Post, Category],
subscribers: [],
migrations: [],
});

---

METTRE EN PLACE UN ENVIRONEMENT DE STOCKAGE POSGRESQL

Dans la racine du projet =>
Nouveau fichier = .env.local =>
PORT=8080
DB_HOST='localhost'
DB_PORT=5432
DB_USERNAME='postgres'
DB_PASSWORD='Simplon2022!'
DB_NAME='library'

Installation du package dotenv
npm i dotenv
puis importer ds fichier Datasource
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

Dans data-sources =>
const AppDataSource = new DataSource({
type: 'postgres',
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
synchronize: false,
logging: false,
subscribers: [],
migrations: [],
});

puis ds le Fichier .gitignore =>
.env.local

Dans la racine du projet =>
Nouveau fichier = .env.template =>
PORT=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

Dans le index.ts =>
app.listen(process.env.PORT, () => {
console.log(`L'api est en route sur l'adresse localhost:${process.env.PORT}`);
});

---------------------------------------------ETAPE DU HASHAGE----------------------------------------------------------------------
Voir veille sur le hash

puis =>

Installation de node.bcrypt.js
npm i bcrypt
npm i --save-dev @types/bcrypt
dans intex.ts =>
import bcrypt from 'bcrypt';

Installation du token
npm install jsonwebtoken --save
