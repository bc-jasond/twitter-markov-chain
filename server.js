const TwitterBot = require('./markov-twitter-bot');
const http = require('http');
const url = require('url');
const {promisify} = require('util');

const hostname = '127.0.0.1';
const port = 3000;
const defaultAccount = 'DailyMamet';
const tweetsCache = {};
const markovChainCache = {};


const server = http.createServer(async (req, res) => {
  const queryParams = url.parse(req.url, true).query;
  const account = queryParams.account ? queryParams.account : defaultAccount;
  const shouldUseCache = queryParams.cache !== '0'; // use 'cache=0' to disable cache
  const payload = {account};

  const bot = new TwitterBot({account});
  const getTweets = promisify(bot.getTweets).bind(bot);
  const generateTweet = promisify(bot.generateTweet).bind(bot);

  // every request is a success!
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // conditionally cache the generated tweet
  if (shouldUseCache && markovChainCache.hasOwnProperty(account)) {
    payload.text = markovChainCache[account];
    res.end(JSON.stringify(payload));
    return;
  }

  try {
    // always cache the source tweets
    if (tweetsCache.hasOwnProperty(account)) {
      bot.arrayOfTweets = tweetsCache[account];
    } else {
      bot.arrayOfTweets = tweetsCache[account] = await getTweets();
    }

    const tweet = await generateTweet();
    if (shouldUseCache) markovChainCache[account] = tweet;
    payload.text = tweet;
    res.end(JSON.stringify(payload));
  } catch (err) {
    res.end(JSON.stringify(err));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
