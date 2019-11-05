const Deact = require("../libs/deact")

const AppTitle = function (text, textColor) {
    return Deact.create(
        "h1",
        {
            style: `background-color: #; color: ${textColor}; padding: 0`
        }, 
        text
    );
};

module.exports = AppTitle;