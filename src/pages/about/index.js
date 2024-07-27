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
    description:
      "Uso la versión profesional de IntelliJ IDEA desde que comencé a programar. Estoy muy familiarizado con sus herramientas, incluyendo la compilación, depuración, y la interacción con bases de datos, lo que me permite desarrollar aplicaciones eficientemente.",
  },
  {
    src: SpringIcon,
    alt: "Spring Icon",
    label: "Backend",
    description:
      "He desarrollado todas mis aplicaciones web utilizando el framework Spring Boot, con el que estoy profundamente familiarizado. Mi experiencia incluye trabajar con JWT, Spring Security, arquitectura de microservicios, el modelo MVC, y controladores. También tengo práctica en la integración de Spring Boot con Hibernate para la gestión de bases de datos.",
  },
  {
    src: JavaIcon,
    alt: "Java Icon",
    label: "Backend",
    description:
      "Java fue mi primer lenguaje de programación y tengo una sólida comprensión de sus principios, especialmente en la programación orientada a objetos (OOP). Mi agilidad con el lenguaje se ha fortalecido a través del aprendizaje de estructuras de datos y algoritmos, lo que me permite escribir código eficiente y bien estructurado.",
  },
  {
    src: LinuxIcon,
    alt: "Linux Icon",
    label: "Backend",
    description:
      "Mi curiosidad por la ciberseguridad me llevó a adquirir bastante conocimiento sobre Linux, llegué a usar exclusivamente su línea de comandos durante varios meses en mi ordenador personal. Además, he desplegado mis proyectos en la nube, lo que ha reforzado mi experiencia práctica con Linux en entornos de servidor y gestión de sistemas.",
  },
  {
    src: BashIcon,
    alt: "Bash Icon",
    label: "Backend",
    description:
      "Aunque mi experiencia con Bash es limitada, he escrito varios scripts que me ayudaron a resolver problemas específicos mientras aprendía conceptos fundamentales de Linux. Estos scripts facilitaron mi comprensión y manejo del sistema operativo, demostrando mi capacidad para aplicar conocimientos prácticos en situaciones reales.",
  },
  {
    src: DockerIcon,
    alt: "Docker Icon",
    label: "Backend",
    description:
      "Utilizo Docker para contenerizar mis proyectos, facilitando así su despliegue en la nube. Este enfoque me ha llevado a adquirir un conocimiento considerable sobre el funcionamiento de Docker. Poseo una comprensión sólida de su uso y gestión, lo que me permite implementar soluciones eficientes y escalables en entornos de nube.",
  },
  {
    src: MySQLIcon,
    alt: "MySQL Icon",
    label: "Backend",
    description:
      "Uso MySQL como mi sistema principal de gestión de bases de datos, manejando con facilidad las bases de datos relacionales. Mi experiencia me permite diseñar y optimizar esquemas de datos eficientemente.",
  },
  {
    src: HibernateIcon,
    alt: "Hibernate Icon",
    label: "Backend",
    description:
      "En todos mis proyectos, integro Hibernate con Spring Boot, lo que me permite gestionar eficazmente la persistencia de datos y optimizar el acceso a bases de datos relacionales.",
  },
  {
    src: AWSIcon,
    alt: "AWS Icon",
    label: "Backend",
    description:
      "He interactuado extensivamente con AWS durante mi proceso de aprendizaje, desplegando numerosas máquinas y utilizando servicios como RDS, EC2, y VPC. Esta experiencia me ha proporcionado una sólida comprensión de la infraestructura en la nube y sus aplicaciones prácticas.",
  },
  {
    src: ApiIcon,
    alt: "API Icon",
    label: "Backend",
    description:
      "En mis proyectos full-stack, he desarrollado numerosos endpoints API, facilitando la interacción entre el usuario y el cliente. Esta experiencia me ha permitido adquirir conocimiento en el diseño y la implementación de APIs robustas y eficientes.",
  },
  {
    src: JavaScriptIcon,
    alt: "JavaScript Icon",
    label: "Frontend",
    description:
      "Tuve que aprender JavaScript para desarrollar componentes interactivos en los clientes web que creaba, para interactuar mis APIs. La transición fue bastante fácil, por mi experiencia previa en programación con Java, lo cual facilitó mi comprensión y manejo efectivo de JavaScript.",
  },
  {
    src: CSSIcon,
    alt: "CSS Icon",
    label: "Frontend",
    description:
      "Me comprometí a usar exclusivamente CSS, sin ayuda de bibliotecas externas, en mi proyecto 'uallapop' para perfeccionar mis habilidades. Tras varias semanas de, he alcanzado bastante fluidez con CSS, lo que me permite crear interfaces de usuario responsivas con facilidad",
  },
  {
    src: HtmlIcon,
    alt: "HTML Icon",
    label: "Frontend",
    description:
      "Aunque HTML es fundamental y se puede aprender rápidamente, lo he utilizado desde mis inicios en el desarrollo backend, inicialmente a través de Thymeleaf en Spring. Esta experiencia me ha permitido implementar estructuras web efectivas",
  },
  {
    src: ReactIcon,
    alt: "React Icon",
    label: "Frontend",
    description:
      "Utilizo React en todos mis proyectos, lo que me ha llevado a profundizar en numerosos conceptos avanzados como hooks, componentes funcionales, y el estado y ciclo de vida de los componentes. Aunque no me especializo exclusivamente en el frontend, mi experiencia trabajando con React es tal que podría desarrollar una página web completa sin dificultades.",
  },
  {
    src: GitIcon,
    alt: "Git Icon",
    label: "Tools",
    description:
      "Desde mis comienzos como desarrollador, he utilizado Git como mi sistema de control de versiones. Mi experiencia incluye ramificaciones, fusiones y resolución de conflictos.",
  },
  {
    src: GithubIcon,
    alt: "GitHub Icon",
    label: "Tools",
    description:
      "Uso GitHub desde el inicio de mi carrera como plataforma principal para alojar mis proyectos de código. Esta herramienta me ha permitido gestionar de manera efectiva mis repositorios, realizar seguimientos de cambios y manejar versiones de forma organizada. Aunque he utilizado GitHub de manera individual, he usado sus funcionalidades para mejorar la documentación de mis proyectos y facilitar la implementación de prácticas de integración continua, optimizando mi flujo de trabajo de desarrollo personal",
  },
  {
    src: MavenIcon,
    alt: "Maven Icon",
    label: "Tools",
    description:
      "He utilizado Maven en muchos de mis proyectos para gestionar y desplegar aplicaciones, lo que me ha permitido familiarizarme cómodamente con sus funcionalidades. Como la gestión de dependencias, automatización de compilaciones y la integración con sistemas de control de versiones. Además, he utilizado Maven para la ejecución de pruebas automatizadas y la generación de informes.",
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
            <h1 className="display-4 mb-4">Perfil profesional</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <h3 className="color_sec mb-5">{dataabout.title}</h3>
          <div>
            <p style={{ whiteSpace: "pre-wrap" }}>{dataabout.aboutme}</p>
          </div>
        </Row>
        <h3 className="color_sec mb-5">Tech Stack</h3>
        <Row className="sec_sp">
          {["Backend", "Frontend", "Tools"].map((section, index) => (
            <Col
              key={section}
              lg={index === 0 ? "4" : "3"}
              className="tech-stack-section pers-card1"
              onClick={() => toggleSection(section)}
            >
              <h3 className="color_sec tech-stack-title">
                <small>{section}</small>
              </h3>
              <div
                className="tech-stack-icons "
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
                    </div>
                  ))}
              </div>
            </Col>
          ))}
        </Row>
        {visibleSection && (
          <div className="tech-stack-popup">
            <div className="tech-stack-popup-content">
              <button
                className="tech-stack-popup-close"
                onClick={() => toggleSection(null)}
              >
                &times;
              </button>
              <h3 className="color_sec tech-stack-title">
                <small>{visibleSection}</small>
              </h3>
              <div className="tech-stack-icons visible">
                {techStackIcons
                  .filter((icon) => icon.label === visibleSection)
                  .map((icon) => (
                    <div className="tech-stack-icon-container" key={icon.src}>
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="tech-stack-icon"
                      />
                      <span className="tech-stack-icon-text">
                        {icon.description}
                        <hr />
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Resumen</h3>
          </Col>
          <Col lg="9">
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
