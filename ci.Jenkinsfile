def dockerImage

pipeline{
  agent any

//   triggers {
//     pollSCM('* * * * *')
//   }
  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '10'))
    disableConcurrentBuilds()
    disableResume()
  }

  parameters {
    string(
      name: 'CICD_GIT_BRANCH',
      defaultValue: 'master',
      description: 'Branch to use when checking out the CICD repository from git'
    )

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
  }

  stages {

    stage('GitCheckout') {
      steps {
        script {
          checkout([$class: 'GitSCM',
                    branches: [[name: "${params.CICD_GIT_BRANCH}"]],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    gitTool: 'Default',
                    submoduleCfg: [],
                    userRemoteConfigs: [[credentialsId: 'github', url: 'https://github.com/Navapon/nodejs-devops.git']]
          ])
        }
      }
    }

    stage('SonarQube analysis') {
      steps {
          echo "using sonar for code analysis need to setup sonar.properties and instance."
        // withSonarQubeEnv('SONAR_SERVER') {
        //   sh "${scannerHome}/bin/sonar-scanner"
        // }
      }
    }

    stage('Testing') {
      steps {
          echo "Maybe install jest and using npm run test on this step"
      }
    }

    stage('Building Docker Image') {
      steps {
        script {
          dockerImage = docker.build("${params.PROJECT_NAME}:${params.TARGET_ENVIRONMENT}-${BUILD_NUMBER}","./app/${params.PROJECT_NAME}")
        }
      }
    }

    stage('Pushing Image') {
      steps {
          echo "This steps will be skiped it's should push image to your own repository or docker hub"
      }
    }
  }
}
