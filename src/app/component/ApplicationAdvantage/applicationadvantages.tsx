// components/ApplicationAdvantages.js
import Image from "next/image";
import "./applicationadvantages.css";

const ApplicationAdvantages = () => {
  return (
    <>
      <div className="container">
        <div className="grid">
          <div>
            <h2>
              Application
              <div>Advanatages</div>
            </h2>
          </div>
          <div className="firstseconditem">
            <div className="circle 1">01</div>

            <p className="width1">
              Designed with simplicity in mind, eSchool’s intuitive dashboard
              makes it easy for all users—faculty, students, and parents—to
              navigate and access relevant information effortlessly.
            </p>
            <div className="circle">02</div>
            <p>
              Dedicated modules ensure smooth interaction between schools and
              parents, fostering transparency and keeping everyone informed
              about important updates like schedules, results, and notices.
            </p>
          </div>

          <div className="thirdfourthitem">
            <div className="circle">03</div>
            <p className="width03">
              By automating administrative tasks such as attendance tracking,
              exam scheduling, and fee management, eSchool saves time for
              educators and administrators to focus on student success.
            </p>   
            

            <div className="circle">04</div>

            <p className="width04">
              eSchool consolidates all school operations into one platform,
              offering seamless access to routines, events, exams, attendance,
              and fees for faculty, students, and parents.
            </p>
          </div>
        </div>
        <div className="image-section">
          <Image
            src="/assets/LoginPage.png"
            alt="Application Screenshot"
            layout="fill"
            height={0}
            width={0}
          />
        </div>
      </div>
    </>
  );
};

export default ApplicationAdvantages;
