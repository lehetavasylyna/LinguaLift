import React from 'react';

// import resizeHook from '@hooks/resize';
// import styles from './App.css';
// import * as styles from './App.css';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div data-testid="app">
            <Header />
            <div id="tabs">
                <button>Test hooks</button>
                <menu>
                    <button id="btn-why-react" className="active">
                        Чому саме React?
                    </button>
                    <button id="btn-core-features">Основні переваги (Features)</button>
                    <button id="btn-resources">Корисні посилання</button>
                </menu>
                <div id="tab-content"></div>
            </div>
        </div>
    );
};

// export { App };
export default App;
