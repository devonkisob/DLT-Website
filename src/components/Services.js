import { useState } from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";

const Service = ({ service, onClick }) => {
  return (
    <Button className="service-button" variant="" onClick={onClick}>
      {service.name}
    </Button>
  );
};

const servicesData = [
    {
      id: 1,
      name: "Individual Counselling",
      description: <p>Individual therapy is your chance to work one-on-one with me. I will support and empower individuals to regain control of their life by reaching their therapeutic goals. <u>($140 per session)</u></p>,
    },
    {
      id: 2,
      name: "Couples Counselling",
      description: <p>Couples therapy is essential for any relationship that needs improving their communication, repairing trust, conflict resolution, enhancing emotional physical intimacy. Don’t allow relationship challenges to gain grounds any longer. I am here to help. <u>($160 per session)</u>"</p>,
    },
    {
      id: 3,
      name: "Family Counselling",
      description: <p>Family therapy provides a respectful milieu to help reduce family relational distress by ensuring a safe space for expressing feelings, bring cohesion and harmony, restore hope and strengthen the family relationships. <u>($175 per session)</u></p>,
    },
    {
        id: 4,
        name: "Teen Counselling",
        description: <p>Teen counselling can be very effective in helping teenagers deal with issues such as anxiety, trauma, grief, relational issues and other day-to-day struggles. <u>($140 per session)</u></p>
    },
    {
        id: 5,
        name: "Grief, Loss and Trauma",
        description: <p>Grief, loss and trauma counselling is a significant and compassion form of therapy designed to nurture and come alongside you on your journey as you deal with loss and other related issues. I echo the sentiments of Shurland Kellman when he says: <b>“People need to feel heard and supported. My aim always is to walk with them through life’s moments, the pleasant and the hard ones”</b> <u>($140 per session)</u></p>,
    },
    {
        id: 6,
        name: "Group Therapy",
        description: <p><b>"Courage starts with showing up and letting ourselves be seen.”</b> -Brené Brown. <br></br>Sometimes one of the most difficult and challenging things can be to admit that we are struggling or that we need help. Admitting that your relationship needs work and isn’t in the healthiest space isn’t always easy to do. We can feel very vulnerable, exposed, and seen, and that can be a very scary place to be in. At the same time, it is only when we allow ourselves to be truly seen, that we can be truly loved, and then we can also truly experience healthy, connected and fulfilling relationships. In this group therapy, I offer a confidential, secure and safe space where you can express your feelings. <u>($62.75/person per session)</u></p>,
      }
    // Add more services here as needed
  ];
  

export const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div className="services-container" id="services">
      <h1 className="services-header">Core Services</h1>
      <Container className="services-grid">
        <Row>
        {servicesData.map((service) => (
          <Col key={service.id} xs={12} md={6}>
            <Service service={service} onClick={() => handleServiceClick(service)} />
          </Col>
        )
        )}
        </Row>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedService?.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
