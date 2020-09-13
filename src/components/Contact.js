import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import { Button } from 'reactstrap';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes `${bounceIn}`} `;
class Contact extends Component  {
  render (){
    return (
      <div className='contact-body'>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Get in touch</h2>
            <hr/>
          {/*  <Bounce>
            <img
              src="images/pic5.jpg"
              alt='avatar'
              className='avatar-img'
            />
            </Bounce> */}
          <Bounce>
            <p style={{width:"75%", margin: 'auto', paddingTop:'1em'}}>

            If you would like to get in touch, to work on projects, to hire me or just to say hi, feel free to email or send me a message on LinkedIn.
            </p>
          </Bounce>
          </Cell>

          <Cell col={6}>
            <h2>Community</h2>
            <hr/>
            <p> Here are few communities I am activly part of.  </p>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                  <img
                    src="images/LGP-Logo.png"
                    alt='avatar'
                    className='logo-img'
                  />
                  <a href = "mailto: tanuka.das12@gmail.com" rel="noopener noreferrer" style={{color:'black'}}>
                  Ladies Get Paid</a>

                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                  <i className="fa fa-linkedin-square" aria-hidden='true' style={{color:'Dodgerblue'}}/>
                  <a href="http://www.linkedin.com/in/tanuka-das" rel="noopener noreferrer" target="_blank" style={{color:'black'}}>
                        My LinkedIn</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}}>
                  <i className="fa fa-github-square" aria-hidden='true' style={{color:'Dodgerblue'}}/>
                  <a href="https://github.com/tanuka16"  target="_blank" style={{color:'black'}}>
                        My GitHub</a>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>


          <div style={{paddingTop: '95px'}}>
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

export default Contact;
