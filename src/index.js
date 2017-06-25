import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";
import testData from "./testData.json";

ReactDom.render(
    <App contests={testData.contests} />,
    document.getElementById('root')
);
