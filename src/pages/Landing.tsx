import HR from 'components/HR';
import Navbar from 'sections/landing/Navbar';
import styled from 'styled-components';
import Header from 'sections/landing/Header';
import Intro from 'sections/landing/Intro';
import PurpleLens from '../assets/header-purple-lens-left.svg';
import PurpleLens2 from '../assets/header-purple-lens-right.svg';
import Metrix from '../assets/header-metrix.svg';
import Star from '../assets/star.svg';
import StarLight from '../assets/header-star-light.svg';
import Rules from 'sections/landing/Rules';
import Judge from 'sections/landing/Judge';
import Faqs from 'sections/landing/Faqs';

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
      <section>
        <Rules />
      </section>
      <HR />
      <section>
        <Judge />
      </section>
      <HR />
      <section>
        <Faqs />
      </section>
      <section>
        <Faqs />
      </section>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.backround};

  header {
    overflow: hidden;
    position: relative;

    .lighting-left {
      position: absolute;
      top: -30px;
      left: 0;
      opacity: 0.68;
    }
    .lighting-right {
      position: absolute;
      top: -30px;
      right: 0;
      opacity: 0.68;
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
`;

export default Landing;
