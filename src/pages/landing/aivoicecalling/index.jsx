import Layout from "@/components/layout";
import "./aivoiceCalling.css";
import Para from "@/components/Typography/Para";
import H1 from "@/components/Typography/H1";

export default function AiVoiceCalling() {
  return (
    <Layout>
      <section className="banner">
        <div className="banenr-wrapper">
          <div className="container">
            <div className="banner-content d-flex align-items-center justify-content-center">
              <div className="banner-logo d-flex flex-column align-items-center justify-content-center">
                <figure>
                  <img src="/images/4IR-logo-main.png" alt="Logo" />
                </figure>
                <div className="banner-heading-top">
                  <Para title="Tired of Chasing Leads?" />
                </div>
                <div className="banner-second-heading text-center">
                  <h1>
                    Let <span>AI Handle</span> The Heavy Lifting
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
