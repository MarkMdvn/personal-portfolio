import React from "react";
import "./portfolio.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub } from "react-icons/fa";
import StackIcon from "tech-stack-icons";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <img href={data.link} src={data.img} alt={data.title} />
              <div className="content">
                <p>
                  {" "}
                  {data.description.split("\n").map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </p>
                <div
                  className="project-btn-row"
                  style={{ textDecoration: "none" }}
                >
                  <a href={data.link}>
                    <FaGithub />
                    GitHub Link
                  </a>
                  <a href={data.link}>View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
