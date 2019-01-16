Steps are necessary to get the application up and running:
Preparing environment

Install Node:

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```
```bash
sudo apt-get install -y nodejs
```

Verifing if node version is 10.x

```bash
node -v
```

In the work directory, download dependencies:


```bash
npm install
```

So every time you need to start the app, run:


```bash
npm start
```

Application started on http://localhost:4200
