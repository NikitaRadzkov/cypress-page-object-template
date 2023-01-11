pipeline {
   agent { docker { image 'cypress/base:16.16.0' } }
   stages {
      stage('Clear test reports'){
         steps {
            sh(""" rm -rf "cypress/results/*" """)
         }
      }
      stage('e2e-tests'){
         parallel {
            stage('chrome') {
               steps {
                  sh 'npm run test'
               }
               post {
                  always {
                     sh 'tar -czvf cypress-chrome.tar.gz cypress/results'
                     archiveArtifacts 'cypress-chrome.tar.gz'
                     emailext attachmentsPattern: '**/cypress-chrome.tar.gz', body: '$DEFAULT_CONTENT', recipientProviders: [requestor()], subject: "Chrome tests", to: "email@example.com"
                  }
               }
            }
         }
      }
   }
}
