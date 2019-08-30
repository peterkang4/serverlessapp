## Prerequisites
- Make sure you have [NodeJS >= 8.10](https://nodejs.org/en/) installed.
- AWS CLI >= v1.16 (https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)
- Serverless Framework >= v1.5 
    - run the command `npm install -g serverless`
- Mocha Module: `npm install mocha`
- Chai Module: `npm install chai`
- Serverless Offline plugin: `npm install -D serverless-offline`
- Serverless Mocha plugin: `npm install serverless-mocha-plugin`
- Setup AWS IAM profile with proper permissions from Console or CLI
- AWS Configure IAM profile for CLI (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

## For the first time download and setup
- From the root of this project, run command: `npm install`

## Running Unit Tests
- From the command line, run command: `sls invoke test`

## Running your App locally
- From the command line, run command: `sls offline`
- Open browser or send GET request to:  http://localhost:3000/get

## Deploying your App
- Command line, first time: `sls deploy --stage ${env}`

## Removing your App
- Command line: `sls remove --stage ${env}`