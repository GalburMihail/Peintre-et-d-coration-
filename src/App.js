import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Modal, Button , Carousel as BootstrapCarousel } from 'react-bootstrap';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import { FaRegCheckCircle, FaQuoteLeft, FaPhone, FaEnvelope, FaAddressCard, FaArrowLeft, FaArrowRight , FaPhoneAlt } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-multi-carousel/lib/styles.css';

const testimonials = [
  {
    quote: "Monsieur Galbur a repeint notre Rez de chaussée et un dégât des eaux au plafond d'une pièce au 1er étage. Celui ci a fourni une prestation de très grande qualité ( de la protection aux finitions). Il est également très soigneux, sérieux et sympathique ! Nous le recommandons vivement",
    author: "Pierre-Alain M."
  },
  {
    quote: "Mr Galbur a fait les peintures de mon appartement entièrement. Les murs et plafonds sont nickels! La finition est très soignée. Je recommande Mr Galbur pour la grande qualité de son travail et son sérieux.",
    author: "François B."
  },
  {
    quote: "Mihail est très doué. Il as négligé aucunes étapes pour rénover notre intérieur. Protection des sols, ouverture des fissures. Rebou chage avec des enduits spéciaux et entoilage à la fibre de verre de la surface totale. 3 passes d'enduits, ponçage, impression et 2 couches de finition avec de la peinture professionnel à la teinte que nous avons choisi. 15 jours pour rénover plus de 200m2 de murs et plafond en piteuse état d'une vieille meulière de 1900. Aujourd'hui la maison paraît neuve. Faites lui confiance les yeux fermés. Merci encore",
    author: "JP G."
  },  {
    quote: "Nous avons fait appel à M. Galbur pour repeindre notre salle à manger/séjour (murs et plafonds). Nous avons apprécié son travail de qualité et le soin apporté aux finitions des plinthes. Nous l'avons déjà recommandé à plusieurs amis.",
    author: "Bernadette M."
  },
  {
    quote: "Nous avons fait appel à Mihail pour des travaux de peinture et d'enduits dans notre nouvelle maison. (Cuisine, salle à manger, cellier,...) Le travail est d'une qualité exceptionnelle. Notre cuisine est comme neuve avec des finitions soignées. Le chantier a été réalisé dans la durée et au prix prévu. Aucune mauvaise surprise Mihail a eu la gentillesse de nous conseiller sur les matériaux à utiliser ainsi que sur leur entretien. Je recommande fortement cet artisan très professionnel et talentueux. Si vous voulez de la qualité c'est chez lui qu'il faut aller.",
    author: "Axel P."
  },
  {
    quote: "Je vous recommande à mille pour cent cet artisan, conseillé par un ami...qui avait été très satisfait de son travail déjà à l'époque. J'ai donc choisi Mihail et je n'ai pas été déçue. Travail rapide et très soigné. Devis très raisonnable. Ponctuel, souriant... C est un vrai plaisir d'avoir choisi cet artisan.",
    author: "Sonia J."
  },
  {
    quote: "Artisan consciencieux Travail soigné et finitions impeccables Artisan à recommander",
    author: "Alain L."
  },
  {
    quote: "Monsieur Galbur a fait preuve d'un grand professionnalisme. Le travail est soigné et le résultat impeccable. Je l'ai recommandé auprès de mes amis et je vous le recommande également.",
    author: "Christian G."
  },
  {
    quote: "Nous avons fait appel à M. Galbur pour repeindre notre salle à manger/séjour (murs et plafonds). Nous avons apprécié son travail de qualité et le soin apporté aux finitions des plinthes. Nous l'avons déjà recommandé à plusieurs amis.",
    author: "Bernadette M."
  },
  {
    quote: "Tout est parfait extrêmement satisfaite de son travail",
    author: "Josette R."
  },
  {
    quote: "Artisan consciencieux Travail soigné et finitions impeccables Artisan à recommander",
    author: "Alain L."
  }
];

const services = [
  "Peinture Intérieur",
  "Rénovation",
  "Décoration",
  "Réparation de plaques de plâtre",
  "Peinture sur meubles",
  "Fausses finitions",
  "Et autres....."
];

const exteriorCleaningServices = [
  "Nettoyage de façades",
  "Nettoyage de toitures",
  "Nettoyage de murs extérieurs",
  "extration de mousse",
  "Et autres....."
];

