// components/IntroductionPart.js
import Image from 'next/image';
import './introductionSection.css'; // Import SCSS without using CSS modules

const IntroductionPart = () => {
  return (
    <div className="introductionPart">
      <div className="leftSection">
        <div className="imageWrapper">
          <Image src="/assets/LoginPage.png" alt="eSchool App" width={500} height={400} />
        </div>
      </div>
      <div className="rightSection">
        <h2>
          Introducing 
        </h2>
        <span className="eschool">eSchool</span>
        <div className='our-mission'>
          <p>
            Our mission at eSchool is to empower educational institutions with innovative technology that simplifies management,
            enhances communication, and fosters academic excellence.
          </p>
        </div>
        <div>
          <p className='our-vision'>
            Our vision at eSchool is to be the global leader in transforming school management through innovative, intelligent,
            and integrated technology.
          </p>
        </div>
        <h3 className='about-eschool'>About eSchool</h3>
        <div className='eschool-paragraph'>
          <p>
            eSchool is an advanced School Management System designed to simplify and streamline the administrative, academic,
            and communication processes within educational institutions. Whether you&apos;re managing a small school or a large academic
            institution, eSchool offers a comprehensive suite of tools to enhance efficiency and improve overall school management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPart;
