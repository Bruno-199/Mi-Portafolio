import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Image,
  Button,
} from "react-bootstrap";

import "../css/Main.css";

const Main = () => {
  return (
    <>
      <div className="main">
        <h1>HOLA, MI NOMBRE ES BRUNO BAZAN</h1>
        <br />
        <h4>
          Soy Un Estudiante De La Tecnicatura Universitaria En Programación
          U.T.N. F.R.T <br />
          Actualmente Me Encuentro En El Segundo Año De La Carrera
        </h4>
        <br />
        <br />
        <a
          className="mapa"
          href="https://maps.app.goo.gl/wZbvM7FUZ5wrT2Uo6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="utn-frt"
            src="https://scontent.ftuc2-1.fna.fbcdn.net/v/t31.18172-8/13235563_823994574399707_4392281257081510316_o.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoRVMt0q8UhlBoEPULChQEiY-3cBg6IraJj7dwGDoitnBK59yticU92EUcrSQA4RuEew62VhCgFz_dqKSihMiE&_nc_ohc=9rphuXFa_zEQ7kNvgGPqOuB&_nc_ht=scontent.ftuc2-1.fna&oh=00_AYCw-qT55ViFqA4NVV09nKdQ974K1aYOtQmXn674dXwZnw&oe=66741C88"
          />
        </a>
        <Container className="skills">
          <div>
            <h2 className="mb-5">Skills</h2>
          </div>
          <Row>
            <CardGroup className="group1">
              <Col md={1}>
                <Card.Img
                  className="skill-img"
                  variant="top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
                />
              </Col>
              <Col md={1}>
                <Card.Img
                  className="skill-img"
                  variant="top"
                  src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png"
                />
              </Col>
              <Col md={1}>
                <Card.Img
                  className="skill-img"
                  variant="top"
                  src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
                />
              </Col>
            </CardGroup>
            <CardGroup className="group2">
              <Col md={1}>
                <Card.Img
                  className="skill-img"
                  variant="top"
                  src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
                />
              </Col>
              <Col md={1}>
                <Card.Img
                  className="skill-img"
                  variant="top"
                  src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png"
                />
              </Col>
              <Col md={1}>
                <Card.Img
                  className="skill-img"
                  variant="top"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                />
              </Col>
            </CardGroup>
          </Row>
        </Container>
        <div className="botones">
          <a
            href="https://www.youtube.com/watch?v=bbZAnSNT04w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="custom-button">
              Proyecto Hospital C#
              <svg className="icon" viewBox="0 0 512 600" fill="currentColor">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
              </svg>
            </Button>
          </a>
          <a
            href="https://www.youtube.com/watch?v=scNcEqjliuc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="custom-button">
              Proyecto Hospital Web
              <svg className="icon" viewBox="0 0 512 600" fill="currentColor">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
