import Layout from "@/components/layout";
import "./aivoiceCalling.css";
import Para from "@/components/Typography/Para";
import H6 from "@/components/Typography/H6";
import { LuArrowRight } from "react-icons/lu";
import SiteLogo from "@/components/SiteLogo";
import YoutubeVideo from "@/components/YoutubeVideo";
import H2 from "@/components/Typography/H2";
import Card2 from "@/components/cards/Card2";

export default function AiVoiceCalling() {
  const Leads = [
    {
      id: 1,
      img: "/images/icon-1.png",
      title: "Futile Lead Qualification",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 2,
      img: "/images/icon-1.png",
      title: "Manual Outreach",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 3,
      img: "/images/icon-1.png",
      title: "Delayed Follow-ups",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 4,
      img: "/images/icon-1.png",
      title: "Inconsistent Messaging",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 5,
      img: "/images/icon-1.png",
      title: "Futile Lead Qualification",
      para: "Wasting time on low-quality leads.",
    },
  ];
  return (
    <Layout>
      <section className="banner">
        <div className="banenr-wrapper">
          <div className="container">
            <div className="banner-content">
              <div className="banner-logo d-flex flex-column align-items-center">
                <figure className="text-center">
                  <SiteLogo width="100px" height="auto" />
                </figure>
                <div className="banner-heading-top">
                  <Para title="Tired of Chasing Leads?" />
                </div>
                <div className="banner-second-heading text-center">
                  <h1>
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
            <div className="youtube-video-video">
              <YoutubeVideo
                src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
                width={"80%"}
                height={"500px"}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="leads-wrapper">
          <div class="container">
            <div class="leads-content text-center">
              <div className="leads-upper-content">
                <div className="banner-heading-top">
                  <Para title="Tired of Chasing Leads?" />
                </div>
                <H2 title="Are these common sales challenges hindering your growth?" />
              </div>
              <div className="leads-lower-content">
                {Leads?.map((items, index) => {
                  return (
                    <>
                      <Card2 items={items} index={index} />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
