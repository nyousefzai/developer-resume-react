import styled from 'styled-components';

const Headline = styled.h1`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: ${props => props.size || '20px'};
  font-family: ${props => props.font};
  letter-spacing: ${props => props.spacing || '1px'};
  margin: ${props => props.outline || '0 0 0 0'};
`;

export default Headline;
