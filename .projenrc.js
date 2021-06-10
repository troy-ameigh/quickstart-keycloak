const { AwsCdkTypeScriptApp, DependenciesUpgradeMechanism } = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new AwsCdkTypeScriptApp({
  name: 'quickstart-keycloak',
  description: 'The quick start for KeyCloak on AWS',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  deps: ['cdk-keycloak'],
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log', 'dependabot.yml'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);


project.synth();
