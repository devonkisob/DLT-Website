import {Container, Row, Col} from "react-bootstrap"
import bannerLogo from '../assets/pics/logo.svg';


export const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="intro-text">
                        <h1>{`Doing Life Together Counselling Services`}</h1>
                        <p>Doing Life Together (DLT) Counselling Services is a private psychotherapy and counselling practice established in 2018. DLT provides quality general counselling and psychotherapy services for a wide range of psycho-social, behavioral and emotional issues that many individuals and families face daily. In my practice, I use a variety of evidenced-based  treatment options ranging from talk therapy to group therapy with your goals in mind. </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={bannerLogo} alt="banner logo"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}