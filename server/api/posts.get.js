import { Client } from '@notionhq/client';

const notion = new Client({auth: process.env.NOTION_API_KEY});
const databaseId = process.env.NOTION_POSTS_DB_ID;


let payload = [];

async function getPosts() {
  const data = await notion.databases.query({database_id: databaseId});
  return data;
}


getPosts().then((data) => {
  debugger;
  payload = data.results
});


export default defineEventHandler(() => payload);
