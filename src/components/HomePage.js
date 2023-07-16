import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
/*import { Link } from 'react-router-dom';*/
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';


const Bounce = styled.div`animation: 2s ${keyframes `${bounceIn}`} `;


class HomePage extends Component  {
  render (){
    return (
      <div style={{width:'100%', margin: 'auto'}}>

        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src='images/pic5.jpg'
              alt='avatar'
              className='avatar-img'
              />
              <Bounce>
              <div className="banner-text" style={{marginBottom: '100px'}}>
                <h1>Software Developer</h1>

                <hr/>
                <p> Java | JavaScript | React | HTML/CS </p>

                <div className="social-links">

                  {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/tanuka-das" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>

                    </a>

                  {/* GitHub */}
                    <a href="https://github.com/tanuka16" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>
                    {/* Medium */}
                    <a href="https://tanuka-das12.medium.com/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-medium" aria-hidden="true"/>
                    </a>

                  {/* blogging website
                    <a href="https://devwonderworld.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-bold" aria-hidden="true"/>
                    </a>

                  {/* Gmail */}
                    <a href = "mailto: tanuka.das12@gmail.com" >
                      <i className="fa fa-envelope" aria-hidden="true"/>
                    </a>
                </div>
              </div></Bounce>
          </Cell>
          {/*<div className="clouds">
            <Cell>
              <img src="cloud1.png" style={{'--i': '1'}}/>
              <img src="cloud2.png" style={{'--i': '2'}}/>
              <img src="cloud3.png" style={{'--i': '3'}}/>
              <img src="cloud4.png" style={{'--i': '4'}}/>
              <img src="cloud5.png" style={{'--i': '5'}}/>
            </Cell>
          </div>*/}
        </Grid>
        <footer style={{color:"grey", textAlign:'center', paddingTop: '35px'}}>
          © Tanuka Das. All rights reserved.
        </footer>
      </div>
    )
  }
}

export default HomePage;
