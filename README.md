# BotBattlr

A streamlined React application that lets you explore robots, recruit them to your crew, release them, or permanently delete them from the server.

## Setup

1. git clone this repository
2. npm install to install dependencies
3. Run the JSON server: npm run server (runs on port 8001)
4. In a separate terminal, launch the React app: npm run dev

Server endpoints:

* GET [http://localhost:8001/bots](http://localhost:8001/bots)
* DELETE [http://localhost:8001/bots/:id](http://localhost:8001/bots/:id)

## Core Features

* View the full roster of robots
* Click a robot to add it to *YourBotArmy* (Done only once)
* Click a recruited robot to release it
* Click the red x on a robot card to delete it from the server and UI

Notes: Basic styling is included in src/index.css.

## License

MIT License

Copyright (c) 2025 Collins Thuo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.