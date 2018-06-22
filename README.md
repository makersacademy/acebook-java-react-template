## Acebook

This is a java/springboot and react project to be developed on.

It uses:
  - `maven` to build the project
  - `webpack` to bundle the javascript
  - `thymeleaf` to serve `index.html`
  - `react` to make requests to the api and render the component views
  - `flyway` to manage `postgres` db migrations

### Card wall

REPLACE THIS TEXT WITH A LINK TO YOUR CARD WALL

### Design

This app has a somewhat typical API structure: in this case a springboot API serving data which a react frontend consumes.

**IMPORTANT:** Test your understanding by diagramming the request/response cycles that occur when you load the app by visiting `localhost:8080`

### Learning Plan

This project will ultimately be really rewarding if you follow these three points:
  1. **Work as a team.** Don't be tempted to split up to learn solo. At the very least pair on learning, and share knowledge as a team.
  2. As a team, **plan your learning**. There's a ton of new things in this project, purposefully so. That's ok. As always with everything, **take it slowly & in small steps**: ask a coach if you want more ideas how to plan your team learning.
  3. As an individual, **plan your learning**. Use `Diode` to keep yourself focused on setting and achieving your learning goals.

### QuickStart Instructions

- Fork and clone this repository to your machine
- Use an IDE, like `intellij`, and select the project directory to load into the editor (you may need to set the source folder in the project settings)
- From the command line create a dev database `createdb acebook_springboot_development`
- run the main application
- visit `localhost:8080`

- Temporarily, if you want to add some posts you can use `curl` to post data to the API and then refresh the page.
```
curl -X POST "localhost:8080/api/posts" -d "{\"content\": \"Hi, Folks!\"}" -H "Content-Type: application/json"
```

(At some point a form would be implemented sends data to the API)

### Database

Flyway is being used to manage your database migrations. Use the flyway docs to become familiar how to migrate your data.

### Deployment

- the template is currently hosted on heroku at https://springboot-react-template.herokuapp.com/
- Remember to set the right profile in your `application.properties` file eg: `spring.profiles.active=dev` for when you want to use your dev environment, and when you want to use your prod environment.

### CI

- to be configured
