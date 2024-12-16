pipeline {
    agent any

    environment {
        DOCKER_IMAGE_SERVER = 'budget-server:latest'
        DOCKER_IMAGE_CLIENT = 'budget-client:latest'
        // DOCKER_REGISTRY = 'my-docker-repo' // Optional, if pushing to a Docker registry
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', 
                    url: 'https://github.com/sashacheek/budget-app.git'
                    // credentialsId: 'your-github-credentials-id'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE_SERVER}", "-f Dockerfile-server .")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    powershell 'if (docker ps -a --format "{{.Names}}" | Select-String -Pattern "budget-server") { docker rm -f budget-server }'
                    powershell "docker run -p 5000:5000 -d --name budget-server ${DOCKER_IMAGE_SERVER}"
                }
            }
        }

        // Optional: Push to Docker registry
        // stage('Push Docker Image') {
        //     steps {
        //         script {
        //             docker.withRegistry('https://index.docker.io/v1/', 'docker-credentials-id') {
        //                 docker.image("${DOCKER_IMAGE}").push()
        //             }
        //         }
        //     }
        // }
    }

    post {
        always {
            echo 'Pipeline completed!'
        }
    }
}
