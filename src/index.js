// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { Repairs } from "./components/Repairs";
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Repairs />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Repairs } from "./components/Repairs";
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Repairs />
    </React.StrictMode>
);

reportWebVitals();
