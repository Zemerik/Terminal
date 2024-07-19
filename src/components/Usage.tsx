import { UsageDiv } from "./styles/Output.styled";

type Props = {
  cmd: "projects" | "socials" | "games";
  marginY?: boolean;
};

const arg = {
  projects: { placeholder: "project-no", example: "4" },
  socials: { placeholder: "social-no", example: "2" },
  games: { placeholder: "games-no", example: "1" },
};

const Usage: React.FC<Props> = ({ cmd, marginY = false }) => {
  const action = "go";
  return (
    <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
      Usage: {cmd} {action} &#60;{arg[cmd].placeholder}&#62; <br />
      eg: {cmd} {action} {arg[cmd].example}
    </UsageDiv>
  );
};

export default Usage;
