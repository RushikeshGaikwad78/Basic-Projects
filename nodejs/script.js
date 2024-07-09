const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Page</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }
  
          .login-container {
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              padding: 20px;
              width: 300px;
              text-align: center;
          }
  
          .login-container h2 {
              margin-bottom: 20px;
              color: #333;
          }
  
          .login-form {
              display: flex;
              flex-direction: column;
          }
  
          .form-group {
              margin-bottom: 15px;
          }
  
          .form-group label {
              display: block;
              margin-bottom: 5px;
              color: #555;
          }
  
          .form-group input {
              width: 100%;
              padding: 8px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 4px;
          }
  
          .form-group button {
              background-color: #3498db;
              color: #fff;
              padding: 10px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
          }
  
          .form-group button:hover {
              background-color: #2980b9;
          }
      </style>
  </head>
  <body>
  
  <div class="login-container">
      <h2>Login</h2>
      <form class="login-form">
          <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required>
          </div>
          <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required>
          </div>
          <div class="form-group">
              <button type="submit">Login</button>
          </div>
      </form>
  </div>
  
  </body>
  </html>
  `);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});