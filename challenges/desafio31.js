db.produtos.find(
    {
      $expr: { $gt: ["$curtidas", "$vendidos"] },
    },
);
