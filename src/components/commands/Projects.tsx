import {useContext, useEffect} from "react";
import {checkRedirect, getCurrentCmdArry, isArgInvalid,} from "../../utils/funcs";
import {ProjectContainer, ProjectDesc, ProjectsIntro, ProjectTitle,} from "../styles/Projects.styled";
import {termContext} from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
    const {arg, history, rerender} = useContext(termContext);

    /* ===== get current command ===== */
    const currentCommand = getCurrentCmdArry(history);

    /* ===== check current command is redirect ===== */
    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "projects")) {
            projects.forEach(({id, url, repo}) => {
                id === parseInt(arg[1]) &&
                window.open(url !== "" ? url : repo, "_blank");
            });
        }
    }, [arg, rerender, currentCommand]);

    /* ===== check arg is valid ===== */
    const checkArg = () =>
        isArgInvalid(arg, "go", ["1", "2", "3"]) ? (
            <Usage cmd="projects"/>
        ) : null;

    return arg.length > 0 || arg.length > 2 ? (
        checkArg()
    ) : (
        <div data-testid="projects">
            <ProjectsIntro>
                The web is like a canvas, and code is the paint. Create your masterpiece. <br/>
            </ProjectsIntro>
            {projects.map(({id, title, desc}) => (
                <ProjectContainer key={id}>
                    <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
                    <ProjectDesc>{desc}</ProjectDesc>
                </ProjectContainer>
            ))}
            <Usage cmd="projects" marginY/>
        </div>
    );
};

const projects = [
    {
        id: 1,
        title: "ZemPosts",
        desc: "Post & Connect with Developers",
        url: "https://zemposts.vercel.app",
        repo: "https://github.com/Zemerik/ZemPosts",
    },
    {
        id: 2,
        title: "ZemShowcase",
        desc: "Showcase & Connect with Developers",
        url: "https://zemshowcase.vercel.app",
        repo: "https://github.com/Zemerik/ZemShowcase",
    },
    {
        id: 3,
        title: "ZemProfiles",
        desc: "Discover & Connect with Developers",
        url: "https://zemprofiles.vercel.app",
        repo: "https://github.com/Zemerik/ZemProfiles",
    },
];

export default Projects;
