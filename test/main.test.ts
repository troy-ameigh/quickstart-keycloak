import '@aws-cdk/assert/jest';
import { App, Stack } from '@aws-cdk/core';
import { Demo } from '../src/main';

// match snapshot
test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'test');
  new Demo(stack, 'Demo');
  expect(app.synth().getStackArtifact(stack.artifactId).template).toMatchSnapshot();
});
