import { isClass, isFunction, isString, isEvent } from './reakt-utils.js'

// base class
export class Component {

  constructor(props){
    this.props = props;
  }
}

function renderNode(vNode) {
  const { nodeName, props, children} = vNode;

  // support class 
  if (isClass(nodeName)) {
    const component = new nodeName(props);
    return renderNode(component.render());
  }

  // support functional components 
  if (isFunction(nodeName)) {
    return renderNode(nodeName(props));
  }

  else if (isString(nodeName)) {
    const element = document.createElement(nodeName);

    handleProps(props, element);
    handleChildren(children, element);
    
    return element;
  }
}

function handleChildren(children, element) {
  
  (children || []).forEach(child => {
    if (isString(child)) {
      element.appendChild(document.createTextNode(child));
    }
    else {
      element.appendChild(renderNode(child));
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

let currentApp;
function render(element, rootElement) {  
  const app = renderNode(element);

  currentApp ? 
  rootElement.replaceChild(app, currentApp) :
  rootElement.appendChild(app);

  currentApp = app;

}

export default { render };