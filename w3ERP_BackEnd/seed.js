const { faker } = require("@faker-js/faker");
const fs = require("fs");

let data = { products: [], customers: [] };

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

for (let i = 0; i < 200; i++) {
  data.products.push({
    id: i,
    name: faker.commerce.product(),
    amount: faker.number.int({ min: 0, max: 100 }),
    nextPurchase: faker.date.soon({ days: 40 }),
    lastPurchase: faker.date.recent({ days: 40 }),
    percentage: faker.number.float({ min: -1, max: 1 }),
  });
}

for (let j = 0; j < 200; j++) {
  const shuffledProducts = shuffle(data.products.slice(0, 10));

  data.customers.push({
    id: j,
    name: faker.company.name(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    percentage: faker.number.float({ min: -1, max: 1 }),
    products: shuffledProducts,
  });
}



const file = "./bd.json";

const jsonContent = JSON.stringify(data, 2, null);

fs.writeFile(file, jsonContent, "utf8", (err) => {
  if (err) {
    console.error("Ocorreu um erro ao gravar o arquivo JSON:", err);
    return;
  }
  console.log("O arquivo JSON foi criado e gravado com sucesso.");
});
