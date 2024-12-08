import express from "express";

const app = express();
const createServer = () => {
  app.listen(3000, () => {
    console.log(`App listening on port ${3000}`);
  });
};

export default createServer;
