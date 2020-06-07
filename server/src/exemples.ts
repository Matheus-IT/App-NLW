import express from "express";

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Requisições:
// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação...
// Request Body: Parâmetros para criação/atualização de informações

const users = [
	"Diego", // 0
	"Matheus", // 1
	"Claiton", // 2
	"Robson", // 3
	"Franklin" // 4
];

app.get("/users", (request, response) => {
	const search = String(request.query.search);
	const filteredUsers = users.filter((user) => search ? user.includes(search) : users);
	console.log(search);
	//Json
	return response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
	const id = Number(request.params.id);

	const user = users[id];

	return response.json(user);
});

app.post("/users", (request, response) => {
	const data = request.body;

	console.log(data);

	const user = {
		name: data.name,
		email: data.email
	}

	return response.json(user);
});

app.listen(3333);
