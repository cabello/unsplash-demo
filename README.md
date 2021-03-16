# unsplash-demo

To demonstrate issue https://github.com/unsplash/unsplash-js/issues/166

`yarn build` should yield the following output:

```
$ yarn build
yarn run v1.22.10
$ tsc
src/sample.ts:4:28 - error TS2345: Argument of type '{ accessKey: string; fetch: any; }' is not assignable to parameter of type '({ apiVersion?: string | undefined; fetch?: any; } & Pick<any, "cache" | "credentials" | "headers" | "integrity" | "keepalive" | "mode" | "redirect" | "referrer" | "referrerPolicy" | "signal" | "window"> & { ...; }) | ({ ...; } & ... 1 more ... & { ...; })'.
  Type '{ accessKey: string; fetch: any; }' is not assignable to type '{ apiVersion?: string | undefined; fetch?: any; } & Pick<any, "cache" | "credentials" | "headers" | "integrity" | "keepalive" | "mode" | "redirect" | "referrer" | "referrerPolicy" | "signal" | "window"> & { ...; }'.
    Type '{ accessKey: string; fetch: any; }' is missing the following properties from type 'Pick<any, "cache" | "credentials" | "headers" | "integrity" | "keepalive" | "mode" | "redirect" | "referrer" | "referrerPolicy" | "signal" | "window">': cache, credentials, headers, integrity, and 7 more.

4 const unsplash = createApi({
                             ~
5   accessKey: "some access key",
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
6   fetch,
  ~~~~~~~~
7 });
  ~


Found 1 error.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
