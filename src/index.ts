import express from "express";
import bodyParser from "body-parser";
const port = 4000;
const app = express();
app.use(bodyParser());
// IMPORT

import { users } from "./database/user-data";
import { useRouter } from "./router/use-router";

/*      ^ ^ ^ ^ ^       */
/*      http://localhost:4000/     */

app.use("/users", useRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
