const AppTitle = require("./AppTitle");
const Button = require("./Button");
const AppTitle = require("./AppTitle");
const Container = require('./Container')
const Deact = require("../libs/deact");
const Nav = require("./Nav");
const StudentsButton = require("./StudentsButton");

function MainHeader() {
  return Deact.create(
    "header",
    {
      style: `background-color: #333; display: flex; justify-content: space-between; padding: 1rem`
    },
    [AppTitle("WCCI Student App", "blue"), Nav({}, StudentsButton()
          {
            onclick: () => {
              console.log("Button clicked");
            }
          },
          "Hallow-Hallow-Halloween"
        )
      )
    ]
  );
}

module.exports = MainHeader;
