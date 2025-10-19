### Follow the step

```
https://github.com/prajapati-satyam/prajapati-satyam-simple-mail-send-using-queue-RabbitMq-.git
```

```
cd prajapati-satyam-simple-mail-send-using-queue-RabbitMq-
```


```
npm i
```


```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4-management
```

### Open Terminal in same dir

```
node index.js
```

### Open Terminal in same dir
#### Running worker
```
node worker.js
```

#### don't forget to make .env file and pass your credentials

#### Now go to Browser
```
localhost:3000
```