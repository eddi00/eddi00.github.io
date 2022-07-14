import Head from "next/head";
import { ni18nConfig } from "../src/localization/config";
import styles from "../styles/Home.module.scss";

import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";

import { IoMdHeart } from "react-icons/io";
import { MdEmail } from "react-icons/md"
import Header from "../src/components/Header/Header.component";
import HeroAnimation from "../src/components/HeroAnimation/HeroAnimation.component";
import { loadTranslations } from "ni18n";
import SkillCards from "../src/components/SkillCards/SkillCards.component";

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>Eduard - Fullstack web-developer</title>
        <meta
          name="description"
          content="Eduard - Fullstack developer - Personal site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main id="home">
        <div  className="bg-light">
          <Container className="mt-5">
            <Row>
              <Col
                md={6}
                className="d-flex  align-items-center min-vh-70"
              >
                <div className="p-2">
                  <h1>{t("hero-title1")}</h1>
                  <h1>{t("hero-title2")}</h1>
                  <h5 className="w-75 mt-2">{t("hero-subtitle")}</h5>
                </div>
              </Col>
              <Col
                md={6}
                className="min-vh-70"
                
              >
                <HeroAnimation />
              </Col>
            </Row>
          </Container>
        </div>


        <Container id="about-me">
          <Row className="text-center">
            <h2 className="mt-5 pt-5">{t("about-me-title")}</h2>
          </Row>
          <Row className="min-vh-60">
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div className={styles.aboutme_card}>
                {t("about-me-section1-text")}
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img data-aos="fade-left" className=" img-fluid" src="/img/aboutme.png" />
            </Col>
          </Row>
          <Row className="min-vh-70">
            <Col md={6} className="d-flex align-items-center justify-content-center d-none d-sm-block">
              <img data-aos="fade-right" className="img-fluid " src="/img/running.jpg" />
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className={styles.aboutme_card}>
                {t("about-me-section2-text")}
              </div>
            </Col>
          </Row>

        </Container>

        <Container id="projects">
          <Row className="text-center mb-5 ">
            <h2 className="mb-2 mt-5 pt-4">{t("projects-title")}</h2>
          </Row>

          <Row className={`min-vh-40 ${styles.project_card}`} >
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div>
                <h3>{t("project1-title")}</h3>
                <h6>Backend solution</h6>
                <p>
                  {t("project1-description")}
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="/img/projects/backend.png" />
            </Col>
          </Row>

          <Row className={`min-vh-40 ${styles.project_card}`} >
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div>
                <h3>{t("project2-title")}</h3>
                <a target="_blank" href="https://www.lighthousemuseum.ru" rel="noreferrer">
                  <h6>www.lighthousemuseum.ru</h6>
                </a>
                <p>
                  {t("project2-description")}
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="/img/projects/lhm.png" />
            </Col>
          </Row>

          <Row className={`min-vh-40 ${styles.project_card}`} >
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div>
                <h3>{t("project3-title")}</h3>
                <a target="_blank" href="https://www.vodahimki.ru" rel="noreferrer">
                  <h6>www.vodahimki.ru</h6>
                </a>
                <p>
                  {t("project3-description")}
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="/img/projects/himki.png" />
            </Col>
          </Row>

          <Row className={`min-vh-40 ${styles.project_card}`} >
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div>
                <h3>{t("project4-title")}</h3>
                <a target="_blank" href="https://www.vodadolgoprudny.ru" rel="noreferrer">

                  <h6>www.vodadolgoprudny.ru</h6>
                </a>
                <p>
                  {t("project4-description")}
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="/img/projects/dolgo.png" />
            </Col>
          </Row>

          <Row className={`min-vh-40 ${styles.project_card}`} >
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div>
                <h3>{t("project5-title")}</h3>
                <a target="_blank" href="https://brubeck-nextjs-wordpress.vercel.app/" rel="noreferrer">

                  <h6>https://brubeck-nextjs-wordpress.vercel.app/</h6>
                </a>
                <p>
                  {t("project5-description")}
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="/img/projects/e-commerce.png" />
            </Col>
          </Row>

          {/* <Row className="vh-10">
           <br />
          </Row> */}
        </Container>

        <Container className="min-vh-90" id="skills">
          <Row className="text-center">
            <h2 className="mb-2 mt-5 pt-4">{t("skills-title")}</h2>
            {/* <h6 className="c-grey-300">{t("projects-subtitle")}</h6> */}
          </Row>
          
          <SkillCards />
          
        </Container>

        <Container id="contact" className="min-vh-50">
          <Row className="text-center mt-5">
            <h2 className="mb-4 ">{t("contact-me-title")}
            </h2>
          </Row>
          <Row>
            <MdEmail size={30} />
            <p className="my-3 text-center">{t("contact-me-text")} 
              <a href="mailto: eduard.beliaev@gmail.com">eduard.beliaev@gmail.com</a>
            </p>
          </Row>
        </Container>
      </main>

      <footer>
        <Container fluid className="bg-dark">
          <Row>
            <Col className="text-light text-center my-3">
              {t("below-footer-p1")} <IoMdHeart color="red" />{" "}
              {t("below-footer-p2")}{" "}
              <a href="http://www.nextjs.org/" target="_blank" rel="noreferrer">
                NextJS
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export const getStaticProps = async (props) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, props.locale, [
        'common',
      ])),
    },
  }
}