import styled from 'styled-components';

export const FilmsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 1560px;
  max-width: 98%;
  padding: 2em 0;
`;

export const Film = styled.li`
`;

export const FilmTitle = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  max-width: 250px;
  margin: 0 auto;
`;

export const ImgMovieList = styled.img`
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 1px rgb(255,255,255, 11%), 0 2px 2px rgb(255,255,255, 11%), 0 4px 4px rgb(255,255,255, 11%), 0 8px 8px rgb(255,255,255, 11%), 0 16px 16px rgb(255,255,255, 11%), 0 32px 32px rgb(255,255,255, 11%);
`;
