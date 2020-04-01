# twitter-demo
a demo twitter app using React, Apollo client, Redux


Build Docker Image
  - docker build -t twitter-demo:dev .
  
Run container
  - docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm twitter-demo:dev
