import { App, Stack } from "aws-cdk-lib";
import { Artifact } from "aws-cdk-lib/aws-codepipeline";
import { LambdaInvokeAction } from "aws-cdk-lib/aws-codepipeline-actions";
import { Function } from "aws-cdk-lib/aws-lambda";

const app = new App();
const stack = new Stack(app, "sample");

declare const fn: Function;
const sourceOutput = new Artifact();
const buildOutput = new Artifact();
const lambdaAction = new LambdaInvokeAction({
  actionName: "Lambda",
  inputs: [sourceOutput, buildOutput],
  outputs: [new Artifact("Out1"), new Artifact("Out2")],
  lambda: fn,
});
