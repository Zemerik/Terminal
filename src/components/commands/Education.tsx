import {generateTabs} from "../../utils/funcs";
import {EduIntro, EduList} from "../styles/Education.styled";
import {Wrapper} from "../styles/Output.styled";

const Education: React.FC = () => {
    return (
        <Wrapper data-testid="education">
            <EduIntro>My Education Background !</EduIntro>
            {eduBg.map(({title, desc, tab, year}) => (
                <EduList key={title}>
                    <div className="title">{title}</div>
                    <div className="desc">
                        {desc} {generateTabs(tab)}
                        {year}
                    </div>
                </EduList>
            ))}
        </Wrapper>
    );
};

const eduBg = [
    {
        title: "Game / Web Development",
        desc: "Hillcrest Christian College",
        year: "2024",
        tab: 4,
    },
    {
        title: "Cybersecurity",
        desc: "Monash University",
        year: "2024",
        tab: 14,
    },
    {
        title: "Autodesk Tinkercad",
        desc: "Hillcrest Christian College",
        year: "2023",
        tab: 4,
    },
];

export default Education;
