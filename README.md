# Proyecta Web App
This repository contains the Proyecta Web App.

## Technologies in this repo:
* React 18.2.0
* Bootstrap 5.3.3
* Axios 1.7.2
* React Router DOM 6.23.1

## Docker Containers
#### Create the image
```sh
docker build -f Dockerfile.dev -t proyecta/app-react-dev --build-arg API_URL=http://localhost:5100 .
docker build -f Dockerfile.prod -t proyecta/app-react-prod --build-arg API_URL=http://localhost:5100 .
```

#### Run containers
```sh
docker run -d --name proyecta_app_react_dev -p 3100:5173 proyecta/app-react-dev
docker run -d --name proyecta_app_react_prod -p 3101:80 proyecta/app-react-prod
```