import * as core from '@actions/core';
import { info } from '@actions/core';
import * as github from '@actions/github';

export default function run() {
  try {
    core.debug('测试数字1');
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    info(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    info(`The event payload: ${payload}`);
  } catch (error: any) {
    core.setFailed(error.message);
  }
}
