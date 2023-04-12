/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: #606060;

  & input{ 
    padding:.2rem .6rem;
    border:none ;
    outline: none;
    border-radius: 1.5rem;
    background-color: #fff;
    }
`;

  // eslint-disable-next-line react/prop-types
export function BookSearch({ search }) {
  return (
    <StyledInputContainer>
      <p>Search</p>
      <input type="search" name="searchbooks" onChange={(event) => search(event.target.value)} />
    </StyledInputContainer>
  );
}