const zones = [
  "Paris (75)",
  "Seine-et-Marne (77)",
  "Yvelines (78)",
  "Essonne (91)",
  "Hauts-de-Seine (92)",
  "Val-de-Marne (94)",
  "antony(92160)"
];

const CustomLeftArrow = ({ onClick }) => (
  <button className="custom-arrow left-arrow" onClick={onClick}>
    <FaArrowLeft />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button className="custom-arrow right-arrow" onClick={onClick}>
    <FaArrowRight />
  </button>
);

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelectorAll('.carousel-control-next').forEach((btn) => btn.click());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/asset/renovation-appartement.jpg)`
  };

  const backgroundImaged = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/asset/entreprise-renovation-1.jpg)`
  }

  const backgroundImagetoit = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/asset/nettoyer-la-toiture.jpg)`
  }

  const backgroundImagebottom  = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/asset/house-painter-2.jpg)`
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_28rca8k', 'template_qsfuj2q', form.current, 'G4LEqRO5qWKq6XP9e')
    .then((result) => {
      console.log(result.text);
      toast.success('Demande de devis envoyée avec succès !');
      e.target.reset(); // Vider les champs du formulaire
  }, (error) => {
      console.log(error.text);
      toast.error('Erreur lors de l\'envoi de la demande. Veuillez réessayer.');
  });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='app-header-container'>
        <img className='app-header-image' src={`${process.env.PUBLIC_URL}/asset/logo.png`} alt="Logo Galbur Mihail" />
        <ul className='app-header-list'>
            <li className='app-header-item'>
                      <h2 className='app-header-title'><FaPhoneAlt />{" "}Appelez-nous pour un devis gratuit</h2></li>
            <li className='app-header-item'><a href="tel:0755911602" className='app-header-phone'>07 55 91 16 02</a></li>
          </ul>
        </div>
      </header>

      <section className='app-ecran-1 carousel-container'>
        <CCarousel interval={8000}>
          <CCarouselItem className="app-ecran-1-item">
          <CImage className="app-ecran-1-image" src={`${process.env.PUBLIC_URL}/asset/peintre-caroussel.png`} alt="Peintre professionnel" />
          <CCarouselCaption className="custom-caption">
              <div className="caption-container">
                <div className="satisfaction-label">100% de satisfaction client</div>
                <h5 className='app-ecran-1-subtitle'>Votre projet de Peinture sur mesure:</h5>
                <h1 className='app-ecran-1-title'>Notre spécialité</h1>
              </div>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem className="app-ecran-1-item">
            <CImage className="app-ecran-1-image" src={`${process.env.PUBLIC_URL}/asset/Entretien-dune-toiture.jpg`} alt="nettoyage toiture"/>
            <CCarouselCaption className="custom-caption">
              <div className="caption-container">
                <div className="satisfaction-label">100% de satisfaction client</div>
                <h5 className='app-ecran-1-subtitle'>Entretien  de toiture & facade </h5>
                <h1 className='app-ecran-1-title'>Nos experts à votre service</h1>
              </div>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </section>

      <section className='app-ecran-2'>
        <Container>
          <div className='app-ecran-2-header'>
            <h2 className='app-ecran-2-title'>Nous fournissons des services complets</h2>
          </div>
          <Row>
            <Col>
              <Card className='app-ecran-2-card'>
                <Card.Body>
                  <Card.Img className='app-ecran-2-image ' variant="top" src={`${process.env.PUBLIC_URL}/asset/peinture-Bleu_kirtk0wp.jpg`} />
                  <Card.Title>Peinture Intérieur & Décoration</Card.Title>
                  <Card.Text>
                  Transformez votre espace de vie en un véritable chef-d'œuvre avec notre service de peinture d'intérieur professionnel, apportant couleurs et élégance à chaque pièce de votre maison, et donnez vie à vos idées de décoration en laissant notre équipe de peintres expérimentés sublimer vos murs, plafonds et boiseries, offrant ainsi une atmosphère unique et personnalisée à votre espace intérieur.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/asset/loger-Bleu_ycxrjejq.jpg`} alt="Service de rénovation" />
                <Card.Title>Rénovation</Card.Title>
                  <Card.Text>
                    Donnez une nouvelle vie à votre propriété en optant pour notre service de peinture en rénovation, apportant fraîcheur et modernité à vos espaces intérieurs et extérieurs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/asset/nettoyeur.jpg`} alt="Nettoyage extérieur professionnel" />
                <Card.Title>Néttoyage extérieur</Card.Title>
                  <Card.Text>
                  Redonnez éclat et propreté à l'extérieur de votre maison grâce à notre service de nettoyage extérieur professionnel. Que ce soit pour le nettoyage de façades, de toitures, de terrasses, de murs extérieurs, de clôtures ou de piscines, notre équipe utilise des produits biologiques sans javel ni acide pour éliminer les mousses, les lichens et les champignons.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='app-ecran-3' style={backgroundImage}>
        <div className='app-ecran-3-container'>
          <ul className='app-ecran-3-list'>
            <li className='app-ecran-3-item'>
              <p className='app-ecran-3-text'>Appelez-nous pour un <h2 className='app-ecran-3-title'>Devis Gratuit !</h2></p>
            </li>
            <li className='app-ecran-3-item'>
              <a className='app-ecran-3-element' href="tel:0755911602">07 55 91 16 02</a>
            </li>
          </ul>
        </div>
      </section>
      <section className='app-ecran-4'>
        <Container>
          <Row>
            <Col md={6}>
              <BootstrapCarousel controls={true} indicators={false} interval={5000}>
                <BootstrapCarousel.Item>
                <img className="app-ecran-6-image" src={`${process.env.PUBLIC_URL}/asset/peinture-1.jpg`} alt="Service de peinture" />
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                <img className="app-ecran-6-image" src={`${process.env.PUBLIC_URL}/asset/peinture-2.jpg`} alt="Décoration intérieure" />
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                <img className="app-ecran-6-image" src={`${process.env.PUBLIC_URL}/asset/peinture-3.jpg`} alt="Service de peinture" />
                </BootstrapCarousel.Item>
              </BootstrapCarousel>
            </Col>
            <Col md={6}>
              <h3 className='app-ecran-4-subtitle'>Pour votre résidence, </h3>
              <h2 className='app-ecran-4-title'>Nous avons tout ce qu'il faut !</h2> 
              <p className='app-ecran-4-text'>
                Pour votre résidence personnelle, nous fournissons les meilleurs services de peinture et décoration. 
                Nous sommes des experts expérimentés et sympathiques qui fournissent toujours les meilleures prestations pour réaliser les projets de nos clients.
              </p>
              <ul>
                <li><FaRegCheckCircle /> Rénovation éclatante : Expert en peinture, murs & boiseries resplendissants</li>
                <li><FaRegCheckCircle /> Expertise polyvalente : Résidentiel, finition impeccable</li>
                <li><FaRegCheckCircle /> Délais respectés, satisfaction garantie : Service fiable, délais convenus</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='app-ecran-5' style={backgroundImaged}>
        <div className='app-ecran-5-container'>
          <h2 className='app-ecran-5-title'>100% Service de Qualité</h2>
        </div>
      </section>
      <section className='app-ecran-6'>
        <Container>
          <Row>
            <Col md={6}>
              <BootstrapCarousel controls={true} indicators={false} interval={5000}>
                <BootstrapCarousel.Item>
                <img className="app-ecran-6-image" src={`${process.env.PUBLIC_URL}/asset/image-1-to.jpg`} alt="Nettoyage de toiture" />
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                <img className="app-ecran-6-image" src={`${process.env.PUBLIC_URL}/asset/toiture-1.png`} alt="Nettoyage de façade" />
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                <img className="app-ecran-6-image" src={`${process.env.PUBLIC_URL}/asset/toiture-2.png`} alt="Traitement anti-verdissures" />
                </BootstrapCarousel.Item>
              </BootstrapCarousel>
            </Col>
            <Col md={6}>
              <h2 className='app-ecran-6-title'>Nous avons tout ce qu'il faut !</h2>
              <p className='app-ecran-6-text'>
                Pour votre résidence, nous fournissons les meilleurs services de nettoyage de toiture, de façade, de démoussage, de traitement anti-verdissures, lichens et champignons. 
                Nos traitements sont réalisés avec des produits biologiques sans javel et sans acide, garantissant ainsi la sécurité et la durabilité de vos surfaces.
              </p>
              <ul>
                <li><FaRegCheckCircle /> Nettoyage de toiture & façade</li>
                <li><FaRegCheckCircle /> Démoussage</li>
                <li><FaRegCheckCircle /> Traitement anti-verdissures, lichens et champignons</li>
                <li><FaRegCheckCircle /> Traitements avec des produits biologiques sans javel et sans acide</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='app-ecran-7' style={backgroundImagetoit}>
        <Container className='app-ecran-7-container'>
          <h2>Nos retours clients :</h2>
          <Carousel 
            responsive={responsive} 
            ssr={true} 
            infinite={true} 
            autoPlay={true} 
            autoPlaySpeed={5000} 
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ padding: '20px' }}>
                <Card className="h-100">
                  <Card.Body>
                    <FaQuoteLeft size={48} className="mb-3"/>
                    <Card.Text>"{testimonial.quote}"</Card.Text>
                    <Card.Footer className="text-muted">
                      <cite>{testimonial.author}</cite>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </Container>
      </section>
      <section className='app-ecran-8'>
        <div className='app-ecran-8-container'>
          <h2>Faire une demande rapide</h2>
          <div>
          <form ref={form} onSubmit={sendEmail}>
          <ul className='app-ecran-8-list'>
            <li><h4>Vos informations</h4></li>
            <li><input name="from_name" placeholder='Votre nom' type="text" required /></li>
            <li><input name="reply_to" placeholder='Email' type="email" required /></li>
            <li><input name="phone" placeholder='Téléphone' type="text" required /></li>
            <li><textarea name="message" placeholder='Votre message' required /></li>
            <li><button type="submit">Envoyer votre demande de devis</button></li>
          </ul>
        </form>
        <ToastContainer />
          </div>
        </div>
      </section>
      <section className='app-ecran-9' style={backgroundImagebottom}>
    <Container className='app-ecran-9-container'>
      <Row>
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/asset/logo.png`} alt="Logo" />
              <Card.Text>
                <p><FaPhone /> 07 55 91 16 02</p>
                <p><FaEnvelope /> galburmihail@gmail.com</p>
                <p><FaAddressCard /> SIRET : 79153876200042</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <h4>Services intérieur</h4>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </Col>
        <Col md={3}>
          <h4>Services extérieur</h4>
          <ul>
            {exteriorCleaningServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </Col>
        <Col md={3}>
          <h4>Zones desservies</h4>
          <ul>
            {zones.map((zone, index) => (
              <li key={index}>{zone}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <div className="privacy-policy" onClick={handleShow}>
        Politique de confidentialité
      </div>
    </Container>
  </section>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Politique de confidentialité</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Votre vie privée est importante pour nous. Cette politique de confidentialité explique quelles informations personnelles nous collectons, comment nous les utilisons et comment nous les protégeons.</p>
          <p><strong>1. Collecte d'informations :</strong></p>
          <p>Nous collectons des informations lorsque vous remplissez notre formulaire de contact, telles que votre nom, adresse e-mail, numéro de téléphone et votre message.</p>
          <p><strong>2. Utilisation des informations :</strong></p>
          <p>Les informations collectées peuvent être utilisées pour :</p>
          <ul>
            <li>Répondre à vos demandes de devis et de services</li>
            <li>Améliorer notre service client et répondre à vos besoins de manière plus efficace</li>
            <li>Vous contacter par e-mail ou par téléphone pour des questions liées à vos demandes</li>
          </ul>
          <p><strong>3. Protection des informations :</strong></p>
          <p>Nous mettons en œuvre diverses mesures de sécurité pour protéger vos informations personnelles. Vos informations personnelles sont contenues derrière des réseaux sécurisés et ne sont accessibles qu'à un nombre limité de personnes ayant des droits d'accès spéciaux à ces systèmes, et sont tenues de maintenir la confidentialité des informations.</p>
          <p><strong>4. Partage des informations :</strong></p>
          <p>Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers, sauf pour vous fournir les services demandés.</p>
          <p><strong>5. Consentement :</strong></p>
          <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
          <p><strong>6. Modifications de notre politique de confidentialité :</strong></p>
          <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera affichée sur cette page.</p>
          <p>Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse suivante : galburmihail@gmail.com</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
