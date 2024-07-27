const logotext = "M A R K";
const meta = {
  title: "Mark Mordvin",
  description: "I'm Mark Mordvin, a fullstack developer working in Madrid",
};

const introdata = {
  title: "Mark Mordvin",
  animated: {
    first: "Desarrollador backend",
    second: "Entusiasta de Linux",
    third: "ciberseguridad",
  },
  description:
    "Desarrollador backend con dos años de trayectoria. Comprueba mis proyectos para ver lo que puedo hacer!",
  your_img_url:
    "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const dataabout = {
  title: "Sobre mí",
  aboutme: `Soy un desarrollador backend con más de un año dedicado al desarrollo independiente, complementado con sólidos conocimientos en frontend y DevOps. Mis proyectos no solo reflejan una amplia gama de habilidades técnicas, sino también mi capacidad para convertir ideas en soluciones funcionales y eficientes.\n\nTengo una profunda fascinación por el mundo de la informática, especialmente por la programación y la ciberseguridad, áreas que considero cruciales en nuestra era digital. Sigo desarrollando proyectos por mi cuenta, aprendiendo todos los días y manteniéndome activamente involucrado en el mundo del software, lo que me permite estar siempre al día con las últimas tendencias y tecnologías.`,
};
const worktimeline = [];

const skills = [];

const services = [
  {
    title: "Backend",
    description:
      "Me especializo en el desarrollo backend, trabajando con Java y un amplio rango de tecnologías necesarias para crear aplicaciones robustas y escalables. Mis proyectos demuestran mi experiencia, destacando la creación de APIs REST y en la interacción avanzada con bases de datos. Tengo competencia en la implementación de soluciones de seguridad como autenticación y autorización, así como en la integración y manejo eficiente de servicios en la nube y herramientas DevOps para optimizar el despliegue y la operatividad de los proyectos.",
  },
  {
    title: "Frontend",
    description:
      "Aunque no sea mi especialidad, me muevo con bastante soltura en el mundo del frontend, manejando HTML, CSS, Bootstrap, JavaScript y React para crear  interfaces de usuario atractivas y funcionales. Mis proyectos reflejan mis habilidades en integrar APIs y crear experiencias de usuario fluidas.",
  },
  {
    title: "Conocimientos adicionales",
    description:
      "Además de mis habilidades en el desarrollo, poseo un amplio conocimiento en hardware, servidores, cloud y networking. He completado cursos como CompTIA A+, CompTIA Linux+ y CCNA. Tengo formación en  Python y Bash. Estos conocimientos los conseguí por curiosidad e interés propio, pero me han ayudado en muchas ocasiones.",
  },
];

const dataportfolio = [
  {
    img: "https://raw.githubusercontent.com/MarkMdvn/uallapop/main/WallapopClient/public/github-images/main-img.png",
    description:
      "Este proyecto es un clon completo y funcional de Wallapop, creado con Spring Boot, React y MySQL. \nIncluye funcionalidades como autenticación de usuarios, un listado de artículos dinámico con múltiples categorías, además de búsqueda integrada con opciones de filtrado y un sistema de mensajería sencillo. Pruébalo ;)",
    link: "https://github.com/MarkMdvn/uallapop",
  },
  {
    img: "https://raw.githubusercontent.com/MarkMdvn/FarHouse/main/Hotel-Project-Frontend/public/readme-images/1-Main-Homepage.png",
    description:
      "Aplicación web de gestión hotelera full-stack. Permite crear cuentas de usuario, hacer reservas de habitaciones y cuenta con un panel de administración. \nEntre las funcionalidades se incluyen uso de JWT para la seguridad, creación de habitaciones desde el panel de admin, y la gestión de reservas, etc.",
    link: "https://github.com/MarkMdvn/FarHouse",
  },
];

const contactConfig = {
  YOUR_EMAIL: "mark.mdvn@gmail.com",
  description:
    "Creo que mandar un mensaje por LinkedIn es más rápido, pero si prefieres usar esto, aquí lo tienes! ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_i769wkd",
  YOUR_TEMPLATE_ID: "template_zp7r3da",
  YOUR_USER_ID: "ECNXpdxd1lLpl1gCi",
};

const socialprofils = {
  github: "https://github.com/MarkMdvn",
  linkedin: "https://www.linkedin.com/in/markmdvn",
  cv: "https://drive.google.com/file/d/19HfwOx1k5npjJbSv9WDHIb20LwLlf_aT/view?usp=drive_link",
};

const techStack = {};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
