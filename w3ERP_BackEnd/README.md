# w3 ERP

## Como usar o backend

Instalando as bibliotecas:

```bash
npm install
```

Criando um arquivo de banco de dados:

```bash
npm run dev:generator
```

Rodando o servidor:

```bash
npm run dev:server
```

Após esse comando, a seguinte mensagem deverá aparecer no terminal:

```bash
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching bd.json...

(˶ᵔ ᵕ ᵔ˶)

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/products
http://localhost:3000/customers
```

A partir desse momento, você poderá acessar os dados nos dois endpoint indicados acima.

### Referências:

- JSON-SERVER [https://github.com/typicode/json-server/tree/v0](https://github.com/typicode/json-server/tree/v0)
- FakerJS [https://fakerjs.dev/](https://fakerjs.dev/)
