import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { join } from "path";
import { cwd } from "process";

export class ClientLambda extends Construct {
  handler: lambda.DockerImageFunction;

  constructor(
    scope: Construct,
    id: string,
    props: { env: "production" | "staging" },
  ) {
    super(scope, id);

    const ClientCode = new DockerImageAsset(this, "ClientImage", {
      directory: cwd(),
      file: join("apps", "earth", "Dockerfile"),
    });

    this.handler = new lambda.DockerImageFunction(this, "ClientHandler", {
      code: lambda.DockerImageCode.fromEcr(ClientCode.repository),
      environment: props,
    });
  }
}
