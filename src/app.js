import Reakt, {Component} from './lib/reakt.js';
import ReaktDOM from './lib/reakt-dom.js';

class List extends Component {

  constructor() {
    super();

    this.state = {
      items: []
    };

    setInterval(() => {
      this.setState({
        items: [...this.state.items, '\ud83e\udd68']
      })
    }, 1500);
  }

  render() {
    return Reakt.createElement('ul', null,
      ...this.state.items.map(item => Reakt.createElement('li', null, item)))
  }
}

const App = () => (
  Reakt.createElement(
    'div',
    null,
    Reakt.createElement('h1', null, "Pretzel Factory"),
    Reakt.createElement(List),
  )
);


ReaktDOM.render(
  Reakt.createElement(App, null),
  document.getElementById('app')
);


