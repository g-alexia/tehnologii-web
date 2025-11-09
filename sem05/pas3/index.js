import express from "express";

const app = express();
const PORT = 3000;

const resurse = [
  { id: 1, nume: "mar", descriere: "fruct" },
  { id: 2, nume: "castravete", descriere: "leguma" },
  { id: 3, nume: "banana", descriere: "fruct" }
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serverul funcționează");
});


app.get("/resursa/:id", (req, res) => {
  const id = Number(req.params.id); 
  const resursa = resurse.find(r => r.id === id);

  res.json(resursa);
});

app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});