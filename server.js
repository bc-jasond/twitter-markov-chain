const TwitterBot = require('markov-twitter-bot');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const options = {
    account: 'DailyMamet',
    /* Set these env variables
     consumer_key: process.env.TWITTER_CONSUMER_KEY,
     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
     */
  };
  const bot = new TwitterBot(options);
  bot.getTweets((tweets) => {
    bot.generateTweet((tweet) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.end(JSON.stringify({text: tweet}));
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});