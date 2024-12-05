import Layout from "@/components/layout";
import "./aivoiceCalling.css";
import Para from "@/components/Typography/Para";
import H6 from "@/components/Typography/H6";
import { LuArrowRight } from "react-icons/lu";

export default function AiVoiceCalling() {
  return (
    <Layout>
      <section className="banner">
        <div className="banenr-wrapper">
          <div className="container">
            <div className="banner-content">
              <div className="banner-logo d-flex flex-column align-items-center">
                <figure className="text-center">
                  <img src="/images/4IR-logo-main.png" alt="Logo" />
                </figure>
                <div className="banner-heading-top">
                  <Para title="Tired of Chasing Leads?" />
                </div>
                <div className="banner-second-heading text-center">
                  <h1 >
                    Let <span>AI Handle</span> The Heavy Lifting
                  </h1>
                  <p>
                    Effortlessly supercharge manual lead generation and <br />{" "}
                    calling processes with our{" "}
                    <span className="text-white fw-bold">
                      AI-powered solution.
                    </span>
                  </p>
                  <H6
                    title="24/7 Availability . Easy-Integration . No complex Software"
                    className="text-white fs-4"
                  />
                  <button className="btn-2 ">
                    Book a Demo <LuArrowRight size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
