import React from 'react';
import { render } from 'react-dom';

const App = function() {
	return (<h1>Hello World</h1>);
}

render(<App />, document.getElementById('root'));
