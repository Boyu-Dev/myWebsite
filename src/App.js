import React, { Component } from 'react';
import './App.css';



class App extends Component {
// Get the navbar
  constructor() {
    super();
    this.state = {
      stickNav: false,
      isToggleOn: false,
      atHome: false,
      atAbout: false,
      atWork: false,
      atExp: false,
      renderContact: false,
    };

    this.tabOnClick = this.tabOnClick.bind(this);
    this.getContact = this.getContact.bind(this);
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleWindowScroll);
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleWindowScroll);
  }

  //scroll handlers
  handleWindowScroll = (e) => {
    if(!this.navBar){
      return;
    }
    const pageYOffset = window.pageYOffset;
   
    if(pageYOffset < 1){
      this.setState({
        atHome: true,
        atAbout: false,
        atWork: false,
        atExp: false,
        stickNav: false,
      });
    }
    else if (pageYOffset > 0){
      this.setState({stickNav: true});
    }
  }

  tabOnClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      stickNav: !prevState.stickNav,
    }));
  }

  getNavBarStyle(){
    return !this.state.stickNav ?  'App-card' : 'App-cardSticky';

  }
  setNameStyle(){
    return !this.state.stickNav ?  'name' : 'nameSticky' ;
  }

  setTabStyle(){
    return !this.state.stickNav ? 'tabSticky tabTaggleOff' : 'tabSticky tabTaggleOn' ; 
  }
  setContactButtonStyle(){
    return !this.state.stickNav ? 'getInTouch' : 'getInTouchSticky';
  }
  setTagline(){
    return !this.state.stickNav ? 'tagline' : 'taglineSticky' ;
  }


  getContact(){
    
    this.setState(prevState => ({
      getContact: !prevState.getContact,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
       

        <div className={this.getNavBarStyle()} ref={ref=>this.navBar=ref}>
          <span className={this.setNameStyle()}>Bo Yu</span>
          <span className={this.setTagline()}>UX Engineer && Software Developer </span>
          <span className={this.setTabStyle()}>
           <ul>
            <li className="tab" onClick={this.tabOnClick}>
              <div className="shiftLeft">
                <div className="initText">//About</div>
              </div>
              <div className="shiftRight">
                <div className="addtext">Me</div>
              </div>
            </li>
        
            <li className="tab">
            <div className="shiftLeft exp">
                <div className="initText">//Exp</div>
              </div>
              <div className="shiftRight erience">
                <div className="addtext">--.erience</div>
              </div>
            </li>

            <li className="tab">
              <div className="shiftLeft">
                <div className="initText">//Work</div>
              </div>
              <div className="shiftRight">
                <div className="addtext">. I Did</div>
              </div>
            </li>

           </ul>
           <div className="boInfo">
            {this.state.stickNav ? 
              <div className="aboutPage">
                <div className="aboutBackdrop">
                  About
                </div>
                <div className="AboutIntro-text">
                  <h>Me</h>
                  I am Bo Yu, a 24-year-old Canadian 
                  <strong> UX Engineer and Software Developer. </strong>
                    I love making things that people interact with and 
                  I am always learning something new 
                  <strong> (I am currently learning about UX in games). </strong>
                  I like to <strong> overcome </strong> design challenages,
                  <strong> create </strong> intelligent user experiences and software
                  with strong integrity. 
                  <br/>
                  Now days when I have free time, I am like to make silly games. And 
                  Once a year I travel the world to <strong> experience and learn </strong> 
                  about new cultures.
                </div>
                  <div className="About-skills">
                    <h>My Skills</h>

                    <div className="skill-App a1">
                      <img src="img/html_icon.svg" alt="html"/>
                    </div>

                    <div className="skill-App a2">
                      <img src="img/css_icon.svg" alt="css"/>
                    </div>

                    <div className="skill-App a3">
                      <img src="img/js_icon.svg" alt="javascript"/>
                    </div>

                    <div className="skill-App a4">
                      <img src="img/es3_icon.svg" alt="es3"/>
                    </div>

                    <div className="skill-App a5">
                      <img src="img/csharp_icon.svg" alt="C#"/>
                    </div>

                    <div className="skill-App a6">
                      <img src="img/c++_icon.svg" alt="c++"/>
                    </div>

                    <div className="skill-App a7">
                      <img src="img/java_icon.svg" alt="java"/>
                    </div>

                    <div className="skill-App a8">
                      <img src="img/python_icon.svg" alt="python"/>
                    </div>

                    <div className="skill-App a9">
                      <img src="img/mdb_icon.svg" alt="mdb"/>
                    </div>

                    <div className="skill-App a10">
                      <img src="img/mysql_icon.svg" alt="mysql"/>
                    </div>

                    <div className="skill-App a11">
                      <img src="img/react_icon.svg" alt="react native"/>
                    </div>

                    <div className="skill-App a12">
                      <img src="img/vs_icon.svg" alt="visual studio"/>
                    </div>

                    <div className="skill-App a13">
                      <img src="img/ai_icon.svg" alt="adobe illustrator"/>
                    </div>

                    <div className="skill-App a14">
                      <img src="img/id_icon.svg" alt="adobe indesign"/>
                    </div>

                    <div className="skill-App a15">
                      <img src="img/an_icon.svg" alt="adobe animate"/>
                    </div>

                    <div className="skill-App a16">
                      <img src="img/ps_icon.svg" alt="adobe photoshop"/>
                    </div>

                    <div className="skill-App a17">
                      <img src="img/blender_icon.svg" alt="blender"/>
                    </div>

                    <div className="skill-App a18">
                      <img src="img/unity_icon.svg" alt="unity"/>
                    </div>

                    <div className="skill-App a19">
                    <img src="img/github_icon.svg" alt="github"/>
                    </div>

                    <div className="skill-App a20">
                    <img src="img/bitbucket_icon.svg" alt="bitbucket"/>
                    </div>
                    
                  </div>
              </div>
            : null}
             
           </div>
          </span>
          <button className={this.setContactButtonStyle()} onClick={this.getContact}>GET IN TOUCH</button>
            {this.state.getContact ? 
              <div className="contactPage">
                <div className="closeContactPage" onClick={this.getContact}>X</div>
                <p className="contactTitle">Let's Talk</p>
                <p>New project, opportunities, or even just to get coffee.<br/>I am all down!</p>
                <form className="contactForm">
                  <div>
                    <input type="text" placeholder="Name *"/>
                  </div>
                  <div>
                    <input type="text" placeholder="E-mail *"/>
                  </div>
                  <div>
                    <textarea type="text" placeholder="Message *"/>
                  </div>
                  <div>
                    <button>Send Message</button>
                  </div>
                </form>
              </div>
              : null}
        </div>

      </div>
    );
  }
}

export default App;
