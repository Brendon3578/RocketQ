<h1 align="center">
    <img src=".github/rocketq.png">
</h1>

<p align="center">
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-como-inicializar-o-projeto">Inicialização</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-layout">Layout</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-features">Features extras</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-licença">Licença</a>
</p>

<p align="center">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
</p>

<p align="center">
    <kbd>
        <img src=".github/Rocket_Q.png" style="border-radius: 5px" alt="Rocket.q">
    </kbd>
</p>

## 🛠 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- [NodeJS](https://nodejs.org/en/)
- [EJS](https://ejs.co/)
- [Express](https://expressjs.com/pt-br/)
- [SQLite](https://www.npmjs.com/package/sqlite3)

Utilitários

- [Beekeeper Studio](https://www.beekeeperstudio.io/) *(Não necessário a instalação, apenas para a visualização dos dados no Banco de Dados)*
- [StorySet](https://storyset.com/) *(apenas para a página de error 404)*
- [Google Fonts](https://fonts.google.com/)
- [ClipboardJS](https://clipboardjs.com/)

## 💻 Projeto

O Rocket.Q é uma aplicação de interação através de perguntas, sendo possível criar uma sala para internautas anônimos fazerem perguntas e o criador da sala em posse de uma senha gerenciar essas perguntas e marcar como lidas. Criado durante **Next Level Week 6** dentro da trilha *Discover*.

## 🗂 Como inicializar o projeto

```bash

    # Clonar o repositório
    $ git clone https://github.com/Brendon3578/RocketQ

    # Entrar no diretório
    $ cd rocketmusic

    # Criar o banco de dados (executar apenas uma vez)
    $ npm run init-db

    # Iniciar a aplicação em http://localhost:3000
    $ npm start

```

*É possível deletar o banco de dados também, que está em `./src/db/rocketq.sqlite`*

## 📷 Layout

O layout da aplicação está disponível no Figma:

[<img src="https://img.shields.io/badge/Acessar%20layout-Figma-blue">](https://www.figma.com/file/vp3iFfd1ohCbHyDX9jCiQi/Roquet.q)

## ☕ Features extras

Funcionalidades extras implementadas na aplicação.

- [x] Página de Erro 404 quando a rota da url não for encontrada
- [x] Verificar se a sala existe no Banco de Dados
- [X] Verificar se a senha para gerenciar a pergunta está correta
- [x] Funcionalidade de copiar texto quando apertar o Botão de copiar

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](.github/LICENSE.md) para mais detalhes.

---

<h3 align="center">
    Feito com ☕ por <a href="https://github.com/Brendon3578">Brendon Gomes</a>
</h3>