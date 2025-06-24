import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import mysql from 'mysql2/promise';
import z from "zod";
//Create a server
const server = new McpServer({
    name: "mysql-interactor",
    version: "1.0",
    capabilities: {
        resources: {},
        tools: {}
    },
});
//Register tools
server.tool("run-query", "Execute any query on a MySQL database. It accepts a database as db and a query. The result is directly returned. The result might need formatting.", {
    db: z.string().describe("The name of the MySQL database"),
    query: z.string().describe("The SQL query to execute"),
}, async ({ db, query }) => {
    try {
        // connection to database. put your creds here
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: db
        });
        // query execution and results
        const [rows] = await connection.query(query);
        return {
            content: [
                {
                    type: "text", // You must return 'text', not 'json' in this context
                    text: JSON.stringify(rows, null, 2),
                }
            ]
        };
    }
    catch (err) {
        return {
            content: [
                {
                    type: "text",
                    text: "Error: " + (err.message || String(err)),
                }
            ]
        };
    }
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
