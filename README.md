# nextjs-from-client-server-action-repro

### Verify canary release

- [x] I verified that the issue exists in the latest Next.js canary release

### Provide environment information

```bash
    Operating System:
      Platform: darwin
      Arch: arm64
      Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:39:46 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T6020
    Binaries:
      Node: 16.19.1
      npm: 8.19.3
      Yarn: 1.22.19
      pnpm: 7.32.0
    Relevant packages:
      next: 13.4.2
      eslint-config-next: N/A
      react: 18.2.0
      react-dom: 18.2.0
      typescript: N/A
```


### Which area(s) of Next.js are affected? (leave empty if unsure)

_No response_

### Link to the code that reproduces this issue

https://github.com/ahabhgk/nextjs-from-client-server-action-repro

### To Reproduce

`npm run dev` and open localhost:3000, click the `add` button

### Describe the Bug

after you click the `add` button there should have some logs in your terminal

```shell
In RootLayout: 0
In add: 2
In RootLayout: 0 # <--- should be 2
```

### Expected Behavior

the second `In RootLayout: 0` should be `In RootLayout: 2`, since `add` change the serverState to 2 and after refresh, the serverState is 2 when rendering RootLayout

It seems there is two `_serverState.js` in the output, one is `"(sc_server)/./app/_serverState.js"`, and the other one is `"(sc_action)/./app/_serverState.js"`, which lead the inconsistent

### Which browser are you using? (if relevant)

_No response_

### How are you deploying your application? (if relevant)

_No response_
