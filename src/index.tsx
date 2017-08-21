import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/hello';

ReactDOM.render(
  <Hello compiler="TypeScript 2.4.2" framework="React" />,
  document.getElementById('app')
);