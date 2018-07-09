import Reakt from './lib/reakt.js';

const Title = (props) => Reakt.createElement(
  'h1',
  null,
  props.text
)

const App = () => Reakt.createElement(
  'div',
  null,
  Reakt.createElement(
    Title,
    { text: 'hello props' }
  )
);

Reakt.render(
  Reakt.createElement(App),
  document.getElementById('app')
)

