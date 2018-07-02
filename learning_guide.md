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



