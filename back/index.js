const app = require("./scr/server");
const dbConnect = require("../back/scr/config/dnConect");

dbConnect()
  .then((res) => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error to conect Data Base", err);
  });
