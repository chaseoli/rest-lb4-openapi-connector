# Example of how to simplify REST API calls via lb4

This application demonstrates how to create `datasource -> service (type provider) -> controller` as a proxy for an external API [calling a REST API](https://loopback.io/doc/en/lb4/Calling-rest-apis.html#add-a-controller) via [lb4 OpenApi Connector](https://loopback.io/doc/en/lb4/OpenAPI-connector.html) with [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html)

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```
