import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "HR Connect",
    category: "Cross-functional learning",
    tools:
      "Program design, HOD discussions, action trackers, monthly reviews",
  },
  {
    title: "SCM NAPS Induction",
    category: "Induction content",
    tools:
      "Learning needs assessment, module design, SME consultation, Tata Code of Conduct",
  },
  {
    title: "HR Adda Calendar",
    category: "Skills development",
    tools:
      "Learning calendar, Excel, Generative AI, People Analytics, manager effectiveness",
  },
  {
    title: "LXP Adoption",
    category: "Digital learning",
    tools: "LXP, learner support, pathway follow-up, community forum",
  },
  {
    title: "CIPAT Assessment",
    category: "Performance & feedback",
    tools:
      "Intern assessment design, NEEM/NAPS forms, competency mapping",
  },
  {
    title: "Intern Lifecycle",
    category: "People operations",
    tools:
      "Excel, OneDrive, job analysis, 150+ intern tracker, L6 job descriptions",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Focus and tools</h4>
                <p>{project.tools}</p>
              </div>
              <div className="work-visual" aria-hidden="true">
                <span className="work-visual-number">0{index + 1}</span>
                <span className="work-visual-label">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
