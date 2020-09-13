import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes `${bounceIn}`} `;

class AboutMe extends Component  {
  render (){
    return (
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className="aboutme-grid">
          <Cell col={12}>
            <img
            /*src= "https://freepngimg.com/thumb/wonder_woman/20973-1-wonder-woman-picture.png"*/
              src= "images/pic5.jpg"
              alt='avatar'
              className='avatar-img'
              />
              <Bounce>
              <div className="intro-text" style={{marginTop: '30px'}}>
                <h3>Hello, and welcome to my website. </h3>

                <p>I am a Full Stack Web Developer, based in Jamaica, New York. I focus on implementing an intricate and detailed code.
                My fascination in coding began by adding computer science courses to my undergraduate studies and grew with developing and building web applications.
                Making a project go from a concept to life simultaneously challenges, intrigues and motivates me. Apart from coding I write technical blogs on
                <a href="http://www.devwonderworld.com" rel="noopener noreferrer" target="_blank" style = {{ textDecoration: "none" }}> devwonderworld</a>,
                <a href="https://medium.com/@tanuka.das12" rel="noopener noreferrer" target="_blank" style = {{ textDecoration: "none" }}> medium</a>, and
                <a href="https://dev.to/tanuka16" rel="noopener noreferrer" target="_blank" style = {{ textDecoration: "none" }}> dev</a>.</p>

                <p>When I am not working, I love spending time with my family, reading books, hiking, and exploring new places. </p>
                <br/>

                <div className="social-links">

                  {/* LinkedIn */}
                    <a href="http://www.linkedin.com/in/tanuka-das" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>

                    </a>

                  {/* GitHub */}
                    <a href="https://github.com/tanuka16" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>

                  {/* Medium
                    <a href="https://medium.com/@tanuka.das12" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-medium" aria-hidden="true"/>
                    </a>
                  */}
                  {/* blogging website */}
                    <a href="https://devwonderworld.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-bold" aria-hidden="true"/>
                    </a>

                  {/* Gmail */}
                    <a href = "mailto: tanuka.das12@gmail.com" >
                      <i className="fa fa-envelope" aria-hidden="true"/>
                    </a>

                </div>

              </div>
            </Bounce>

          </Cell>

        </Grid>

        <footer style={{color:"grey", textAlign:'center', paddingTop: '25px'}}>
          © Tanuka Das. All rights reserved.
        </footer>

      </div>
    )
  }
}

export default AboutMe;
