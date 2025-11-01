# DevOps with Docker: Exercises 3.1 & 3.2

## Exercise 3.1: Cloud Deployment

This repository contains a containerized Node.js application deployed to Heroku using Docker.

**Live application:**  
[https://floating-sands-13705-f9e0633cfd98.herokuapp.com/](https://floating-sands-13705-f9e0633cfd98.herokuapp.com/)  

### How to run locally

1. Clone the repository:
    ```
    git clone https://github.com/your-username/devOpsWithDockerSubmission.git
    cd devOpsWithDockerSubmission/express-app
    ```
2. Build and run the Docker container:
    ```
    docker build -t hello-docker .
    docker run -p 3000:3000 hello-docker
    ```
3. Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Exercise 3.2: Deployment Pipeline (CI/CD)

A GitHub Actions workflow is set up to automatically deploy the app to Heroku on every push to the `main` branch, using Docker.

- The workflow file is located at: `.github/workflows/deploy.yml`
- Sensitive credentials and app settings are configured as GitHub repository secrets.

**Pipeline behavior:**  
- Each push to the `main` branch triggers a CI/CD pipeline.
- The pipeline builds the Docker image and redeploys the app to Heroku.

---
