# Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript

This is a simple API that saves contact information of people. 


## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/),[Compose](https://www.compose.com/compare/mongodb), [Azure](https://azure.microsoft.com/en-us/)

After that, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*

## Clone this repository

```
git clone https://github.com/OlteanuRadu/rest-api-node-typescript.git
```

Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

## Testing

The default URL is: *https://localhost:3000*

The key and cert in the config folder is for testing purpose only. You should generate your own.