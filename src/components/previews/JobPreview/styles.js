import styled from 'styled-components';

const JobContainer = styled.section`
  padding: 50px 0;
  width: 60%;
  margin: 0 auto;
`;

const JobContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const JobDetails = styled(JobContent)`
  justify-content: flex-start;

  p {
    margin-right: 20px;
  }
`

export {
  JobContainer,
  JobContent,
  JobDetails,
};
