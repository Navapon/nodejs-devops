pipeline{
  agent any

  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '10'))
    disableConcurrentBuilds()
    disableResume()
  }

  parameters {
    choice(
      name: 'PROJECT_NAME',
      choices: ['hello1','hello2'],
      description: 'Select project'
    )

    choice(
      name: 'TARGET_ENVIRONMENT',
      choices: ['development', 'production'],
      description: 'Environment to deploy'
    )

    string(
      name: 'DOCKER_TAG',
      defaultValue: 'development-10',
      description: 'Environment to deploy'
    )
  }

  stages {

    stage('Docker Pull From repo') {
      steps {
          echo "Pulling Specific image ${params.PROJECT_NAME}:${params.TARGET_ENVIRONMENT}-BUILD_NUMBER"
      }
    }

    stage('Runing Container') {
      steps {
          sh """
            docker run -d -p 8000 ${params.PROJECT_NAME}:${params.DOCKER_TAG} -e NODE_ENV=${params.TARGET_ENVIRONMENT}
          """
      }
    }
  }
}
