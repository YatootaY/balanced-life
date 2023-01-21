import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wave from 'react-wavify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className="absolute bottom-0 w-full -z-50">
      <Wave fill="#38bdf8"
          paused={false}
          options={{
          height:20,
          amplitude:20,
          speed:0.5,
          points:3
        }} id="wave" className='h-14'/>
      <div id="baseWave">
            
      </div>
    </div>
  </React.StrictMode>
);

