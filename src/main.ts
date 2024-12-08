import logger from "./applications/logging";
import web from "./applications/web";

const port = 3000;

web.listen(port, () => {
  logger.info(`App listening on port ${port}`);
});