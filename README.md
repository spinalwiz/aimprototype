# Aimprototype

## Built With:

- Angular 2 ( 2.x )
- ExpressJS ( 4.x - with compression )
- Webpack ( angular-cli )

## Install / Development

```bash
git clone https://github.com/spinalwiz/aimprototype
cd aimprototype

# Install dependencies
npm install

# start server
npm run start

# OR:

# Terminal 1:
ng serve --proxy-config proxy.conf.json

# Terminal 2:
npm run _server:run

# Client url: http://localhost:4200
# Application ( express ) API: http://localhost:4300
```

## Build / Production

```bash

npm run build

## Deploy dist folder to app server

## Then:

node ./src/server/app.js

Structure of dist folder:

/dist/server <-- expressjs
/dist/client <-- angular2

```
