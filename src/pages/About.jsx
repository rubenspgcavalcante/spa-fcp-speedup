import React, { memo, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Card } from '../commons/components/Card';
import LoadingDots from '../commons/components/LoadingDots';

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Loader = styled(LoadingDots)`
  padding: 32px;
`;

const DoggoCard = styled(Card)`
  margin: 6px;
  width: 300px;
  padding: 8px;
  display: flex;
  align-items: center;
  height: auto;
`;

const Doggo = styled.img`
  width: 300px;
  border-radius: 8px;
`

const dogApi = 'https://dog.ceo/api/breeds/image/random';
const PICS_PER_BLOCK = 10;
const iterable = [...new Array(PICS_PER_BLOCK)].map((_, idx) => ({ id: idx }));

const About = () => {
  const [pics, setPics] = useState(iterable);

  useEffect(() => {
    Promise
      .all(iterable.map(({ id }) =>
        fetch(dogApi)
          .then(res => res.json())
          .then(res => ({ id, url: res.message }))
      ))
      .then(urls => setPics(urls))
  }, []);

  return (
    <FlexGrid>
      {pics.map(({ id, url }) => (
        <DoggoCard key={id}>{
          url ? <Doggo src={url} /> : <Loader />
        }</DoggoCard>
      )
      )}
    </FlexGrid>
  )
};

export default memo(About);