# Vitest typecheck error with JetBrains IDEs

This repo is a minimal reproduction of an error I encountered while
using [Vitest's typecheck feature](https://vitest.dev/guide/testing-types.html).

## Steps to reproduce

1. Clone this repo.
2. Open the project in a JetBrains IDE (I tested with WebStorm).
3. Install dependencies with `npm install`.
4. In the JetBrains IDE, run the **All Tests** Vitest configuration.

The above will return the following error:

```
WARN - IDE integration: files is not iterable
TypeError: files is not iterable
    at buildTreeAndProcessTests (/Users/micah/Applications/WebStorm.app/Contents/plugins/javascript-plugin/helpers/vitest-intellij/vitest-intellij-reporter.js:83:22)
    at IntellijReporter.<anonymous> (/Users/micah/Applications/WebStorm.app/Contents/plugins/javascript-plugin/helpers/vitest-intellij/vitest-intellij-reporter.js:77:3)
    at IntellijReporter.onCollected (/Users/micah/Applications/WebStorm.app/Contents/plugins/javascript-plugin/helpers/base-test-reporter/intellij-util.js:82:17)
    at file:///Users/micah/dev/vitest-typecheck-jetbrains-error/node_modules/vitest/dist/vendor/cli-api.CTkP2Ier.js:15311:51
    at Array.map (<anonymous>)
    at Vitest.report (file:///Users/micah/dev/vitest-typecheck-jetbrains-error/node_modules/vitest/dist/vendor/cli-api.CTkP2Ier.js:15309:38)
    at Typechecker._onParseStart (file:///Users/micah/dev/vitest-typecheck-jetbrains-error/node_modules/vitest/dist/vendor/cli-api.CTkP2Ier.js:9002:17)
    at Typechecker.start (file:///Users/micah/dev/vitest-typecheck-jetbrains-error/node_modules/vitest/dist/vendor/index.CuuL9y4g.js:989:60)
    at startTypechecker (file:///Users/micah/dev/vitest-typecheck-jetbrains-error/node_modules/vitest/dist/vendor/cli-api.CTkP2Ier.js:9029:19)
node:internal/errors:496
    ErrorCaptureStackTrace(err);
    ^

Error: spawn tsc ENOENT
    at ChildProcess._handle.onexit (node:internal/child_process:284:19)
    at onErrorNT (node:internal/child_process:477:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'spawn tsc',
  path: 'tsc',
  spawnargs: [
    '--noEmit',
    '--pretty',
    'false',
    '-p',
    '/Users/micah/dev/vitest-typecheck-jetbrains-error/tsconfig.vitest-temp.json',
    '--watch'
  ]
}
```

## Notes

- The IntelliJ configuration only uses default settings.
- The issue occurs with both Vitest v1 and v2.
- No errors or warnings are emitted when running the tests from the command line
  with `npm test` or `npm run test`.
- The issue does not occur if `test.typecheck.enabled` is unset or set
  to `false` in the `vitest.config.ts` file.

## Environment

- macOS 14.1.2
- Node.js v18.20.3
