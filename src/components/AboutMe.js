import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutMePic from '../assets/pics/about-me.jpg' 


export const AboutMe = ()=> {
  return (
    <section className="aboutme" id="aboutme">
      <Container fluid className="about-me-container">
        <Row className="align-items-center">
          <Col md={6} className="image-container">
            <Image src= {aboutMePic} alt="Marcia Rodney" roundedCircle fluid />
          </Col>
          <Col md={6} className="text-container">
            <h1>Welcome! I am glad you are here</h1>
            <p>
            Hello! My name is Marcia. First, I want to commend you on this huge step you have taken towards a better quality of life. Seeking help is never easy but you have taken the first step towards improving your life and making positive changes.
            </p>
            <p>
            I am a Licensed Psychotherapist and Clinical Social Worker in the Toronto area with over 20 years of counselling experience. I have worked with diverse clients in various settings experiencing a variety of life challenges including: mental health issues, relationship issues, family conflict / dynamics, stress management, death, dying and bereavement, and more. 
            </p>
            <p>
            Though, my experience is varied, I believe what sets me apart is my ability to use my gift of insight and compassion in conjunction with my academic accomplishments and experience to support client.
            </p>
            <p>
            Doing Life Together (DLT) Counselling Services was created to help individuals and families struggling to obtain tools they need for positive and lasting change.
            </p>
            <p>
            My aim is to offer a safe space to be open without fear of judgement, counsel, coach and encourage those who may be struggling to understand their inner conflict and explore ways together to deal with distress. Ultimately, I am focused on helping my clients work towards positive and progressive change and reset the course to a better and healthier life. 
            </p>
            <p>
            I will honor your role as an active participant in all aspects of the therapeutic relationship. Once we identify your goals, we will create a plan to help you learn skills to achieve those goals.
            </p>
            <p>
            My clinical approaches include an integration of the following: Cognitive Behaviour Therapy (CBT), Solution Focused, Motivational Interviewing, Dialectical Behavior Therapy, Strengths Based Counselling techniques, and Emotional Focus Individual Therapy (EFIT).
            </p>
            <p>
            Let’s talk about what you have been experiencing and how I can help.
            </p>
            <h2>SCOPE OF PRACTICE</h2>
            <ul>
              <li>Mental Health</li>
              <li>Addiction</li>
              <li>Self esteem</li>
              <li>Relationship issues</li>
              <li>Anger Management</li>
              <li>Grief</li>
              <li>Coping with Life Changes</li>
              <li>Life Transitions</li>
            </ul>
            <h3>Marcia Rodney, RP</h3>
            <h3>"Giving you Skills to Thrive"</h3>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

