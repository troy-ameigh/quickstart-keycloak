
## KeyCloak on AWS QuickStart

This is a qiuck start project for the reference architecture that leverages [cdk-keycloak](https://github.com/aws-samples/cdk-keycloak) AWS CDK construct library to help you build and deploy [KeyCloak](https://www.keycloak.org/) on AWS.

## Architecture

![](https://raw.githubusercontent.com/aws-samples/keycloak-on-aws/master/assets/01-keycloak-on-aws-architecture.svg)


## AWS CDK Sample

To deploy it with CDK in a new VPC

```sh
npx cdk deploy -c ACM_CERT_ARN=<YOUR_ACM_CERTIFICATE_ARN>
```

To deploy in the default VPC:

```sh
npx cdk deploy -c ACM_CERT_ARN=<YOUR_ACM_CERTIFICATE_ARN> \
-c use_default_vpc=1
```

To deploy in any existing VPC:

```sh
npx cdk deploy -c ACM_CERT_ARN=<YOUR_ACM_CERTIFICATE_ARN> \
-c use_vpc_id=vpc-xxxxxx
```

## Customize

The `cdk-keycloak` construct library comes with multiple construct properties that allow you customize your KeyCloak workload. Check the [API document](https://github.com/aws-samples/cdk-keycloak/blob/main/API.md) for more details or checkout more samples in the [README](https://github.com/aws-samples/cdk-keycloak). You may modify the `src/main.ts` to customize your CDK application followed by `cdk diff` or `cdk deploy` to verify or deploy your custom workload.


## Python Support

This quick start comes with the AWS CDK application in TypeScript. However, as `cdk-keycloak` support `TypeScript` and `Python`, you are allowed to deploy it in Python.

```py
from cdk_keycloak import KeyCloak

app = cdk.App()

env = {
    "region": process.env.CDK_DEFAULT_REGION,
    "account": process.env.CDK_DEFAULT_ACCOUNT
}

stack = cdk.Stack(app, "keycloak-demo", env=env)
KeyCloak(stack, "KeyCloak",
    certificate_arn="arn:aws:acm:us-east-1:123456789012:certificate/293cf875-ca98-4c2e-a797-e1cf6df2553c"
)

```



Read more details in [cdk-keycloak](https://pypi.org/project/cdk-keycloak) from PyPi.


## HOWTO

For architectural details, step-by-step instructions, and customization options, see the [deployment guide](https://aws-quickstart.github.io/quickstart-keycloak/).

To post feedback, submit feature ideas, or report bugs, use the **Issues** section of this GitHub repo. 

To submit code for this Quick Start, see the [AWS Quick Start Contributor's Kit](https://aws-quickstart.github.io/).
