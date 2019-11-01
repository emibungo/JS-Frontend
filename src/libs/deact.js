module.exports = {
  render(child, parent) {
    parent.append(child);
  },

  create(element, attributes = {}, content) {
    const createdElement = document.createElement(element);

    for (key in attributes) {
      // createdElement.setAttribute(key, attributes[key]);
      // console.log(key);
      // console.log(attributes[key]);
      createdElement[key] = attributes[key];
    }

    if (typeof content === "string") {
      createdElement.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      createdElement.append(content);
    } else if (content instanceof Array) {
      content.forEach(function(htmlElement) {
        createdElement.append(htmlElement);
      });
    } else {
      throw new Error("Not a valid content type for element");
    }

    return createdElement;
  }
};