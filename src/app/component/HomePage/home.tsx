import Image from "next/image";
import "./home.css";
import { CiPlay1 } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      <main className="main">
        <div className="content">
          <h1>eSchool</h1>
          <h2 className="sub-heading">
            Product of Cosmotech International Pvt. Ltd.
          </h2>
          <p>
            eSchool is an advanced School Management System designed to simplify
            and streamline the administrative, academic, and communication
            processes within educational institutions.Whether you&apos;re managing a
            small school or a large academic institution, eSchool offers a
            comprehensive suite of tools to enhance efficiency and improve
            overall school management.
          </p>
          <div className="buttons">
            <button className="purchaseBtn">Purchase Online</button>
            <div className="demoBtnDiv">
            <button className="demoBtn">
              <CiPlay1 size={35} className="playIcon" />
              Book a Demo
            </button>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <Image
            src="/assets/LoginPage.png"
            alt="eSchool Illustration"
            //  width={400}
            //   height={0}
            layout="fill"
          />
        </div>
      </main>
    </div>
  );
}
