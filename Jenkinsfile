pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    // first stage installs node dependencies and Cypress binary
    stage('build') {
      steps {
        // there a few default environment variables on Jenkins
        // on local Jenkins machine (assuming port 8080) see
        // http://localhost:8080/pipeline-syntax/globals#env
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        sh 'npm run cy:verify'
      }
    }

    stage('start local server') {
      steps {
        // start local server in the background
        // we will shut it down in "post" command block
        sh 'nohup npm start &'
      }
    }
  }

  post {
    // shutdown the server running in the background
    always {
      echo 'Stopping local server'
      sh 'pkill -f http-server'
    }
  }
}
