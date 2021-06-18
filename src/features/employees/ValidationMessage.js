import styled from 'styled-components';

const Style = styled.div`
  color : red;
  padding-top: 3px;
`;

export default function ValidationMessage({ message }){
  return (
    <Style>
      {message}
    </Style> 
  )
}