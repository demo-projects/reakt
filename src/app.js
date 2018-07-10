import Reakt, { Component } from './lib/reakt.js';

const Title = ({ text }) => Reakt.createElement(
  'h1',
  {
    style: 'color: blue',
    innerHTML: text,
    propKey: 5
  },
)

class App extends Component {

  render() {
    const { text } = this.props;

    return Reakt.createElement(
      'div',
      null,
      Reakt.createElement(
        Title,
        { text }),
      Reakt.createElement(
        'button',
        { onClick: () => alert('clicked') },
        'click me')
    )
  }
}

Reakt.render(
  Reakt.createElement(App, {text: 'props form class'}),
  document.getElementById('app')
)

