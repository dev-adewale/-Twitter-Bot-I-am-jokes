/* Import twitter sdk */
import { TwitterApi } from "twitter-api-v2";

/* Import and set .env */
import * as env from "dotenv";
env.config();

const twClient = new TwitterApi({
  appKey: process.env.app_Key,
  appSecret: process.env.app_Secret,
  accessToken: process.env.access_Token,
  accessSecret: process.env.access_Secret,
});

export default twClient