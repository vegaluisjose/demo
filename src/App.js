import { Component } from 'react';
import Title from './components/Title';
import Layout from './components/Layout';
import { Divider } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <div>
        <Title />
        <Divider />
        <Layout />
      </div>
    );
  }

}


export default App;
