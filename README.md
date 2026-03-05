# ng-fokus

A ng-fokus é uma aplicação da ferramenta do método Pomodoro (gestão de tarefas), baseado no funcionamento do site promofocus. O projeto está desenvolvido em Angular 18 com service worker.

## 🔨 Funcionalidades do projeto

O aplicativo permite que os usuários gerenciem suas tarefas utilizando a técnica Pomodoro, ajudando a aumentar a produtividade e a manter o foco.

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas no projeto são:

- `Angular 18`: framework para construção de aplicações web
- `Service Worker`: para suporte offline e melhoria de performance  
- `Componentes Angular`: para modularização e reutilização de código
- `RxJS`: para programação reativa
- `TypeScript`: linguagem de programação utilizada no desenvolvimento

## 🛠️ Como rodar o projeto

### Pré-requisitos

- `Node.js 20+` e `npm`
- `Docker` e `Docker Compose` (opcional, para rodar em container)

### Rodando localmente (Angular dev server)

1. Clone o repositório:
   ```bash
   git clone git@github.com:LuizOtavioTG/ng-fokus.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd ng-fokus
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npx ng serve
   ```
5. Acesse no navegador:
   `http://localhost:4200/`

### Rodando com Docker Compose

1. Na raiz do projeto, execute:
   ```bash
   docker compose up --build -d
   ```
2. Acesse no navegador:
   `http://localhost:3000/`
3. Para parar os containers:
   ```bash
   docker compose down
   ```
