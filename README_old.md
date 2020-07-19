### Sobre:

- Aplicação em NodeJs e typescript.

---

### Ferramentas utilizadas:

- [Docker](https://www.docker.com/)
- [DBeaver](https://dbeaver.io/)
- [Insomnia](https://insomnia.rest/)
- [MD5](http://www.md5.cz/)

- [PostgreSQL](https://www.postgresql.org/)
- [MongoDb](https://www.mongodb.com/)
- [Redis](https://redis.io/)

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Uuidv4](https://www.npmjs.com/package/uuidv4)
- [date-fns](https://date-fns.org/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [TypeOrm](https://typeorm.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [multer](https://www.npmjs.com/package/multer)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Handlebars](https://handlebarsjs.com/)
- [Ethereal](https://ethereal.email/)
- [Celebrate](https://www.npmjs.com/package/celebrate/)
- [Nodemailer](https://nodemailer.com/)
- [Nodemailer/SES](https://nodemailer.com/transports/ses/)

---

### Como rodar:

- Primeiro clone o repositório ou faça download;
- Abra a pasta do projeto e rode no terminal:

  `$ yarn`

  `$ yarn dev`
---
### Mapeando as funcionalidades da aplicação

#### Recuperação de senha
  **RF** (Requisitos funcionais)
  - O usuario deve poder recuperar sua senha informando o seu e-mail;
  - O usuario deve receber um e-mail com instruções de recuperação de senha;
  - O usuario deve poder resetar sua senha.

  **RNF** (Requisitos não funcionais)
  - Utilizar Mailtrap para testar envios em ambiente de dev;
  - Utilizar Amazon SES para envios em produção;
  - O envio de e-mails deve acontecer em segundo plano (backgound job)

  **RN** (Regras de negócio)
  - O link enviado por email para resetar senha, deve expirar em 2h;
  - O usuário precisa confirmar a nova senha ao resetar sua senha;


#### Atualização do perfil
  **RF**
  - O usuário deve pode atualizar seu nome, email e senha;

  **RN**
  - O usuário não pode alterar seu email para um email já utilizado;
  - Para atualizar sua senha, o usuário deve informar a senha antiga;
  - Para atualizar sua senha, o usuário precisa confirmar a nova senha;

#### Painel do prestador
  **RF**
  - O usuário deve poder listar os agendamentos de um dia específico;
  - O prestador deve receber uma notificação sempre que houver um novo agendamento;
  - O prestador deve poder visualizar as notificações não lidas;

  **RNF**
  - Os agendamentos do prestador no dia devem ser armazenados em cache;
  - As notificações do prestador deve ser armazenadas no MongoDB;
  - As notificações do prestador deve ser enviadas em tempo-real utilizando Socket.io;

  **RN**
  - A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

#### Agendamento de serviços
  **RF**
  - O usuário deve poder listar todos prestadores de serviço cadastrados
  - O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
  - O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
  - O usuário deve poder realizar um novo agendamento com um prestador;

  **RNF**
  - A listagem de prestadores deve ser armazenada em cache;

  **RN**
  - Cada agendamento deve durar 1h exatamente;
  - Os agenadamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h, último às 17h);
  - O usuário não pode agendar em um horário já ocupado;
  - O usuário não pode agendar em um horário que já passou;
  - O usuárionão pode agendar serviços consigo mesmo;

---

### Comandos utilizados na instalação:

#### Criando o arquivo package.json

yarn init -y

#### Instalando a biblioteca express

yarn add express

#### Instalando a biblioteca typescript -D <desenvolvimento>

yarn add typescript -D

#### Criando o arquivo tsconfig.json

yarn tsc --init

#### Instalando o intelisence do express no typescript

yarn add @types/express -D

#### Instalando a biblioteca ts-node-dev

yarn add ts-node-dev -D

#### Instalando a biblioteca eslint

yarn add eslint -D

#### Criando o arquivo eslint.json

yarn eslint --init
 - To check syntax, find problems, and enforce code style
 - JavaScript modules (import/export)
 - None of these
 - Does your project use TypeScript? (y/N) Y
 - Where does your code run?
    ◯ Browser
    ❯◉ Node
 - Use a popular style guide
 - Airbnb: https://github.com/airbnb/javascript
 - JSON
 - N
 - yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest

#### Instalando a biblioteca eslint

yarn add -D eslint-import-resolver-typescript

#### Instalando a biblioteca prettier

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

#### Instalando a biblioteca uuidv4

yarn add uuidv4

#### Instalando a biblioteca date-fns

yarn add date-fns

#### Instalando a biblioteca typeorm

yarn add typeorm pg

yarn add reflect-metadata

#### Criando as migrations

yarn typeorm migration:create -n `<Nome da Migration>`

#### Executando as migrations

yarn typeorm migration:run

#### Revertendo uma migrations

yarn typeorm migration:revert

#### Consultando as migrations

yarn typeorm migration:show

#### Instalando a biblioteca bcryptjs e @types/bcryptjs

yarn add bcryptjs

yarn add @types/bcryptjs -D

#### Instalando a biblioteca jsonwebtoken e @types/jsonwebtoken
** jwt.io **

yarn add jsonwebtoken

yarn add @types/jsonwebtoken -D

#### Instalando a biblioteca multer e @types/multer
** multer é um middleware node.js para manipular dados de multipart/form-data, usado principalmente para o upload de arquivos. **

yarn add multer

yarn add @types/multer -D

#### Instalando a biblioteca express async error

yarn add express-async-errors

#### Instalando a biblioteca Cors e @types/cors

yarn add cors @types/cors.


#### Instalando a biblioteca para ler o @path no import

yarn add -D tsconfig-paths

#### Instalando a biblioteca para fazer injeção de dependencia

yarn add tsyringe

#### Instalando a biblioteca para fazer os testes

yarn add jest -D

yarn add -D @types/jest

yarn jest --clearCache **Limpa o cache, quando está dando erro no teste**

#### Configurando o Jest

yarn jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Automatically clear mock calls and instances between every test? … yes

#### Instalando uma dependencia porque o Jest não entende typescript

yarn add ts-jest -D

#### Instalando a biblioteca nodemailer e o @types

yarn add nodemailer

yarn add -D @types/nodemailer

#### Instalando a biblioteca Handlebars

yarn add handlebars

#### Instalando a biblioteca mongodb

yarn add mongodb

yarn add -D @types/mongodb

#### Instalando a biblioteca celebrate (validação)

yarn add celebrate

yarn add -D @types/hapi__joi

#### Instalando a biblioteca .env

yarn add dotenv

#### Instalando a biblioteca class-transformer

yarn add class-transformer

#### Instalando a biblioteca aws-sdk para envio de email

yarn add aws-sdk

#### Instalando a biblioteca mime para ler o content do arquivo

yarn add mime

#### Instalando a biblioteca do redis e o @types

yarn add ioredis

yarn add @types/ioredis

#### Instalando rate-limiter-flexible

yarn add rate-limiter-flexible

#### Instalando redis

yarn add redis

yarn add @types/redis

