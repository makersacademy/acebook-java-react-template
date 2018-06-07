# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
LABEL maintainer="williampowell92@gmail.com"

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8080 available to the world outside this container
EXPOSE 8080

# The application's jar file
ARG JAR_FILE=target/acebook-template-1.0-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} acebook-template.jar

# Run the jar file
CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/acebook-template.jar"]
