import styled from "styled-components";

export const EduIntro = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const EduList = styled.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #f3c26b;
  }

  .desc {
    color: ${({theme}) => theme.colors?.text[200]};
  }

  .activeYear {
    color: lawngreen;
  }
`;
