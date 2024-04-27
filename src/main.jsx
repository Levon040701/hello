import ReactDOM from 'react-dom/client'

import Hello from './Hello/Hello'
import './index.css'

const jsxElem = (
  <Hello></Hello>
);

ReactDOM.createRoot(document.getElementById('root')).render(jsxElem);

