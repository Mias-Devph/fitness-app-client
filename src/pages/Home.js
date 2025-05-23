import React from 'react';
import { Container, Row, Col, Button, Card, Carousel, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">Track Your Fitness Journey</h1>
              <p className="lead mb-4">
                HatawHub helps you monitor workouts, set goals, and achieve better results. 
                Join thousands of users transforming their fitness habits.
              </p>
              <div className="d-flex gap-3">
                <Button as={Link} to="/register" variant="primary" size="lg">
                  Get Started
                </Button>
                <Button as={Link} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="outline-light" size="lg">
                  Learn More
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fitness tracking app" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose HatawHub?</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 mx-auto" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-graph-up fs-3"></i>
                  </div>
                  <h4>Progress Tracking</h4>
                  <p>Monitor your strength gains, endurance improvements, and body measurements over time.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 mx-auto" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-collection-play fs-3"></i>
                  </div>
                  <h4>Workout Library</h4>
                  <p>Access hundreds of pre-made workouts or create your own custom routines.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 mx-auto" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-phone fs-3"></i>
                  </div>
                  <h4>Mobile Friendly</h4>
                  <p>Track your workouts anywhere with our mobile-optimized platform.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Users Say</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Carousel indicators={false} className="shadow">
                <Carousel.Item className="p-4 p-lg-5 bg-white rounded">
                  <div className="text-center">
                    <p className="fs-4 fst-italic mb-4">
                      "HatawHub has completely transformed my workout routine. I've gained 10lbs of muscle in 3 months by following the progressive overload tracking."
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="User" 
                        className="rounded-circle me-3" 
                        width="60"
                      />
                      <div className="text-start">
                        <h5 className="mb-0">Sir Andrei</h5>
                        <small className="text-muted">Fitness Enthusiast</small>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="p-4 p-lg-5 bg-white rounded">
                  <div className="text-center">
                    <p className="fs-4 fst-italic mb-4">
                      "As a beginner, I was overwhelmed with where to start. HatawHub's guided programs made it so easy to build consistency and see results."
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="User" 
                        className="rounded-circle me-3" 
                        width="60"
                      />
                      <div className="text-start">
                        <h5 className="mb-0">Ms. Nikkie</h5>
                        <small className="text-muted">Yoga Instructor</small>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container className="text-center py-4">
          <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Fitness?</h2>
          <p className="lead mb-5">Join thousands of users achieving their fitness goals with HatawHub</p>
          <Button as={Link} to="/register" variant="light" size="lg" className="px-4">
            Start Your Free Trial
          </Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="mb-3">HatawHub</h5>
              <p>The ultimate fitness tracking platform to help you achieve your workout goals.</p>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h5 className="mb-3">Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
              </ul>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h5 className="mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Terms</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5 className="mb-3">Subscribe to Newsletter</h5>
              <div className="d-flex">
                <input type="email" className="form-control" placeholder="Your email" />
                <Button variant="outline-light" className="ms-2">Subscribe</Button>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <div className="text-center">
            <small>© 2025 HatawHub. All rights reserved.</small>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Home;