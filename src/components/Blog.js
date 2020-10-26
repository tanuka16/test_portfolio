import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const Pulse = styled.div`animation: 2s ${keyframes `${pulse}`} `;


class Blog extends Component  {

    blogPost() {
      return (

        <div className="projects-grid"  style={{justifyContent: 'center', padding: "30px 20px 0px 20px"}}>

        {/* blog 12 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '50%', width: '100%', background: 'url(images/blog12.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Markdown — An Easy & Fast to Learn Markup Language</h5>
            You probably never heard about it, or you did, but never thought about using it, or maybe you did use it and loved it as well...
            <a href="https://devwonderworld.com/markdown-an-easy-fast-to-learn-markup-language/" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://devwonderworld.com/markdown-an-easy-fast-to-learn-markup-language/" target='_blank' raised>Dev Wonder World</Button>
          </CardActions>
        </Card>

        {/* blog 11 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/blog11.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Data Structure — Linked List | SINGLY LINKED LIST PRACTICE(LeetCode)</h5>
            A fundamental data structure used to solve many algorithms problems...
            <a href="https://devwonderworld.com/data-structure-linked-list-singly-linked-list-practiceleetcode/" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://devwonderworld.com/data-structure-linked-list-singly-linked-list-practiceleetcode/" target='_blank' raised>Dev Wonder World</Button>
          </CardActions>
        </Card>


        {/* blog 10 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/blog10.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Debug JS Code with DevTool Network Tab</h5>
            In this article, I discuss the use of the network tab in Chrome DevTool inspect.The network panel is really useful for timing...
            <a href="https://devwonderworld.com/debug-js-code-with-devtool-network-tab/" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://devwonderworld.com/debug-js-code-with-devtool-network-tab/" target='_blank' raised>Dev Wonder World</Button>
          </CardActions>
        </Card>


        {/* blog 9 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/HTML&Rails_forms.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>HTML form to form_with in Rails</h5>
            Let’s talk about forms!Why are they important? Forms are one of the main points of interaction between a web site or application and a user.
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/html-forms-to-html-forms-in-rails-4a345d9aaed2" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        {/* blog 8 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/LinledIn1.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Optimize Your LinkedIn Profile — New Developers</h5>
            With that kind of reach as professional, we can’t afford to not take LinkedIn seriously This blog focuses on optimizing the LinkedIn...
            <a href="https://medium.com/@tanuka.das12/optimization-of-linkedin-profile-for-new-developers-203a566be95" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/optimization-of-linkedin-profile-for-new-developers-203a566be95" target='_blank' raised >Medium</Button>
          </CardActions>
        </Card>
        {/* blog 7 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/blog3.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>How to Create Simple Forms in React?</h5>
            The aim of this blog is to better understand how to create a form in React. In this example, I’m creating a new blog post. This is a basic form structure...
            <a href="https://medium.com/@tanuka.das12/how-to-create-simple-forms-in-react-262da7aa6b5b?source=friends_link&sk=8ba1fef624ef4f3cf33e0dcdef8efb8c

" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/how-to-create-simple-forms-in-react-262da7aa6b5b?source=friends_link&sk=8ba1fef624ef4f3cf33e0dcdef8efb8c

" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>

        {/* blog 6 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/blog6.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>React.js — Manage States</h5>
            In React state is simply data that its component maintains, which means the component can change its value. State is a class instant..
            <a href="https://medium.com/@tanuka.das12/react-js-manage-states-87830a369f0" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/react-js-manage-states-87830a369f0" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        {/* blog 5 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Components Architecture</h5>
            React is designed around the concept of reusable components. Just like you see in this app layout, how each square...
            <a href="https://medium.com/@tanuka.das12/components-architecture-734cca8bc3ab" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/components-architecture-734cca8bc3ab" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>

        {/* blog 4 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Rails : Flash Hash</h5>
            Flash hash is used to display messages when we create, delete, or update a subject. Inside this create method, we will check...
            <a href="https://medium.com/@tanuka.das12/rails-flash-hash-23a7126e20ab" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/rails-flash-hash-23a7126e20ab" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        {/* blog 3 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Rails API From Scratch</h5>
            Step by step process of creating rails API...
            <a href="https://medium.com/@tanuka.das12/rails-api-from-scratch-1e109cd2580d" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/rails-api-from-scratch-1e109cd2580d" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>

        {/* blog 2 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Set up Rails Model</h5>
            A model is a description of what the app is and what it can do. Basically it defines...
            <a href="https://medium.com/@tanuka.das12/set-up-rails-model-ba36db24bd76" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/set-up-rails-model-ba36db24bd76" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        {/* blog 1 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/blog1.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Set up Rails Controller</h5>
            The controller does the heavy lifting when the interaction happens between the model...
            <a href="https://medium.com/@tanuka.das12/set-up-rails-controller-bd701198a4f1" target='_blank' rel="noopener">more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/set-up-rails-controller-bd701198a4f1" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>

        <Button href="https://devwonderworld.com/" target='_blank' style={{backgroundColor: 'Dodgerblue', color:'white'}} raised>Explore Dev Wonder World</Button>
        </div>

      )
    }



  render (){
    return (
      <div>
        <div className="projects-grid" >
        {/* use the tabs for future projects */}


          <Grid>
            <Cell col={12}>
            <Pulse>
              <div className="content">{this.blogPost()}</div>
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

export default Blog;
