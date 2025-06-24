# mysqlInteractor
MysqlInteractor is simple MCP server that works with any host with MCP client(ex: claude desktop). It allow direct interaction with any database in mysql servers.

## Claude desktop integration ##
Add this to your claude_desktop_config.json (File->settings->Developer->Claude settings -> configure):

```json
  "mysql-interactor": {
      "command": "node",
      "args": [
        "path\\to\\mysqlInteractor\\dist\\index.js"
      ]
    }
```

## Usage ## 
```text
Give me the number of flights by departure airport in flights booking database
```

## Result ##
![image](https://github.com/user-attachments/assets/c363caf3-eaba-45ac-a54a-135da16c3209)
