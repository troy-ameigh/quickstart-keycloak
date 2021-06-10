import * as cdk from '@aws-cdk/core';
import * as kc from 'cdk-keycloak';


export class Demo extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string ) {
    super(scope, id);

    const certificateArn = this.node.tryGetContext('ACM_CERT_ARN') ?? process.env.ACM_CERT_ARN;
    if (!certificateArn) {
      throw new Error('ERROR - ACM_CERT_ARN not found');
    }
    new kc.KeyCloak(this, 'KeyCloak', {
      auroraServerless: true,
      certificateArn,
    });
  }
}

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();

const stack = new cdk.Stack(app, 'my-stack-dev', { env: devEnv });


new Demo(stack, 'Demo');

app.synth();
