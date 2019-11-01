const Deact = require("./libs/deact")

render(
    create("header", [
        create("h1", "This is Halloween ~~"),
        create("nav", "nav nav nav")
    ]),
    document.querySelector(".app")
  );