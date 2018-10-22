import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './frontend/App/AppRoot';
import { AppContainer } from 'react-hot-loader';

function render(Component) {
	ReactDOM.hydrate(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('react-root')
	);
}
render(AppRoot);

if (module.hot) {
	module.hot.accept('./frontend/App/AppRoot.js', () => {
		const NewAppRoot = require('./frontend/App/AppRoot.js').default;
		render(NewAppRoot);
	});
}