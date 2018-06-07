FROM openjdk:8-jdk-alpine
LABEL maintainer="georgesykes86@gmail.com"
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/acebook-template-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} acebook-blunicorn.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/acebook-blunicorn.jar"]