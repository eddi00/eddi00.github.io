import React from 'react'
import { Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './SkillCards.module.scss'
import { TbWorld } from 'react-icons/tb'
import { HiServer } from 'react-icons/hi'
import { FaDatabase, FaBrain } from 'react-icons/fa'

const SkillCards = () => {
  const { t } = useTranslation('common');

  return (
    <Row className={styles.skillCard_container}>
      <div className={styles.skillCard}>
        <div className={styles.top}>
          <TbWorld size={64} />
          <h4>Frontend</h4>
        </div>
        <div className={styles.bottom}>
          <ul>
            <li>HTML / CSS</li>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>Styled-components</li>
            <li>NextJs</li>
          </ul>
        </div>        
      </div>
      <div className={styles.skillCard}>
        <div className={styles.top}>
          <HiServer size={64} />
          <h4>Backend</h4>
        </div>
        <div className={styles.bottom}>
        <ul>
            <li>NodeJs</li>
            <li>Firebase</li>
            <li>PHP</li>
          </ul>
        </div>              
      </div>
      <div className={styles.skillCard}>
        <div className={styles.top}>
          <FaDatabase size={64} />
          <h4>Databases</h4>
        </div>
        <div className={styles.bottom}>
        <ul>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>FireStore</li>
          </ul>
        </div>              
      </div>
      <div className={styles.skillCard}>
        <div className={styles.top}>
          <FaBrain size={64} />
          <h4>Machine Learning</h4>
        </div>
        <div className={styles.bottom}>
        <ul>
            <li>Anaconda</li>
            <li>Scikit-Learn</li>
            <li>TensorFlow / Keras</li>
          </ul>
        </div>              
      </div>

    </Row>
  )
}

export default SkillCards