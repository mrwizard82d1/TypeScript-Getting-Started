# TypeScript-Getting-Started

This is the official repository for my Pluralsight course titled [*TypeScript: Getting Started*](https://app.pluralsight.com/library/courses/typescript-getting-started/table-of-contents). 
The *main* branch contains code as it 
exists at the start of the course. There are separate branches named after the modules in the course that contain the code as it 
exists at the end of that module.

I will update this repo below with any problems or small issues reported between updates to the actual course.

Thanks for watching and good luck on your TypeScript projects!

## Known issues

I encountered a number of difficulties trying to follow along with this project. It was built against, apparently, 
Node 14, and uses older versions of

- webpack
- webpack-cli
- @webpack-cli/serve (webpack server)

When I first installed the projects with `npm`, `npm audit` reported a number of issues. I fixed them by running the
command, `npm audit fix --force`. This repair needed to install a breaking change to `webpack` to which I agreed. 
However, when I executed `npm start` which invoked `webpack serve`, I encountered an error that I was unclear how to
repair. I eventually returned all packages back to the original, older configuration.

This reversion allowed move farther; however, when I next got to the point of running `npm start` and, therefore,
`webpack serve`, `Node` reported the error: "Error: error:0308010C:digital envelope routines::unsupported". I had seen
this error previously trying to run another older project. Apparently, Node 17 made a change in its OpenSSL provider.

I tried the fix that I had discovered earlier, changing the command invoked by `npm start` from `webpack serve` to
`webpack --openssl-legacy-provider serve`; however, this older version of `webpack` **does not** support this option.

I worked around the inability to specify the `--openssl-legacy-provider` by specifying the option on the command line
and running the command from a `bash` shell: `export NODE_OPTIONS=--openssl-legacy-provider && npm start`. This option
allows me to run `npm start` without error. Even better, the code changes actually have the intended effect.

I would prefer not to encounter more of these kinds of version errors. I've been able to solve most of them so far, but 
they do not really help me to learn. I plan to prototype reinitializing the project with the specified packages.

- "ts-loader": "8.0.17",
- "typescript": "4.2.2",
- "webpack": "5.22.0",
- "webpack-cli": "4.5.0",
- "webpack-dev-server": "3.11.2"

Note that the versions are the original versions from the (out-of-date) `package.json`.

To perform this update, I removed all the dependencies from `package.json` and deleted the both the `node_modules`
directory and `package-lock.json. (I think I will also use `yarn`) instead of `npm`.

Of course, it is not quite that simple. The `webpack.config.js` specifies options that are no longer valid. 
Specifically, `webpack` reported the following error:

> Invalid options object. Dev Server has been initialized using an options object that does not match the API 
> schema.
> options has an unknown property 'inline'. These properties are valid:
```
object { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?,
         historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?,
         onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?,
         proxy?, server?, setupExitSignals?, setupMiddlewares?, static?,
         watchFiles?, webSocketServer? }
```

To repair this issue, I copied the sample `webpack.config.js` from
[the webpack website page for TypeScript](https://webpack.js.org/guides/typescript/) and then changed the `entry` value
to `./app/app.ts` to conform to the data in the original `webpack.config.js`. 
