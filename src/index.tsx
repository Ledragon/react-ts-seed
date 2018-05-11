import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/hello';

ReactDOM.render(
  <Hello compiler="TypeScript 2.8.3" framework="React 16.3.2" />,
  document.getElementById('app')
);