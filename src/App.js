import React from 'react';
import Image1 from './Image1.jpg';
import Image2 from './Image2.jpg';
import Image3 from './Image3.jpg';
import Image4 from './Image4.jpg';
import Image5 from './Image5.jpg';
import Image6 from './Image6.jpg';
import Image7 from './Image7.jpg';
import Image8 from './Image8.jpg';
import Image9 from './Image9.jpg';

import './App.css';

function App() {
  return (
    <div>
    {/* // <div className="App">
      // <header className="App-header"> */}
        <img src={Image1} className="App-logo" alt="logo" />
        <h5 className="Toys">Toys</h5>
        <h2 className="header">Home</h2>
        <h1 className="title">Vumbula Toys</h1>
        <h1 className="banner-title">Your one stop toys shop</h1>
        <button className="button-title">Order Now</button>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
        <Card7/>
        <Card8/>


           </div> 
        );
      }
    {/* </header>
    </div> */}
 
    const Card1 = () => {
      return (
        <div className="container">
        <div className= "cardsimages">
        {/* <img src="images/toy 4.jpg"></img> */}
        <img src={Image2}/>
        <div className="count"><b>Toy One </b><br></br>A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society.</div>
        </div>
    </div>
    
      );
    };

    const Card2 = () => {
      return (
        <div className="container">
        <div className= "cardsimages">
        {/* <img src="images/toy 5.jpg"></img> */}
        <img src={Image3}/>
        <div className="count"><b>Toy Two</b><br></br>A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society.</div>
        </div>
    </div>
      );
    };
    const Card3 = () => {
      return (
        <div className="container">
        <div className= "cardsimages">
        {/* <img src="images/toy 7.jpg"></img> */}
        <img src={Image4}/>
        <div className="count"><b>Toy Three</b><br></br>A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society.</div>
        </div>
    </div>
      );
    };
    
    const Card4 = () => {
      return (
        <div className="container">
        <div className= "cardsimages">
        {/* <img src="images/toy 8.jpg"></img> */}
        <img src={Image5}/>
        <div className="count"><b>Toy Four</b><br></br>A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society.</div>
        </div>
    </div>
      );
    };
    const Card5 = () => {
      return (
        <div className="container">
        <div className= "cardsimages">
        {/* <img src="images/toy1.jpg"></img> */}
        <img src={Image6}/>
        <div className="count"><b>Toy Five </b><br></br>A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society.</div>
        </div>
    </div>
      );
    };
    
    const Card6 = () => {
      return (
        <div className="container">
        <div className= "cardsimages">
        {/* <img src="images/toy2.jpg"></img> */}
        <img src={Image7}/>
        <div className="count"><b>Toy Six </b><br></br>A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society.</div>
        </div>
    </div>
      );
    };
    const Card7 = () => {
      return (
        <div className="container">
        <div className= "cardsimages">
        {/* <img src="images/toy3.jpg"></img> */}
        <img src={Image8}/>
        <div className="count"><b>Toy Seven</b><br></br>A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society.</div>
        </div>
    </div>
      );
    };
    
    const Card8 = () => {
      return (
        <div className="container">
        <div className= "cardsimages">
        {/* <img src="images/toy6.jpg"></img> */}
        <img src={Image9}/>
        <div className="count"><b>Toy Eight</b><br></br>A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society.</div>
        </div>
    </div>
      );
    };
    

export default App;
