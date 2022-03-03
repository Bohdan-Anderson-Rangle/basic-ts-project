# node + module + TS Example #
In this repo we are using ES2020 (ES6) modules because execa is a pure ESM package [more info here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

This repo has a run command that can be executed with:

    ./run

This runs a version of node that works with modules.

The package is flaged with *"type": "module"*

The tsconfig.json is also setup for es2020, was takend from [here](https://stackoverflow.com/questions/61305578/what-typescript-configuration-produces-output-closest-to-node-js-14-capabilities) 

The setup of the executable file was taken from [here](https://stackoverflow.com/questions/33509816/what-exactly-does-usr-bin-env-node-do-at-the-beginning-of-node-files)

## Install & Run ##
Install the dependencies:

    npm i

This will build and run index.ts

    npm run build

