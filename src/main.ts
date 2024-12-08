import createServer from "./Infrastructures/http/createServer";

const port = 3000;

createServer.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
