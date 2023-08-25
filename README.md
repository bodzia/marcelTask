# marcelTask

steps that needs to be completed before running the tests:
1/ Download node.js
2/ Clone the repository
3/ run npm install command through terminal
4/ run npm install --global mocha  
5/ run npm install chai
6/ run npm install -g mochawesome mochawesome-report-generator

After those steps are completed, the tests can be run from terminal with the following commands:

npx mocha --spec TC1.js --reporter mochawesome 
npx mocha --spec TC2.js --reporter mochawesome 

Test report will be generated under test folder/mochawesome-report.
