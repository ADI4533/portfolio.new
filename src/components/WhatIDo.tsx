import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>LEARN</h3>
              <h4>Learning design & digital enablement</h4>
              <p>
                I assess learning needs with stakeholders, develop induction
                and skills content, coordinate programs, and support learners
                using digital platforms and practical learning pathways.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Needs Assessment</div>
                <div className="what-tags">Learning Content</div>
                <div className="what-tags">Instructional Design*</div>
                <div className="what-tags">Induction Programs</div>
                <div className="what-tags">Skills Planning</div>
                <div className="what-tags">LXP Adoption</div>
                <div className="what-tags">Learner Support</div>
                <div className="what-tags">SME &amp; Vendor Coordination</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ENABLE</h3>
              <h4>Training, talent & people operations</h4>
              <p>
                I coordinate training and cross-functional projects, analyze
                employee feedback, and contribute to talent, culture, and
                continuous-improvement initiatives.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Training Coordination</div>
                <div className="what-tags">Stakeholder Management</div>
                <div className="what-tags">Job Analysis</div>
                <div className="what-tags">Competency Mapping</div>
                <div className="what-tags">Feedback Analysis</div>
                <div className="what-tags">Employee Engagement</div>
                <div className="what-tags">Culture &amp; Recognition</div>
                <div className="what-tags">Project Coordination</div>
                <div className="what-tags">Continuous Improvement</div>
                <div className="what-tags">
                  Excel · Forms · PowerPoint · Word
                </div>
                <div className="what-tags">
                  Outlook · Teams · OneDrive · LXP
                </div>
                <div className="what-tags">
                  SuccessFactors · TurboHire
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
      <p className="what-footnote">
        *Foundational instructional-design coursework in M.A. studies. Excel:
        XLOOKUP/VLOOKUP, COUNTIF/SUMIF, and conditional formatting.
      </p>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
