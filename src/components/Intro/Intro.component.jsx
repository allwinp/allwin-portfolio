import Typing from "react-typing-animation";

import "./Intro.styles.css";

const strings = [
  "Hi, I'm Allwin",
  "I love to build amazing apps",
  "Check out my work below",
];

const About = () => {
  return (
    <div className="typing-animation-text">
      <Typing speed={10} loop={true} cursorClassName="typing-animation-cursor">
        {strings.map((x) => (
          <>
            <span>{x}</span>
            <Typing.Backspace delay={1000} count={x.length + 1} />
          </>
        ))}
      </Typing>
    </div>
  );
};

export default About;
