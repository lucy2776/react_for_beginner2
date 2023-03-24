import React from 'react';
import ReactDOM from 'react-dom/client';
import UseEffect from './UseEffect';
import CleanupFn from './CleanupFn';
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <UseEffect />
    <br />
    <br />
    <br />
    <CleanupFn />
  </div>
);

