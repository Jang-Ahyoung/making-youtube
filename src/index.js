import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const youtube = new Youtube('process.env.REACT_APP_YOUTUBE_API_KEY');
// 이렇게 만들어진 youtube 는 인덱스 js가 호출되는 딱 한번만 만들어져!!!
// 이렇게 만들어진 youtube를 필요한 곳에다 전달해준다.
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
