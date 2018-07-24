// base class
export class Component {

  constructor(props, updater) {
    this.props = props;
    this.updater = updater;
  }

  setState(state){
    this.state = Object.assign(this.state, state);
    this.updater(this);
  }

}

// return a "virtual dom node"
function createElement(nodeName, props, ...children) {
  return { nodeName, props, children };
}

export default { createElement };