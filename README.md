Descrição
-
Este projeto consiste em uma API RESTful desenvolvida em Node.js utilizando o framework Express, com integração ao banco de dados MongoDB por meio do Mongoose.
O objetivo principal foi implementar um CRUD completo para gerenciamento de pedidos, abordando desde a modelagem dos dados até a definição das rotas e serviços.

Funcionalidades:

* Criar pedidos (POST /orders) 

* Listar todos os pedidos (GET /orders/list)

* Consultar pedido por ID (GET /orders/:id)

* Atualizar pedido existente (PUT /orders/:id)

* Excluir pedido (DELETE /orders/:id)

Tecnologias utilizadas
-
* Node.js — ambiente de execução JavaScript

* Express — criação de rotas e middlewares

* MongoDB — banco de dados NoSQL

* Mongoose — modelagem e manipulação dos dados

* dotenv — gerenciamento de variáveis de ambiente

<img width="740" height="449" alt="image" src="https://github.com/user-attachments/assets/e87a8a2b-7dd0-44e1-9340-7c8fbab7a79f" />

---

Instalação e execução
Clone o repositório:
-
* git clone https://github.com/RicardoCJunior/js-node-mongo-project.git

* cd js-node-mongo-project

Instale as dependências:
-

npm install

Configure o arquivo .env na raiz do projeto:
-
MONGO_URL=mongodb://localhost:27017/js-node-mongo-project

PORT=3000

Inicie o servidor:
-
node server.js

---

Objetivo
-
Este projeto foi desenvolvido com foco em prática e aprendizado de conceitos fundamentais de backend com Node.js e MongoDB.
Ele pode servir como base para aplicações mais complexas, como sistemas de e-commerce, gestão de estoque ou APIs de pedidos.
