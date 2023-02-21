import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { APIStack } from "./api.js";

export class EarthStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    new APIStack(this, "EarthAPI-staging", { env: "staging" });
    new APIStack(this, "EarthAPI-production", { env: "production" });
  }
}
