import { createApi } from "unsplash-js";
import fetch = require("node-fetch");

const unsplash = createApi({
  accessKey: "some access key",
  fetch,
});

export default unsplash;
