pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'rm -f -r gdg-astra-api'
                sh 'git clone https://github.com/knizhnikov/gdg-astra-api.git -b master'
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'forever stopall'
                sh 'rm -f -r /var/www/gdg-astra-api/*'
                sh 'pwd'
                sh 'ls'
                sh 'cp /var/lib/jenkins/workspace/gdg-astra-api_master/* /var/www/gdg-astra-api -r'
                sh 'BUILD_ID=dontKillMe forever start /var/www/gdg-astra-api/development.json &'
                sh 'forever list'
            }
        }
    }
}