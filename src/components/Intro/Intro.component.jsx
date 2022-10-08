import Typing from "react-typing-animation";

import "./Intro.styles.css";

let strings = [
  "Hi, I'm Allwin",
  "I love to build amazing apps",
  "Check out my work below",
];

const About = () => {
  return (
    <div className="typing-animation-text">
      <h1>
        <Typing speed={10} loop={true}>
          {strings.map((x) => (
            <>
              <span>{x}</span>
              <Typing.Backspace delay={1000} count={x.length + 1} />
            </>
          ))}
        </Typing>
      </h1>
    </div>
  );
};

export default About;
