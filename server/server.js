import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../server/public")));

const coffee = [
  { id: 1, title: "Café com Leite", preco: "R$ 5,00", url: "https://images.unsplash.com/photo-1615486780246-76e6bb33e8b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" },
  { id: 2, title: "Café Filtrado", preco: "R$ 3,00", url: "https://images.unsplash.com/photo-1587734361993-0033759da68b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80" },
  { id: 3, title: "Café Americano", preco: "R$ 4,00", url: "https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},
  { id: 4, title: "Café Latte", preco: "R$ 4,50", url: "https://images.unsplash.com/photo-1514354900327-3e3f538a755c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
  { id: 5, title: "Baunilha Latte", preco: "R$ 5,50", url: "https://images.unsplash.com/photo-1558643973-ec5253dc0333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
  { id: 6, title: "Cappucino", preco: "R$ 7,00", url: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80" },
  { id: 7, title: "Cappucino Chocolate", preco: "R$ 3,50", url: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
  { id: 8, title: "Cappucino Doce de Leite", preco: "R$ 6,00", url: "https://images.unsplash.com/photo-1534234757579-8ad69d218ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" },
];


const comments = [
  { id: 1, title:"Delicious!, the best for me", name:"Jow Snow", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBsLTICrk_IrgZKR1Esb1iYftOGhw7FHRHg&usqp=CAU"},
  { id: 2, title:"Wonderful, I order every day", name:"Michael Scott", photo: "https://s2.glbimg.com/-9lG_NCCu26MsBAWtrWHr5Cl7Ag=/620x413/smart/e.glbimg.com/og/ed/f/original/2017/12/19/michael-scott-the-office.png"},
  { id: 3, title:"The number 1 for me!", name:"Dwight schrute", photo: "https://akns-images.eonline.com/eol_images/Entire_Site/2020017/rs_1024x759-200117120856-1024-The-Office-Stress-Relief-2.jpg?fit=around%7C776:576&output-quality=90&crop=776:576;center,top"}
]

app.get("/comments", (req, res) => {
  res.json(comments)
})

app.get("/coffee", (req, res) => {
  res.json(coffee);
});

const contacts = [];

app.get("/contact", (req, res) => {
  res.json(contacts);
});

app.post("/contact", (req, res) => {
  const newContact = req.body;
  contacts.push(newContact);
  res.json(newContact);
});

app.delete("/contact", (req, res) => {
  contacts = []; // Redefinir o array para um estado inicial vazio
  res.status(200).json({ message: "Contacts reset" });
});

// app.post("/coffee", (req, res) => {
//   const id = req.body.id
//   const title = req.body.title
//   const preco = req.body.title

//   if(id && title && preco == true) {
//     return (res.status(201).json("Created with sucess!"))
//   } else {
//     return (res.status(404).json("Failed"))
//   }
// });

app.get("/coffee/:id", (req, res) => {
  const coffeeId = parseInt(req.params.id);
  const coffeeItem = coffee.find((item) => item.id === coffeeId);
  
  if (coffeeItem) {
    res.json(coffeeItem);
  } else {
    res.status(404).json({ error: "Item de café não encontrado." });
  }
});

// Outras rotas e configurações...

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
