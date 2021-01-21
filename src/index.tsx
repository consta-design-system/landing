import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connectReduxDevtools } from '@reatom/debug';
import { context } from '@reatom/react';

import { App } from './containers/App/App';

import { store } from '@/modules/app';
import { MainPage } from '@/pages/MainPage/MainPage';

const Root: React.FC = () => {
  useEffect(() => connectReduxDevtools(store), []);
  return (
    <context.Provider value={store}>
      <App>
        <MainPage />
      </App>
    </context.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
