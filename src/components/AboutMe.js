import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
/*import { Button } from 'reactstrap';*/
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes `${bounceIn}`} `;

class About extends Component  {
  render (){
    return (
      <div className='contact-body'>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>About</h3>
            <hr/>
            {/*<Bounce>
            <img
              src="images/pic5.jpg"
              alt='avatar'
              className='avatar-img'
            />
            </Bounce> */}
          <Bounce>

            <p className="paragraph" style={{width:"85%", margin: 'auto', paddingTop:'1em', fontColor: '#7e7e7e'}}>

            I am Tanuka Das, a Fullstack Developer, based in Jamaica, New York. I focus on implementing an intricate and detailed code.
            My fascination in coding began by adding computer science courses to my undergraduate studies and grew with developing and building web applications.
            Making a project go from a concept to life simultaneously challenges, intrigues and motivates me. Apart from coding I write technical blogs on
            <a href="http://www.devwonderworld.com" rel="noopener noreferrer" target="_blank" style = {{ textDecoration: "none" }}> devwonderworld</a>,
            <a href="https://medium.com/@tanuka.das12" rel="noopener noreferrer" target="_blank" style = {{ textDecoration: "none" }}> medium</a>, and
            <a href="https://dev.to/tanuka16" rel="noopener noreferrer" target="_blank" style = {{ textDecoration: "none" }}> dev</a>.
            <br/>
            When I am not working, I love spending time with my family, reading books, hiking, and exploring new places.
            </p>
            <div className="social-links">

              {/* LinkedIn */}
                <a href="http://www.linkedin.com/in/tanuka-das" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" style={{color:'Dodgerblue', fontSize: '2em'}}/>

                </a>

              {/* GitHub */}
                <a href="https://github.com/tanuka16" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" style={{color:'Dodgerblue', fontSize: '2em'}}/>
                </a>

              {/* blogging website */}
                <a href="https://devwonderworld.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-bold" aria-hidden="true" style={{color:'Dodgerblue', fontSize: '2em'}}/>
                </a>

              {/* Gmail
                <a href = "mailto: tanuka.das12@gmail.com" >
                  <i className="fa fa-envelope" aria-hidden="true" style={{color:'Dodgerblue', fontSize: '3em'}}/>
                </a>
                */}
            </div>

          </Bounce>
          </Cell>

          <Cell col={6}>

            <div className="contact-list">
            <h3>Community</h3>
            <hr/>
              <p style={{textAlign: 'left',fontSize:"15px", margin: '30px 0 0 0'}}>Below are two communities I am most active on:</p>
              <List>
              <ListItem>
                <ListItemContent style={{fontSize: '15px', fontFamily:'Anton'}}>
                <img
                  src="images/LGP-Logo.png"
                  alt='avatar'
                  className='logo-img'
                />
                <a href = "https://www.ladiesgetpaid.com/" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
                Ladies Get Paid</a>

                </ListItemContent>
              </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily:'Anton'}}>
                  <img
                    src="images/LeagueOfWomenCoders.png"
                    alt='avatar'
                    className='logo-img'
                  />
                  <a href = "http://lwc.tech/" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
                   LEAGUE OF WOMEN CODERS</a>

                  </ListItemContent>
                </ListItem>
                <p style={{textAlign: 'left',fontSize:"15px", margin: '20px 0 20px 0'}}>Interest: full-time, apprentship, internship </p>



                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily:'Anton'}}>
                  <i className="fa fa-download" aria-hidden='true' style={{color:'Dodgerblue', fontSize: '3em'}}/>
                  <a href="TanukaDas_Resume.pdf"  download="Tanuka's resume" style={{color:'black'}}>
                  Download Resume</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily:'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden='true' style={{color:'Dodgerblue', fontSize: '3em'}}/>
                  <a href = "mailto: tanuka.das12@gmail.com" rel="noopener noreferrer" style={{color:'black'}}>
                  Hire Me</a>

                  </ListItemContent>
                </ListItem>

              </List>

            </div>

          </Cell>

          <div style={{paddingTop: '25px'}}>
          <Cell col={12}>
            <footer style={{color:"grey", textAlign:'center'}}>
            © Tanuka Das. All rights reserved.
            </footer>
          </Cell>
          </div>
        </Grid>

      </div>
    )
  }
}

export default About;
