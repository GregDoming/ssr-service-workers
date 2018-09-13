import React from 'react';
import {Helmet} from 'react-helmet';

class Home extends React.Component {

  exampleMethod(){
    console.log('JS is running');
  }

  exampleMethod2(){
    console.log('More JS is running!');
  }

  head(){
    return (
      <Helmet>
        <title>My page title</title>
      </Helmet>
    )
  }

  render(){
    return (
      <div>
        {this.head()}
        <h1>
          My home page
        </h1>
        <p>
          Some content
        </p>
        <button onClick={() => this.exampleMethod()}>Console log some text</button>
        {this.exampleMethod2()}
      </div>
    )
  }
}

export default Home;