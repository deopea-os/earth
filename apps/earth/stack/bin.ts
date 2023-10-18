#!/usr/bin/env ts-node

import * as cdk from "aws-cdk-lib";
import { EarthStack } from "./earth-stack.js";

const app = new cdk.App();

new EarthStack(app, "EarthStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
