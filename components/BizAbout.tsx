import Image from "next/image";
import styles from "./BizAbout.module.css";

const techStack = [
  {
    number: "01",
    title: "Frontend",
    technologies: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND CSS",
    ],
  },
  {
    number: "02",
    title: "Backend & APIs",
    technologies: [
      "PYTHON",
      "FASTAPI",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Database & Cloud",
    technologies: [
      "SUPABASE",
      "FIREBASE",
      "FIRESTORE",
    ],
  },
];

export default function BizAbout() {
  return (
    <section className={styles.about} id="about">

      <div className={styles.container}>

        {/* INTRODUCTION */}
        <div className={styles.intro}>
          <span className={styles.eyebrow}>
            ABOUT THE BUSINESS
          </span>

          <h2 className={styles.introHeading}>
            Introducing <span>techie.addy.</span>
            <br />
            <span className={styles.muted}>
              Websites, web apps and AI tools,
            </span>
            <br />
            built for real businesses.
          </h2>

          <div className={styles.introBottom}>
            <span className={styles.introIndex}>
              001 / INTRODUCTION
            </span>

            <span className={styles.introLine} />

            <span className={styles.introLabel}>
              THE PEOPLE BEHIND THE TECHNOLOGY
            </span>
          </div>
        </div>


        {/* PROFILE SECTION */}
        <div className={styles.profile}>

          {/* PROFILE IMAGE */}
          <div className={styles.imageColumn}>

            <div className={styles.imageFrame}>

              <div className={styles.imageCircle}>
                <Image
                  src="/about-img.webp"
                  alt="Avadhut - Founder of techie.addy"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 380px"
                  className={styles.profileImage}
                />
              </div>

              {/* NAME ON FRAME BORDER */}
              <div className={styles.frameName}>
                <span className={styles.frameNameText}>
                  Avadhut
                </span>
                <span className={styles.frameRole}>
                  Websites, Web Apps & AI for Business
                </span>
              </div>

            </div>

           

          </div>


          {/* INTRODUCTION TEXT */}
          <div className={styles.profileContent}>

            <span className={styles.profileEyebrow}>
              THE PERSON BEHIND TECHIE.ADDY
            </span>

            <h3 className={styles.profileHeading}>
              Turning ideas into
              <br />
              <span>digital experiences.</span>
            </h3>

            <p className={styles.profileDescription}>
              My name is techie.addy, and I build websites,
              web apps and AI tools for businesses and
              organisations. Full-stack by training — a
              complete bootcamp end to end, then competitive
              programming to sharpen the parts a bootcamp
              doesn't reach.
            </p>

            <p className={styles.profileDescription}>
              I care about the details nobody is paid to
              notice: how a layout breathes, how a transition
              lands, how fast the thing actually is on a bad
              connection. I ran the technical side of a
              competitive programming club for eight months,
              so I've learned to care about the people around
              the code too.
            </p>

            <p className={styles.profileDescription}>
              Taking on new projects now — remote or on-site,
              big or small. Some of what I've shipped is on
              the Work page. If you have something in mind,
              let's talk.
            </p>

            <div className={styles.profileFooter}>
              <span>DESIGN</span>
              <span>DEVELOPMENT</span>
              <span>INNOVATION</span>
            </div>

          </div>

        </div>


        {/* TECHNOLOGY SECTION */}
        <div className={styles.tools}>

          <div className={styles.toolsHeading}>
            <h3>
              The tools <span>I build with.</span>
            </h3>

            <p>
              Modern technologies for building
              meaningful digital products.
            </p>
          </div>


          <div className={styles.techGrid}>

            {techStack.map((group) => (
              <div
                key={group.number}
                className={styles.techCard}
              >

                <span className={styles.cardNumber}>
                  {group.number}
                </span>

                <h4>{group.title}</h4>

                <div className={styles.techList}>
                  {group.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techPill}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}