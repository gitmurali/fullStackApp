import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";
import testData from "./testData.json";

ReactDom.render(
    <App contests={[]} />,
    document.getElementById('root')
);
