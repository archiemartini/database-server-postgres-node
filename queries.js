import { Pool } from "pg";

const pool = new Pool({
  user: 'archiemartin',
  host: 'localhost',
  database: 'database_server_test',
  port: 5432
})