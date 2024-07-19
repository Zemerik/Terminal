import {AboutWrapper, HighlightAKA, HighlightSpan,} from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <br></br>
            <p>
                👋 Hi I <HighlightSpan>Hemang</HighlightSpan>,
            </p>
            <br></br>
            <p>
            💘 <HighlightAKA>As a 15-year-old high school student, I am driven by an unwavering passion for pursuing a career as a front-end software developer. With a knack for transforming concepts into tangible realities, I possess a strong command of Python, JavaScript, and HTML, enabling me to bring ideas to life through coding expertise.</HighlightAKA>
            </p>
            <br></br>
        </AboutWrapper>
    );
};

export default About;
