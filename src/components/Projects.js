import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const Pulse = styled.div`animation: 2s ${keyframes `${pulse}`} `;


class Projects extends Component  {


  toggleCategories() {

      return(

        <div className="projects-grid"  style={{justifyContent: 'center', padding: "30px 20px 0px 20px"}}>
          {/*<h1 style={{paddingLeft:'50%'}}>Projects</h1>*/}

        <hr/>
        {/* project 1 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(images/donationApp.png) center/ cover'}}>
              {/*<h3 style={{marginTop:'150px'}}></h3>*/}
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>Ruby on Rails + React.js + HTML + CSS</p>
              DoNation is a charity app, which allows users to research numerous charitable organizations to award donations. Users can also make use of the customer service chatbot for instructions.
            </CardText>

            <CardActions className="buttons" border>
              <Button href="https://github.com/tanuka16/DoNation-Back-end" target='_blank' colored>GitHub</Button>
            {/*   <Button href="https://donation-smile.herokuapp.com/" target='_blank' colored>Live Demo</Button>
              <Button href="https://youtu.be/RnQherXmMkk" target='_blank' colored>Video Demo</Button> */}
            </CardActions>
        </Card>

        {/* project 2 */}
        <Card className='card' shadow={5} style={{minWidth:'450', merginBottom: '20px'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(images/houseOfShoesApp.png) center/ cover'}}>
              {/* <h3 style={{marginTop:'150px'}}></h3>*/}
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>Ruby on Rails + Bootstrap + CSS</p>
              House of Shoes is a shoe wish-list app, it holds different kinds of shoes. Users can create an account and add their favorite shoes in their wish list.
            </CardText>

            <CardActions className="buttons" border>
              <Button href="https://github.com/tlam212/Shoe_App" target='_blank' colored>GitHub</Button>
            {/*   <Button href="https://houseofshoes-app.herokuapp.com/" target='_blank' colored>Live Demo</Button>
              <Button href="https://youtu.be/t1xcK1T7Y8o" target='_blank' colored>Video Demo</Button> */}
            </CardActions>
        </Card>

        {/* project 3 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/03/En2e4Hm-796x398.jpg) center/ cover'}}>
              <h3 style={{marginTop:'150px'}}>VideoTube</h3>
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>React.js + Bootstrap + CSS</p>
              VideoTube is a single page video search application, allows a user to search for any possible videos, select it and hit 'play' to watch it.
            </CardText>
            <CardActions className="buttons" border>
              <Button href="https://github.com/tanuka16/VideoTube-react" target='_blank' colored>GitHub</Button>
              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
        </Card>

        {/* project 4 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/03/En2e4Hm-796x398.jpg) center/ cover'}}>
              <h3 style={{marginTop:'150px'}}>Alien Invaders</h3>
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>JavaScript</p>
              Alien Invader is a single page video game app, which allows a player to shoot aliens, preventing them from reaching the bottom of the screen.
            </CardText>
            <CardActions className="buttons" border>
              <Button href="https://github.com/tanuka16/JS-AlienInvaders" target='_blank' colored>GitHub</Button>
              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
        </Card>

        {/* project 5
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png) center/ cover'}}>
              <h3 style={{marginTop:'150px'}}>Instagram Lite</h3>
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>Ruby</p>
              Instagram Lite is a social media app, allows users to create an account, post images, like pictures and add comments on other users account.
            </CardText>
            <CardActions className="buttons" border>
              <Button href="https://github.com/April17/module-one-final-project-guidelines-dumbo-web-051319" target='_blank' colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
        </Card>
        */}


        </div>
      )
    }


  render (){
    return (
      <div>
        <div className="projects-grid" >
        {/* use the tabs for future projects
          import {Tabs, Tab, CardMenu, IconButton} from 'react-mdl';
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}ripple>
          <Tab>Projects</Tab>
          <Tab>Blogs</Tab>

        </Tabs>
        */}
          <Grid>
            <Cell col={12}>
            <Pulse>
              <div className="content">{this.toggleCategories()}</div>
            </Pulse>
            </Cell>
          </Grid>

      </div>

        <footer style={{color:"grey", textAlign:'center', paddingTop: '35px', paddingBottom: '15px'}}>
        © Tanuka Das. All rights reserved.
        </footer>
      </div>
    )
  }
}

export default Projects;
