import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { join } from "path";
import { fileURLToPath } from "url";

export const ClientCode = lambda.DockerImageCode.fromImageAsset(
  join(fileURLToPath(import.meta.url), "..", ".."),
);

export class ClientLambda extends Construct {
  handler: lambda.DockerImageFunction;

  constructor(
    scope: Construct,
    id: string,
    props: { env: "production" | "staging" },
  ) {
    super(scope, id);
    this.handler = new lambda.DockerImageFunction(this, "ClientHandler", {
      code: ClientCode,
      environment: props,
    });
  }
}
