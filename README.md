# DevOps with Docker: Exercises 3.1 & 3.2

## Exercise 3.1: Containerized Application Deployment

This part of the repository contains the containerized application created for Exercise 3.1. 

### Description

- The application is prepared as a Docker container.
- The goal was to build and run the container locally or on any Docker-compatible environment.
- The Dockerfile and related setup are included for building the container.

### How to run locally

1. Clone the repository.
2. Navigate to the application directory for this exercise.
3. Build the Docker image: `docker build -t your-app-name .`
4. Run the container exposing the relevant port: `docker run -p 3000:3000 your-app-name`
5. Access the app locally at `http://localhost:3000`.

---

## Exercise 3.2: Deployment Pipeline to a Cloud Service (Extension of Exercise 1.16)

This part extends Exercise 1.16 where a containerized app was initially deployed to Heroku.

- A GitHub Actions workflow pipeline is set up in `.github/workflows/deploy.yml`.
- The pipeline automatically builds and deploys the Dockerized app to Heroku on every push to the `main` branch.
- Heroku application URL:

[https://floating-sands-13705-f9e0633cfd98.herokuapp.com/](https://floating-sands-13705-f9e0633cfd98.herokuapp.com/)

### Pipeline behavior

- Triggers on every push to `main`.
- Builds the Docker image.
- Deploys the updated container to Heroku.

---

