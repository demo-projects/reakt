import Reakt from './lib/reakt.js';
import ReaktDOM, {Component} from './lib/reakt-dom.js';

class List extends Component {

  render() {
    return Reakt.createElement(
      'div',
      null,
      Reakt.createElement('h1', null, "Pretzel Factory"),
      Reakt.createElement('ul', null,
        ...this.props.items.map(item => Reakt.createElement('li', null, item)))
    )
  }
}

const items = [];

setInterval(() => {
  items.push('\ud83e\udd68');
  render(items);
}, 1500)

function render(items) {
  ReaktDOM.render(
    Reakt.createElement(List, { items }),
    document.getElementById('app')
  )
}

render(items)

