import { useState } from 'react';
import styled from 'styled-components';
import { BookList, BookSearch } from './components';

const headerHeight = 50;

const BookCaseContainer = styled.div`

width: fit-content;
margin-top: ${headerHeight + 50}px;
display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 500px;
  grid-auto-flow: dense;
  grid-gap: 10px;
  overflow: hidden;
  
> *{ 
  overflow:hidden;
  margin: 0;
}

@media (max-width: 1080px) {
  grid-template-columns: repeat(2, 1fr);

}
@media (max-width: 700px) {
  grid-template-columns: repeat(1, 1fr);
}
`;
const Header = styled.header`
width: 100%;
margin: 0;
padding: 20px;
position: fixed;
display: flex;
justify-content: space-between;
height: ${headerHeight}px;
background-image: linear-gradient(to right, #ecebebb0 50%,#97cbff96);
backdrop-filter: blur(4px);
box-shadow: 0 0 12px #00000047;
z-index: 40;
>img{
  margin-left: .5rem;
  @media (max-width: 500px) {
  height:30px;
}
}
>div{
  margin-right: .5rem;
  @media (max-width: 500px) {
  >input{
    width: 150px;
  }
}
}

`;

function BookCase() {
  const [searchQuery, setSearchQuery] = useState('developer');
  return (
    <>
      <Header>
        <img src="../src/assets/SVG/bookLogo.svg" alt="BookSearch&save" style={{ height: '60px' }} />
        <BookSearch search={setSearchQuery} />
      </Header>
      <BookCaseContainer>
        <BookList query={searchQuery || ''} />
      </BookCaseContainer>
    </>
  );
}
export default BookCase;
