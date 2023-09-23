import HR from 'components/HR';
import Navbar from 'sections/landing/Navbar';
import styled from 'styled-components';
import Header from 'sections/landing/Header';
import Intro from 'sections/landing/Intro';
import PurpleLens from '../assets/header-purple-lens-left.svg';
import PurpleLens2 from '../assets/header-purple-lens-right.svg';
import RulesLeft from '../assets/rules-pp-left.svg';
import RulesRight from '../assets/rules-pp-left.svg';
import Metrix from '../assets/header-metrix.svg';
import Star from '../assets/star.svg';
import StarLight from '../assets/header-star-light.svg';
import Rules from 'sections/landing/Rules';
import Judge from 'sections/landing/Judge';
import Faqs from 'sections/landing/Faqs';
import Timeline from 'sections/landing/Timeline';
import Rewards from 'sections/landing/Rewards';
import Sponsors from 'sections/landing/Sponsors';
import Policy from 'sections/landing/Policy';
import Footer from 'sections/landing/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <PageWrapper>
      <header>
        <div className="lighting-left">
          <img src={PurpleLens} alt="" />
        </div>
        <div className="lighting-right">
          <img src={PurpleLens2} alt="" />
        </div>
        <div className="metrix">
          <img src={Metrix} alt="" />
        </div>
        <div className="star pulse-out-fade">
          <img src={Star} alt="" />
        </div>
        <div className="star-light sl1 pulse-out-fade d-0-5">
          <img src={StarLight} alt="" />
        </div>
        <div className="star-light sl2 pulse-out-fade d-1-5">
          <img src={StarLight} alt="" />
        </div>

        <Navbar />
        <HR />
        <Header />
      </header>
      <HR />
      <section>
        <Intro />
      </section>
      <HR />
      <section className="rules-sec">
        <div className="lighting-left">
          <img src={RulesLeft} alt="" />
        </div>
        <div className="lighting-right">
          <img src={RulesRight} alt="" />
        </div>
        <Rules />
      </section>
      <HR />
      <section className="judge-sec">
        {/* <div className="lighting-left">
          <img src={RulesLeft} alt="" />
        </div> */}
        <div className="lighting-right">
          <img src={RulesRight} alt="" />
        </div>
        <Judge />
      </section>
      <HR />
      <section>
        <Faqs />
      </section>
      <HR />
      <section>
        <Timeline />
      </section>
      <HR />
      <section className="rewards-sec">
        <div className="lighting-left">
          <img src={RulesLeft} alt="" />
        </div>
        <div className="lighting-right">
          <img src={RulesRight} alt="" />
        </div>
        <Rewards />
      </section>
      <HR />
      <section className="sponsors-sec">
        <div className="lighting-left">
          <img src={RulesLeft} alt="" />
        </div>
        <div className="lighting-right">
          <img src={RulesRight} alt="" />
        </div>
        <Sponsors />
      </section>
      <HR />
      <section className="policy-sec">
        <div className="lighting-left">
          <img src={RulesLeft} alt="" />
        </div>
        <Policy />
      </section>
      <footer>
        <Footer />
      </footer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.background};

  header {
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .lighting-left {
      width: 70%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.68;

      @media (max-width: 768px) {
        width: 90%;
        transform: translate(-20%, 5%);
      }
    }
    .lighting-right {
      width: 70%;
      position: absolute;
      top: 30px;
      right: 0;
      opacity: 0.68;

      @media (max-width: 768px) {
        display: none;
      }
    }
    .metrix {
      position: absolute;
      top: 150px;
      right: 30%;
      width: 50%;
    }

    .star,
    .star-light {
      position: absolute;
    }

    .star {
      top: 200px;
      left: 160px;

      @media (max-width: 768px) {
        top: 140px;
        left: 35%;
        width: 13px;
      }
    }

    .sl1 {
      top: 280px;
      left: 52%;
      @media (max-width: 768px) {
        width: 10px;
        top: 140px;
        left: 84%;
      }
    }
    .sl2 {
      bottom: 160px;
      left: 35%;

      @media (max-width: 768px) {
        bottom: auto;
        width: 10px;
        top: 344px;
        left: 77%;
      }
    }
  }

  .rules-sec {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .lighting-left {
      width: 70%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(0%, -30%);
      opacity: 0.68;
      @media (max-width: 768px) {
        width: 80%;
      }
    }
    .lighting-right {
      width: 70%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(50%, 40%);
      opacity: 0.68;

      @media (max-width: 768px) {
        width: 80%;
        bottom: 50%;
        transform: translate(50%, 60%);
      }
    }
  }
  .judge-sec {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    // .lighting-left {
    //   width: 70%;
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   transform: translate(0%, -30%);
    //   opacity: 0.68;
    // }
    .lighting-right {
      width: 70%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(40%, 50%);
      opacity: 0.68;

      @media (max-width: 768px) {
        width: 80%;
        transform: translate(60%, 0%);
      }
    }
  }

  .rewards-sec {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .lighting-left {
      width: 70%;
      position: absolute;
      top: -10%;
      left: 0;
      opacity: 0.68;

      @media (max-width: 768px) {
        width: 90%;
        top: 10%;
        // transform: translate(0%, 0%);
      }
    }
    .lighting-right {
      width: 70%;
      position: absolute;
      bottom: -20%;
      right: 0;
      transform: translateX(60%);
      opacity: 0.68;

      @media (max-width: 768px) {
        width: 90%;
        bottom: auto;
        top: 100%;
        transform: translate(50%, -100%);
      }
    }
  }
  .sponsors-sec {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .lighting-left {
      width: 70%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-30%, -30%);
      opacity: 0.68;
      @media (max-width: 768px) {
        width: 80%;
        transform: translate(-30%, -20%);
      }
    }
    .lighting-right {
      width: 70%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(40%, 30%);
      opacity: 0.68;

      @media (max-width: 768px) {
        width: 80%;
        transform: translate(50%, 50%);
      }
    }
  }
  .policy-sec {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .lighting-left {
      width: 70%;
      position: absolute;
      top: 100%;
      left: 0;
      opacity: 0.68;
      transform: translate(-30%, -70%);

      @media (max-width: 768px) {
        width: 80%;
        top: 50%;
        transform: translate(-30%, -50%);
      }
    }
  }
`;

export default Landing;
