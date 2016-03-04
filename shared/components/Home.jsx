import React from 'react';
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";


export default class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
    <Page>
  			  <Hero className="text-center">
        <h1 className="display-4">Educación Open-Source</h1>
        <p className="lead">Crea cursos para alumnos de todo el mundo e inscribete a cursos de mentores de todo el mundo</p>
        
          <Link to="/register" target="_blank" className="btn btn-white">
            Registrate hoy
          </Link>
        
      </Hero>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <h4>Sabiduría Gratis   &nbsp;<i className="small material-icons">trending_up</i></h4>
            <p>Nuestros mentores te guiarán por el camino de la sabiduría,  gracias a sus cursos compartidos de manera <i> publica</i> en internet; o accese a los cursos privados de tus profesores de la escuela. Además, podrás calificar cada curso para mejorar el contenido.</p></div>
          <div>
            <h4>Mentorizate &nbsp; <i className="small material-icons">question_answer</i></h4>
            <p>Conviertete en un mentor, comparte tu sabiduría a través de cursos públicos (o privados) y forja una relación con tus aprendices gracias a nuestro sistema de comunicación óptima entre alumno-mentor. Podrás crear cursos sobre cualquier tema... el conocimiento no tiene limites!</p>
          </div>
          <div>
            <h4>Feedback &nbsp; <i className="small material-icons">swap_horiz</i></h4>
            <p>Como aprendiz, enfócate en tus debilidades y mejora en cada aspecto; como mentor, optimiza tu contenido de enseñanza. Nuestro feedback te otorgará información extra sobre el aprendizaje de los alumnos. Sabrás donde fallan y así te enfocarás mas en mejorar.</p></div>
        </HorizontalSplit>
      </Section>

	</Page>
    	
    );
  }
}
