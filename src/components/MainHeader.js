const AppTitle = require("./AppTitle")
const Button = require("./Button")
const Deact = require("../libs/deact")
const Nav = require("./Nav")

function MainHeader() {
    return Deact.create("header", {}, [
        AppTitle("WCCI Student App"),
        Nav(
            {},
            Button(
                {
                    onclick: () => {
                        console.log("Button clicked")
                    }
                }, 
                "Hallow-Hallow-Halloween"
            )
        )
    ])
};

module.exports = MainHeader;