import { isClass, isFunction, isString, isEvent } from './reakt-utils.js'

// base class
export class Component {

  constructor(props){
    this.props = props;
  }
}

function createElement(nodeName, props, ...children) {

  // support class 
  if (isClass(nodeName)) {
    const component = new nodeName(props);
    return component.render();
  }

  // support functional components 
  if (isFunction(nodeName)) {
    return nodeName(props);
  }

  else if (isString(nodeName)) {
    const element = document.createElement(nodeName);

    handleProps(props, element);
    handleChildren(children, element);
    
    return element;
  }
}

function handleChildren(children, element) {
  children.forEach(child => {
    if (isString(child)) {
      element.appendChild(document.createTextNode(child));
    }
    else {
      element.appendChild(child);
    }
  });
}

function handleProps(props, element) {
  for (let propName in props) {
    // support events
    if (isEvent(propName)) {
      const eventName = propName.substring(2).toLowerCase();
      element.addEventListener(eventName, props[propName]);
    }
    // support DOM properties
    else if (propName in element) {
      element[propName] = props[propName];
    }
    // support custom attributes
    else {
      element.setAttribute(propName, props[propName]);
    }
  }
}

function render(element, rootElement) {
  rootElement.appendChild(element);
}

export default { createElement, render };