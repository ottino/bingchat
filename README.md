# API for Bing Chat
I am going to send a repository to GitHub, but I need it to be analyzed.
This API is a chat bot for querying Bing Chat with a Node.js app.
I am using the 'chatgpt-api' library from the 'transitive-bullshit' repository.

# How to install

1) Create a new project with Node.js and you need the following libreries:

| libreary | npm | 
| ------------- | ------------- | 
| dotenv | npm install dotenv | 
| express | npm install express | 
| BingChat | npm install bing-chat --save | 

2) Create a settings.env file and insert your BingChat cookie.

How to retrieve the cookie:

1. Log in to BingChat in your web browser
2. Press F12 (developer tools)
3. Navigate to the "Application" tab
4. Look for the "Cookies" option and copy the "_U" key

   ![image](https://github.com/ottino/bingchat/assets/1232084/e86916f1-6992-48bb-a474-248bc2cfdfcd)


Run on your terminal

```
  node app.js 
```

You see:

![image](https://github.com/ottino/bingchat/assets/1232084/cff1bc54-f0a4-4313-953a-a30fdeb67913)

# How to use

Put this URL in your browser:

http://localhost:3000/chat?phrase=XXXXX

XXXXX --> query


# Reference
https://github.com/transitive-bullshit/bing-chat/
