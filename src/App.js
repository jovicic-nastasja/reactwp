import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let targetUrl = 'https://mysticalraven.com/wp-json/wp/v2/posts/';
    return fetch(proxyUrl + targetUrl)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        posts: data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <div>
           {this.state.posts.map((item, index) => (
           <div key={index}>
             <div className="row">
               <div className="leftcolumn">
                 <div className="card">
                   <div className= "title">
                     <h1>{item.title.rendered}</h1>
                   </div>
                   <div className= "content" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                 </div>
               </div>
             </div>
           </div>
           ))}
     </div>
      </div>
    );
  }
}

export default App;
