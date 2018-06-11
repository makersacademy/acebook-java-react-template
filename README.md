## Acebook

This is a java/springboot project to be developed on.

It uses:
  - `maven` to build the project
  - `webpack` to bundle the javacript
  - `thymeleaf` to serve `index.html`
  - `react` to make requests to the api and render the component views
  - `flyway` to manage db migrations

### QuickStart Instructions

- Fork and clone this repository to your machine
- Use an IDE, like `intellij`, and select the project directory to load into the editor (make sure you set the source folder in the project settings)
- From the command line create a dev database `createdb acebook_springboot_development`
- run the main application
- visit `localhost:8080`

- Temporarily, of you want to add some posts you can use `curl` to post data to the API and then refresh the page.
```
curl -X POST "localhost:8080/api/posts" -d "{\"content\": \"Hi, Folks!\"}" -H "Content-Type: application/json"
```

(At some point a form would be implemented sends data to the API)

### Deployment

- https://springboot-react-template.herokuapp.com/
- Set the right profile in your properties file eg: `spring.profiles.active=dev`

### To Do

- Add in your card wall
- Document more setup instructions if needed
- Document behaviour of your application
- Document how to run tests
