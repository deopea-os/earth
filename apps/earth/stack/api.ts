import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import { ClientLambda } from "./client.js";

interface APIStackProps {
  env: "production" | "staging";
}

export class APIStack extends Construct {
  constructor(scope: Construct, id: string, props: APIStackProps) {
    super(scope, id);

    const api = new apigateway.RestApi(this, "earth-api", {
      restApiName: "Earth API",
      description: "API for deopea/earth",
    });

    const client = new ClientLambda(this, "ClientLambda", props);
    api.root
      .addResource("ssr")
      .addMethod(
        "GET",
        new apigateway.LambdaIntegration(client.handler, { proxy: true }),
      );
  }
}
