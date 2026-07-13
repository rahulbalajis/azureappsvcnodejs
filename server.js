const http = require('http');

const port = process.env.PORT || 8080;

const homePage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Azure App Service Node.js</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: Arial, sans-serif;
        color: #17202a;
        background: #f4f7fb;
      }

      main {
        width: min(680px, calc(100% - 32px));
        padding: 32px;
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0 12px 32px rgba(23, 32, 42, 0.12);
      }

      h1 {
        margin: 0 0 12px;
        font-size: 32px;
      }

      p {
        margin: 0;
        font-size: 18px;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello from Node.js on Azure App Service</h1>
      <p>This basic Node.js web app is ready to run on Azure App Service for Linux.</p>
      <p>Hi this is Rahul.</p>
      <p>We have Introducing New Features ion our website</p>
    </main>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(homePage);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
