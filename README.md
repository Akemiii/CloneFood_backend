# CloneFood
Serviço backend inspirado no ifood

# Instalar

Para instalar as dependências utilizar yarn install --save ou npm install --save

# Inicializar

Para inicializar utilizar yarn start ou npm start

# Modelo entidade relacionamento
![MER clone food](https://i.ibb.co/Ky2LpSQ/db.png)

# Rotas API

<span color="green">GET</span> Categorias#index

baseurl/categories


Exemplo de resposta

```json

{
    "categories":[
        "id" : 1,
        "title" : "Italiana",
        "image_url" : "baseurl/storage/eyaskaoa3244"
    ]
}

```


POST Restaurants#create

baseurl/restaurants

Exemplo envio de requisição

```json

{
    "name": 'nome restaurante',
    "description": 'descrição',
    "delivery_tax": '9.99',
    "category_id": '4',
    "city": 'cidade',
    "state": 'estado',
    "neighborhood": 'bairro',
    "street": 'rua',
    "number": 'número',
    "Complement": 'complemento',
    "reference": 'referencia',
}

```
Exemplo de resposta

# Lista de tarefas

- [x] Criar Modelos
- [x] Criar Relacionamentos
- [x] Criar Controllers
- [x] Criar Rotas
- [ ] Atualizar MER
- [ ] Melhorar Modelos
- [ ] Upload de imagens
- [ ] Geolocalização
- [ ] Cadastrar massa para teste
- [ ] Testes unitários
- [ ] Testes automatizados