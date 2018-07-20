import React from 'react';
import ReactDOM from 'react-dom';
import PlaceHolder from './components/place_holder_component';
//import {ComponentName} from './components/{component_name}';

class App extends React.Component
{
  render()
  {
    return(
      <div>
        Plain & Simple
        <PlaceHolder />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
