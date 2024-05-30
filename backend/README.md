<div align="center">
  <img src="https://cdn-icons-png.freepik.com/512/3982/3982361.png" alt="Logo" width="256" height="256">
  <h1 align="center">Notes backend</h1>
</div>

## Swagger/Open API
<img src="https://i.imgur.com/SxGVYVi.png" alt="Swagger/Open API documentation">

## Description

Welcome to the Notes API Repository! This repository provides a comprehensive overview of the backend services for our simple notes API. Developed using NestJS, this API allows users to perform CRUD operations on notes and tags. Each note can be associated with multiple tags, providing flexibility and organization to your note-taking experience.

## Documentation:
- To access the Swagger documentation, open: `http://localhost:3000/api`

## Environments:
The development environments are predefined to work as-is. However, if you want to use them in production, simply create an `.env` file containing the information shown in `.env.development`. The backend itself will recognize the existence of this file and will prioritize it.

## Requirements for runtimes, engines, tools
- **Node v20.11.1**: This project was built using this version of node. However, it may still be compatible with some minor versions.
- **NPM v10.5.0**: Node Package Manager for node dependencies
- **Docker version 26.1.0**: Used for the PostgreSQL database.

## Extra tools suggestions
- **NVM:** Instead of installing node directly on your computer, it is a better idea to install the node version manager (nvm) to dynamically switch between different versions of node.
- **WebStorm IDE:** I prefer Webstorm (from JetBrains) over vscode because the indexer is superior and recognizes autoimports and references better. Also, the refactoring tools are faster and more efficient than those provided by vscode.


## Installation

```bash
## install node dependencies
$ npm install
```

## Docker

```bash
# start databases for services
$ docker compose up -d
```

## Run services
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Built With
- NestJS
- TypeORM
- Postgres (with Docker)
- Open API (Swagger)

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat:Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact
Aleiva - [@aleiva17](https://github.com/aleiva17) - aleiva1700@gmail.com