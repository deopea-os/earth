import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class APIStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const api = new apigateway.RestApi(this, "earth-api", {
      restApiName: "Earth API",
      description: "API for Deopea/Earth",
    });

    const ssrHandler = new lambda.DockerImageFunction(this, "ClientHandler", {
      code: lambda.DockerImageCode.fromImageAsset(__dirname),
    });

    const ssrRoot = api.root.addResource("/ssr");
    ssrRoot.addMethod(
      "GET",
      new apigateway.LambdaIntegration(ssrHandler, { proxy: true }),
    );
  }
}
