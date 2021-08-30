## Acebook

This is a java/springboot project to be developed on.

It uses:
  - `maven` to build the project
  - `thymeleaf` for templating
  - `flyway` to manage `postgres` db migrations
  - `selenium` for feature testing
  - `faker` to generate fake names for testing
  - `junit4` for unit testing

### Existing features

This app already has a few basic features
* A user can sign up
* A signed up user can sign in and out
# A signed in user can make posts

### Design

This app uses a structure that is similar to Bookmark Manager. The biggest difference is that here, the repository 
pattern is used. The repository pattern separates the business logic of models from the responsibility of 
connecting to the database and making queries. Take a look in the `src/main/java/repository` and you'll find 
`PostRepository` which generates and executes queries to CRUD posts.

### Learning Plan

This project will ultimately be really rewarding if you follow these three points:
  1. **Work as a team.**  It's OK to spend some time learning solo but make sure it's time-boxed, carefully scoped 
     and share everything that you learn, even the dead ends, with your team in a show and tell session.
  2. As a team, **plan your learning**. There's a ton of new things in this project, purposefully so. That's ok. As always with everything, **take it slowly & in small steps**: ask a coach if you want more ideas how to plan your team learning.
  3. As an individual, **plan your learning**. What do you personally want to achieve? How will you structure your time?

#### Initial learning goals

You don't need an in-depth knowledge of each dependency listed above. Once you can tick off these learning goals,
you're ready to dive in.  It's assumed that you can already TDD the Takeaway Challenge, or something of similar
complexity, in Java. It's OK if you need to pause here with Acebook and learn how to do that now :)

##### Maven
- [ ] I can explain what pom.xml is for
- [ ] I can start the app using Maven

##### Thymeleaf
- [ ] I can explain the code in `posts/index.html`
- [ ] I can create  a new template for editing a post

##### Flyway
- [ ] I can explain what a migration is
- [ ] I can explain the code in the two migration files in this directory `/db/migration/`

##### Selenium
- [ ] I can explain the code in `SignUpTest.java`
- [ ] I can write a new feature test for unsuccessful sign up

##### Faker
- [ ] I can explain what Faker does
- [ ] I can explain why it's useful

##### JUnit4
- [ ] I can explain the code in `PostTest.java`
- [ ] I could add more test cases to `PostTest.java`

##### The repository pattern
- [ ] I can explain the repository pattern

##### SpringBoot
- [ ] I can diagram how this SpringBoot application handles `GET "/posts"`

##### Spring Security
- [ ] I can explain how this app is secured

#### Resources

* [Some great videos on Spring Security](https://www.youtube.com/watch?v=sm-8qfMWEV8&list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE).  Don't watch them all, but do watch the first couple if you want an overview.
* [A video tour of the application by Eddie]()

### QuickStart Instructions

- Fork and clone this repository to your machine
- Use an IDE, like `intellij`, and select the project directory to load into the editor (you may need to set the source folder in the project settings)
- From the command line create a dev database `createdb acebook_springboot_development`
- Install Maven `brew install maven`
- Build the app and start the server, using the Maven command `mvn spring-boot:run`
  > TIP: You can also run the app from within InteliJ by clicking on the green ▶️ button.
- Visit `http://localhost:8080/users/new` to sign up

### Running the tests

- Make sure chromedriver is installed
- Start the server in a terminal session `mvn spring-boot:run`
- Start a new terminal session, navigate to the Acebook directory and then do `mvn test` to run both feature tests and unit tests
