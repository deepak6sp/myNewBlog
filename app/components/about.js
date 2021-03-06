import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import LazyLoad from 'react-lazy-load';
import ListSkills from "./shared_components/listSkills";
import SplitBar from "./shared_components/splitBar";
import Testimonial from "./shared_components/testimonial";



class About extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0,0);
        this.state = {devModulesVisibleClass: "", blogModulesVisibleClass:"", skillsModulesVisibleClass:"", testimonialVisibleClass:""};
    }

    _animate(module){
        if( module == "devModules" ){
            this.setState({ devModulesVisibleClass:"devModulesVisible"});
        } else if ( module == "blogModules"){
            this.setState({ blogModulesVisibleClass:"blogModulesVisible"});
        } else if ( module == "skillsModules"){
            this.setState({ skillsModulesVisibleClass:"skillsModulesVisible"});
        }
    }


    render() {

        return  (
        	<main id="about">
                <section className="container container-fluid  about-me">
                    <Row>
                        <Col sm={12}>
                            <h2> About me</h2>
                            <hr/>
                            <p> I am a techsavvy and freelance Web Developer having 5 years of experience mainly focusing on UI and front end development.
                                I develop with skills of minimal usability designs and using core XHTML/HTML, CSS and Javascript. My coding follows resuable
                                component based structure for easy maintanence, scaling and debugging. Have experince using PHP frameworks and knowledge of ruby on rails.
                            </p>
                        </Col>
                    </Row>
                     <Row>
                        <Col sm={12}>
                            <h2> About things I do </h2>
                            <hr/>
                            <p></p>
                        </Col>
                    </Row>
                    <LazyLoad onContentVisible={() => this._animate("devModules")} offsetTop={-100} throttle={0}>
                        <Row className={"text-center dev-modules " + this.state.devModulesVisibleClass}>
                            <Col sm={12} md={4}>
                                <FontAwesome className='super-crazy-colors' name="mobile" size='3x'/>
                                <h4> Design and Wireframes </h4>
                                <p> I use photoshop for designs and convert them to complete web solution. Recently, I have
                                   been using my favourite Google drawings for mockups and wireframes, and loving it.</p>
                            </Col>
                            <Col sm={12} md={4}>
                                <FontAwesome className='super-crazy-colors' name="code" size='2x'/>
                                <h4> Development </h4>
                                <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as
                                npm, bower, webpack, gulp, sass to speed up developement process.</p>
                            </Col>
                            <Col sm={12} md={4}>
                                <FontAwesome className='super-crazy-colors' name="cogs" size='2x'/>
                                <h4> Testing </h4>
                                <p> I consider testing to be as important as design and development, so I believe in Agile test driven development. Also, I will make sure the
                                    web application works fine accross multi browsers and devices.</p>
                            </Col>
                        </Row>

                    </LazyLoad>
                    <Row>
                        <Col sm={12}>
                            <p> My projects involve use of technologies such as:</p>
                            <section className="skillsModulesVisible">
                                <ListSkills/>
                            </section>
                            <p>I am self learner, love web technologies, have passion for what I do, and hope to do this forever.</p>
                            <Button>Download Resume</Button>
                        </Col>
                    </Row>
                </section>

                {/*<SplitBar text="About my blog" iconName="pencil" />*/}

                <section className="container container-fluid about-my-blog">
                    <Row>
                        <Col sm={12}>
                            <h2> About my blog</h2>
                            <hr/>
                        </Col>
                    </Row>
                    <LazyLoad onContentVisible={() => this._animate("blogModules")} offset={-100} throttle={0}>

                        <Row className={ "blog "+ this.state.blogModulesVisibleClass}>
                            <Col sm={12}>
                                <p> My website is developed on MERN(Mongo, Express, Redux (React), Node) stack. I have also used react-bootstrap, which is my
                                    favourite front end framework, and react way of animations.</p>
                                <p> I am doing this blog to share knowledge that focuses mainly on latest web technologies involving Javascript and Node. However, I would not hesitate
                                    to include tips and tricks about UX/UI, front end and back end technologies </p>
                            </Col>
                        </Row>
                    </LazyLoad>
                    <Link to="blog" className="btn btn-default">Visit Blog</Link>
                </section>

                <Testimonial text="Deepak is hard working; learning and providing good quality work, always in pace with technology, and always searching for best solution.
                    He is a team player; I like working with him and I recommend him with pleasure."
                    recommendedBy = "Clauidiu - Senior Developer @ mycause.com.au"
                />

			</main>
        );
    }
}

export default About;
