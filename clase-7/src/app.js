import express from "express";
const app= express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


let products =[];

app.get("/api/products", (req, res) => {
    res.status(200).json({status: "ok" , payload: products});
})

app.post("/api/products", (req,res) => {
    const body = req.body;
    console.log("body", body);

    products.push(body);


    res.status(201).json({status: "ok", payload:products});
})

app.listen(8080, () => {
    console.log("server on port 8080")
})