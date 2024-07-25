import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import IntelliJIcon from "../../assets/icons/techStackIcons/IntelliJ_IDEA_Icon.svg";
import SpringIcon from "../../assets/icons/techStackIcons/spring-icon-svgrepo-com.svg";
import JavaIcon from "../../assets/icons/techStackIcons/Java_programming_language_logo.svg";
import LinuxIcon from "../../assets/icons/techStackIcons/linux-svgrepo-com.svg";
import JavaScriptIcon from "../../assets/icons/techStackIcons/js-official-svgrepo-com.svg";
import BashIcon from "../../assets/icons/techStackIcons/bash-icon-svgrepo-com.svg";
import CSSIcon from "../../assets/icons/techStackIcons/css-3-svgrepo-com.svg";
import DockerIcon from "../../assets/icons/techStackIcons/docker-icon-svgrepo-com.svg";
import GitIcon from "../../assets/icons/techStackIcons/git-svgrepo-com.svg";
import GithubIcon from "../../assets/icons/techStackIcons/github-142-svgrepo-com.svg";
import HtmlIcon from "../../assets/icons/techStackIcons/html-5-svgrepo-com.svg";
import MavenIcon from "../../assets/icons/techStackIcons/maven-svgrepo-com.svg";
import MySQLIcon from "../../assets/icons/techStackIcons/mysql-svgrepo-com.svg";
import ReactIcon from "../../assets/icons/techStackIcons/react-svgrepo-com.svg";
import HibernateIcon from "../../assets/icons/techStackIcons/hibernate-svgrepo-com.svg";
import AWSIcon from "../../assets/icons/techStackIcons/aws-svgrepo-com.svg";
import ApiIcon from "../../assets/icons/techStackIcons/api-interface-svgrepo-com.svg";

const techStackIcons = [
  {
    src: IntelliJIcon,
    alt: "IntelliJ IDEA",
    label: "Backend",
    description: "IDE for Java development",
  },
  {
    src: SpringIcon,
    alt: "Spring Icon",
    label: "Backend",
    description: "Java framework",
  },
  {
    src: JavaIcon,
    alt: "Java Icon",
    label: "Backend",
    description: "Programming language",
  },
  {
    src: LinuxIcon,
    alt: "Linux Icon",
    label: "Backend",
    description: "Operating system",
  },
  {
    src: BashIcon,
    alt: "Bash Icon",
    label: "Backend",
    description: "Shell scripting",
  },
  {
    src: DockerIcon,
    alt: "Docker Icon",
    label: "Backend",
    description: "Containerization",
  },
  {
    src: MySQLIcon,
    alt: "MySQL Icon",
    label: "Backend",
    description: "Database",
  },
  {
    src: HibernateIcon,
    alt: "Hibernate Icon",
    label: "Backend",
    description: "ORM for Java",
  },
  {
    src: AWSIcon,
    alt: "AWS Icon",
    label: "Backend",
    description: "Cloud services",
  },
  {
    src: ApiIcon,
    alt: "API Icon",
    label: "Backend",
    description: "API development",
  },
  {
    src: JavaScriptIcon,
    alt: "JavaScript Icon",
    label: "Frontend",
    description: "Programming language",
  },
  {
    src: CSSIcon,
    alt: "CSS Icon",
    label: "Frontend",
    description: "Styling language",
  },
  {
    src: HtmlIcon,
    alt: "HTML Icon",
    label: "Frontend",
    description: "Markup language",
  },
  {
    src: ReactIcon,
    alt: "React Icon",
    label: "Frontend",
    description: "JavaScript library",
  },
  {
    src: GitIcon,
    alt: "Git Icon",
    label: "Tools",
    description: "Version control",
  },
  {
    src: GithubIcon,
    alt: "GitHub Icon",
    label: "Tools",
    description: "Code hosting",
  },
  {
    src: MavenIcon,
    alt: "Maven Icon",
    label: "Tools",
    description: "Build automation",
  },
];

export const About = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Developer profile</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <h3 className="color_sec mb-5">{dataabout.title}</h3>
          <div>
            <p>{dataabout.aboutme}</p>
          </div>
        </Row>
        <h3 className="color_sec mb-5">Tech stack</h3>
        <Row className="sec_sp">
          {["Backend", "Frontend", "Tools"].map((section, index) => (
            <Col
              key={section}
              lg={index === 0 ? "4" : "3"}
              className={`tech-stack-section ${
                visibleSection === section ? "expanded" : ""
              }`}
              onClick={() => toggleSection(section)}
            >
              <h3 className="color_sec tech-stack-title">
                <small>{section}</small>
              </h3>
              <div
                className={`tech-stack-icons ${
                  visibleSection === section ? "visible" : ""
                }`}
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {techStackIcons
                  .filter((icon) => icon.label === section)
                  .map((icon) => (
                    <div className="tech-stack-icon-container" key={icon.src}>
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="tech-stack-icon"
                      />
                      <span className="tech-stack-icon-text"></span>
                    </div>
                  ))}
              </div>
            </Col>
          ))}
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
