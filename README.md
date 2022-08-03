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
