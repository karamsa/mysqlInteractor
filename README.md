# mysqlInteractor
MysqlInteractor is simple MCP server that works with any host with MCP client(ex: claude desktop). It allow direct interaction with any database in mysql servers.

## update  mysql credentials ##

In index.ts put your host, user and password in :

```js
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: db
    });
```
then run :

```text
    npm run build
```

## Claude desktop integration ##
Add this to your claude_desktop_config.json (File->settings->Developer->Claude settings -> configure):

```json
  "mysql-interactor": {
      "command": "node",
      "args": [
        "path\\to\\mysqlInteractor\\build\\index.js"
      ]
    }
```

## Usage ## 
```text
Give me the number of flights by departure airport in flights booking database
```

## Result ##
![image](https://github.com/user-attachments/assets/32ff18f8-8838-49f3-b568-5f86a9856feb)

