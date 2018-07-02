# Java web dev basics
### things we need to use
	* maven
	* web pack
	* thyme leaf/springboot
	* react
	* flyway (to manage Postgres)

### Maven
The following notes are based on this tutorial:
[Getting Started · Building Java Projects with Maven](https://spring.io/guides/gs/maven/)

Maven is used to build the project. It basically combines all of your java files into one program
The idea is that you lay out your file structure in a particular way, and then you can run `man compile` to compile all of your code, and `man package` to package all of it.
 All of the instructions for maven are kept in a file called `pom.xml`. This is also where the dependencies are kept.
You can test the program by listing `junit` as a dependancy, and running `mvn test` or running `mvn install`  which tests as one of its stages


### Webpack
The following notes are compiled from several pages of this website:
[webpack](https://webpack.js.org/)

Webpack is a program used to convert web modules with dependencies into single static assets. So for example, if you have 20 javascript files that depend on each other, Webpack will turn them into one single file

Basic setup:
Create directory, initialise nom, install webpack locally, then install webpack-cli, which is the tool used to run webpack from the command line

	* `mkdir webpack-demo && cd webpack-demo`
	* `npm init -y`
	* `npm install webpack webpack-cli --save-dev`

Then adjust the package.json to prevent accidental publication of our package, using `”private”:true`
If we wanted to run webpack immediately, we run `npx webpack`

You can also use configurations with webpack. For example, to run a configuration in a file called `webpack.config.js` you would run `npx webpack --config webpack.config.js`
This is an example configuration:
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

```

This basically defines the program that has dependencies (entry), and defines what the output files name should be, and where it is located

If you wanted webpack to run automatically during a node build, you can add the following line to `package.json` in the script category: `”build”: “webpack”`
