import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";

import { IoMdHeart } from "react-icons/io";
import Link from "next/link";
import Header from "../src/components/Header/Header.component";
import HeroAnimation from "../src/components/HeroAnimation/HeroAnimation.component";

export default function Home() {
  const { t } = useTranslation();

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
        <Container>
          <Row className={styles.hero}>
            <Col
              md={6}
              className="d-flex flex-column justify-content-center vh-80"
            >
              <h1>{t("hero-title")}</h1>
              <h5 className="w-75">{t("hero-subtitle")}</h5>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <HeroAnimation />
            </Col>
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
