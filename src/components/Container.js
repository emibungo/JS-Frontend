const Deact = require("../libs/deact")

function Container() {
    return Deact.create(
        "div", { class: `container` }, children
    );
}

module.exports = Container