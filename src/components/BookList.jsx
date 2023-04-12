import styled from 'styled-components';
import { useGoogleBooksAPI } from '../hooks';
import CleanString from '../utils/StringUtils';

/* eslint-disable no-tabs */
const BookContainerMedium = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	place-items: center;
	padding: 1rem;
	background-color: #fcfcfc;
	border: 1px solid #0000002f;
	border-radius: 1rem;
	gap: 2rem;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

& h4{
	margin: 0;
	text-transform: uppercase;
	background-color: #6996bdd3;
	color: #fcfcfc;
	padding: .5rem 1rem;
	border-radius:.5rem;
	font-size: 15px;
	max-height: 80px;
	width: 90%;
	white-space: wrap;
	text-overflow: ellipsis;
}
> p{
	text-align: center;
	padding: 0;
	width: 90%;
	height: 40px;
	font-size: 12px;
	white-space: pre-wrap;
	text-overflow: ellipsis;
	font-weight: 200;
}
& img{
	
	border-radius: .1rem;
	background-color: transparent;
	transition: transform .7s;
	max-height: 150px;
	filter: drop-shadow(0 0 12px #00000042);
	&:hover{transform:scale(1.1)}
}

`;
// eslint-disable-next-line react/prop-types
export function BookList({ query }) {
  const { data, loading, error } = useGoogleBooksAPI(query);

  if (loading) return <div>Loading...</div>;
  if (error) {
 return (
   <div>
     Error:
     {' '}
     {error.message}
   </div>
 );
}

  const books = data?.items || [];

  return (
    books?.map((book) => {
			const { searchInfo, volumeInfo } = book;
			const { title, imageLinks } = volumeInfo;
			return (
  <BookContainerMedium key={book.id} className="container">
    <h4>{title}</h4>
    <img
      src={imageLinks?.thumbnail
			? imageLinks.thumbnail
			: '../src/assets/SVG/noimage.svg'}
      alt={title}
    />

    <p>{ CleanString(volumeInfo?.description || searchInfo?.textSnippet || 'This search has no description') }</p>
  </BookContainerMedium>
			);
		})
  );
}

export default BookList;
