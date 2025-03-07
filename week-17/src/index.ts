
import { Client } from 'pg'

const pgclient = new Client("postgresql://postgresSql_owner:npg_GegfsJc8h4Rw@ep-wispy-lab-a5ag46my-pooler.us-east-2.aws.neon.tech/postgresSql?sslmode=require");

async function main() {
   await pgclient.connect();
   // const result = await pgclient.query("UPDATE users SET username='DonaldTrumph' WHERE ID = 3")
   const result = await pgclient.query("SELECT * FROM users")
   console.log(result.rows)
}

main();