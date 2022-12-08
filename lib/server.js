/* Import axios */
import axios from "axios";

/* Import cron */
import * as cron from "cron";

/* Import and set .env */
import * as env from "dotenv";
env.config();

/* Import twitterClient.js */
import rwClient from "./twitterClient.js";

const readWrite = rwClient.readWrite;

const runJoke = async () => {
  const response = await axios(process.env.JOKE_API);
  const mainTweet = `❓ ${response.data[0].question} \n \n ✅ ${response.data[0].punchline}`;

  const user = await readWrite.v2.userByUsername("dev_adeyemi");
  await rwClient.v1.tweet(mainTweet);
  console.log(mainTweet);
};

const jobTime = new cron.CronJob("00 00 00 * * *", () => {
  runJoke();
});
jobTime.start();
