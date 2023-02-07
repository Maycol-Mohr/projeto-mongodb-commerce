db.resumoProdutos.insertOne(
    {
          franquia: "McDonalds",
          totalProdutos: db.produtos.countDocuments({}),
    },
    { upsert: true },
);
  
db.resumoProdutos.find(
      {},
      { franquia: 1, totalProdutos: 1, _id: 0 },
);
