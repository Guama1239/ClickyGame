import React, { Component } from 'react';
import Square from './components/square';
import logo from './logo.svg';
import './App.css';

arrayNames = [
    {name: "Luis", clicked: false}, {name: "Poornima", clicked: false }
]

class App extends Component {
  state ={

  }

  shuffledata = () => {
    // populate and rearrange the arrayNames randomly
    arrayNames.map()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Welcome to 👆 Clicky Game React</h1>
        </header>
        <div><Square>{this.state.name} </Square><Square /><Square /> </div>
        <div><Square /><Square /><Square /> </div>
        <div><Square /><Square /><Square /> </div>
        <div><Square /><Square /><Square /> </div>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;


// <!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
// <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
// <meta name="theme-color" content="#000000">
// <link rel="manifest" href="/manifest.json">
// <link rel="shortcut icon" href="/favicon.ico">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"/>
// <title>Clicky Game!</title><link rel='stylesheet' href='https://d33wubrfki0l68.cloudfront.net/css/5630b74d43ced313518ecf5ffb74868cac907e53/static/css/main.77b313ae.css'/>
// </head>
// <body>
// <noscript>You need to enable JavaScript to run this app.</noscript>
// <div id="root"></div>
// <script type='text/javascript' src='https://d33wubrfki0l68.cloudfront.net/js/998c0d5a489daa418609198207f1d83dc8eaa27e/static/js/main.926a01d5.js'>
// </script>
// </body>
// </html>