const Deact = require("./libs/deact")

Deact.render(
    Deact.create("header", {}, [
        Deact.create("h1", {}, "This is Halloween ~~"),
        Deact.create(
            "nav",
            {},
            Deact.create(
                "button", 
                {
                    onclick: function clickButton() {
                    console.log("Button clicked")
                    }
                }, 
                "Hallow-Hallow-Halloween")
        )
    ]),
    document.querySelector(".app")
  );