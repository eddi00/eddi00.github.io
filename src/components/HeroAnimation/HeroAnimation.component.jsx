import Image from "next/image";
import React from "react";
import { useSpring, animated } from 'react-spring'
import styles from "./HeroAnimation.module.scss"
import profilePic from '../../../public/img/Eduard-photo.jpg'

const HeroAnimation = () => {
  const photoAnimation = useSpring({
    loop: true,
    to: [
      { transform: "translate3d(0px, 20px, 0px)" },
      { transform: "translate3d(0px, 0px, 0px)" },

    ],
    from: { transform: "translate3d(0px, 0px, 0px)"},
    config: {
      duration: 3000
    }
  })

  const circleAnimation1 = useSpring({
    loop: true,
    to: [
      { transform: "translate3d(100px, 40px, 0px)" },
      { transform: "translate3d(100px, 0px, 0px)" },

    ],
    from: { transform: "translate3d(100px, 0px, 0px)"},
    config: {
      duration: 1500
    }
  })

  const circleAnimation2 = useSpring({
    loop: true,
    to: [
      { transform: "translate3d(-100px, -20px, 0px)" },
      { transform: "translate3d(-100px, 150px, 0px)" },

    ],
    from: { transform: "translate3d(-100px, 150px, 0px)"},
    config: {
      duration: 2000
    }
  })

  // ...
  return <div className={styles.circle_container}>
    <animated.div style={circleAnimation1}><div className={styles.circle1}></div></animated.div>
    <animated.div style={circleAnimation2}><div className={styles.circle2}></div></animated.div>
    {/* <animated.div style={photoAnimation}> */}
      <div className={styles.photo_circle}>
        <Image src={profilePic} alt="Eduard" layout="fixed" quality={100} width="280px" height="280px"/>
      </div>
    {/* </animated.div> */}
  </div>
};

export default HeroAnimation;
