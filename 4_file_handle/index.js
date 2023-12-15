import { dirname, join } from "node:path";
import { readFile } from "node:fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname, "my.txt"), "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
