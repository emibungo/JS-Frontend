const Deact = require("../libs/deact")

const AppTitle = function () {
    return Deact.create("h1", {}, "This is Halloween ~~");
};

module.exports = AppTitle;