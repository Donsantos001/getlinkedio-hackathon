import HR from 'components/HR';
import Navbar from 'sections/landing/Navbar';
import styled from 'styled-components';
import Header from 'sections/landing/Header';
import Intro from 'sections/landing/Intro';
import PurpleLens from '../assets/header-purple-lens-left.svg';
import PurpleLens2 from '../assets/header-purple-lens-right.svg';
import RulesLeft from '../assets/rules-pp-left.svg';
import RulesRight from '../assets/rules-pp-left.svg';

import RewardsLeft from '../assets/rewards-pp-left.svg';
import RewardsRight from '../assets/judge-pp-right.svg';

import SponsorsLeft from '../assets/rules-pp-left.svg';
import SponsorsRight from '../assets/rules-pp-right.svg';
import PolicyLeft from '../assets/rules-pp-left.svg';
import PolicyRight from '../assets/rules-pp-right.svg';

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

const Landing = () => {
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
        <div className="star">
          <img src={Star} alt="" />
        </div>
        <div className="star-light sl1">
          <img src={StarLight} alt="" />
        </div>
        <div className="star-light sl2">
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
      top: -30px;
      left: 0;
      opacity: 0.68;
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
    }

    .sl1 {
      top: 280px;
      left: 52%;
    }
    .sl2 {
      bottom: 160px;
      left: 35%;
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
    }
    .lighting-right {
      width: 70%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(40%, 40%);
      opacity: 0.68;

      @media (max-width: 768px) {
        transform: translate(40%, 60%);
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
        top: 0;
        right: 100%;
        left: auto;
        transform: translate(0%, -30%);
      }
    }
    .lighting-right {
      width: 70%;
      position: absolute;
      bottom: -20%;
      right: 0;
      transform: translateX(70%);
      opacity: 0.68;
      @media (max-width: 768px) {
        bottom: auto;
        top: 100%;
        transform: translate(20%, -70%);
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
        transform: translate(-80%, -50%);
      }
    }
    .lighting-right {
      width: 70%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(40%, 40%);
      opacity: 0.68;

      @media (max-width: 768px) {
        transform: translate(40%, 50%);
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
      bottom: 0;
      left: 0;
      opacity: 0.68;
      transform: translate(-20%, 25%);

      @media (max-width: 768px) {
        bottom: 0;
        transform: translate(-35%, 50%);
      }
    }
  }
`;

export default Landing;
