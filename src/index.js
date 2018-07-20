import React from 'react';
import ReactDOM from 'react-dom';

//import {ComponentName} from './components/{component_name}';

class App extends React.Component
{
  render()
  {
    return(
      <div>
        Plain&Simple
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
