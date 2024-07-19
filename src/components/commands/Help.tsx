import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";

const Help: React.FC = () => {
  return (
    <HelpWrapper data-testid="help">
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>
          <span className="colored">Tab or Ctrl + i</span>&nbsp; =&gt;
          autocompletes the command
        </div>
        <div>
          <span className="colored">Up Arrow {generateTabs(5)}</span> =&gt; go
          back to previous command
        </div>
        <div>
          <span className="colored">Ctrl + l {generateTabs(5)}</span> =&gt;
          clear the terminal
        </div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
