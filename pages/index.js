import Head from "next/head";
import { ni18nConfig } from "../src/localization/config";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";

import { IoMdHeart } from "react-icons/io";
import Link from "next/link";
import Header from "../src/components/Header/Header.component";
import HeroAnimation from "../src/components/HeroAnimation/HeroAnimation.component";
import { loadTranslations } from "ni18n";

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

      <main>
        <Container className="mb-5">
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


        <Container className="min-vh-100" id="about-me">
          <Row className="text-center">
            <h2 className="mt-5">{t("about-me-title")}</h2>
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
          <Row className="min-vh-60">
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img data-aos="fade-right" className="img-fluid" src="/img/running.jpg" />
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className={styles.aboutme_card}>
                {t("about-me-section2-text")}
              </div>
            </Col>
          </Row>
          {/* <Row className="vh-10"></Row> */}

        </Container>

        {/* <Container >
          <Row className="vh-10">
           <br />
          </Row>
        </Container> */}

        <Container className="min-vh-100" id="projects">
          <Row className="text-center">
            <h2 className="mb-2 mt-5">{t("projects-title")}</h2>
            {/* <h6 className="c-grey-300">{t("projects-subtitle")}</h6> */}
          </Row>
          <Row className="min-vh-40">
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div className={styles.project_card}>
                <h3>{t("project1-title")}</h3>
                <p>
                  {t("project1-description")}
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="/img/running.jpg" />
            </Col>
          </Row>
          <Row className="min-vh-40">
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div className={styles.project_card}>
                <h3>{t("project2-title")}</h3>
                <p>
                  {t("project2-description")}
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="/img/running.jpg" />
            </Col>
          </Row>
          <Row className="min-vh-40">
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div className={styles.project_card}>
                <h3>{t("project3-title")}</h3>
                <p>
                  {t("project3-description")}
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img className="img-fluid" src="/img/running.jpg" />
            </Col>
          </Row>
        </Container>

        <Container className="min-vh-100" id="skills">
          <Row className="text-center">
            <h2 className="mb-2 mt-5">{t("skills-title")}</h2>
            {/* <h6 className="c-grey-300">{t("projects-subtitle")}</h6> */}
          </Row>
        </Container>

        <Container id="contact">
          <Row className="text-center mt-5">
            <h2 className="mb-2">{t("contact-me-title")}
            </h2>
          </Row>
          <Row>
            <p className="my-3">{t("contact-me-text")} 
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
              <a href="http://www.nextjs.org/" target="_blank">
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