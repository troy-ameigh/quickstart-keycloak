import * as cdk from '@aws-cdk/core';
import * as kc from 'cdk-keycloak';


export class Demo extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: kc.KeyCloakProps ) {
    super(scope, id);

    new kc.KeyCloak(this, 'KeyCloak', {
      auroraServerless: true,
      ...props,
    });
  }
}

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();

const stack = new cdk.Stack(app, 'my-stack-dev', { env: devEnv });

const certificateArn = stack.node.tryGetContext('ACM_CERT_ARN');
if (certificateArn == undefined ) {
  throw new Error('ERROR - ACM_CERT_ARN not found');
}
new Demo(stack, 'Demo', {
  certificateArn,
});

app.synth();
