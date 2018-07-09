function createElement(nodeName, props, ...children) {

  // support functional components 
  if (typeof nodeName === 'function') {
    return nodeName(props)
  }

  else {
    const element = document.createElement(nodeName);

    children.forEach(child => {
        if(typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        }
        else {
          element.appendChild(child)
        }
    })
    return element;
  }
}

function render(element, rootElement) {
  rootElement.appendChild(element);
}

export default { createElement, render };