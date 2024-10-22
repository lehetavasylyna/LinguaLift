import React from 'react';

import { Header } from './components/Header';

function App() {
    return (
        <div data-testid="app">
            <Header />
            <div id="tabs">
                <menu>
                    <button id="btn-why-react" className="active">
                        Чому саме React?
                    </button>
                    <button id="btn-core-features">Основні переваги (Features)</button>
                    <button id="btn-resources">Корисні посилання</button>
                </menu>
                <div id="tab-content" />
            </div>
            {/* <LessonCard />
            <LessonCard />
            <LessonCard /> */}
        </div>
    );
}

// export { App };
export default App;
