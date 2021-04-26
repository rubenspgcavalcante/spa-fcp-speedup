import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Card } from '../commons/components/Card';

const Title = styled.h2`
  margin: 0;
`;

const Home = () => {

  return (
    <Card>
      <Title>Loren Ispum</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar metus in nunc pellentesque, in dignissim nisi euismod. Vestibulum at maximus nibh, ac finibus leo. Sed laoreet porttitor urna sed molestie. In sodales, purus condimentum cursus bibendum, ante urna laoreet mi, pellentesque imperdiet enim diam pretium odio. Quisque at suscipit sapien. Praesent commodo accumsan turpis, eu luctus mauris maximus bibendum. Nunc sed auctor sapien, ut cursus ex. Donec quis risus lectus. Sed consequat suscipit pharetra.

        Nunc feugiat et nulla nec scelerisque. Mauris ac cursus arcu. Sed eu dui tortor. Aenean semper varius risus. Pellentesque condimentum dignissim viverra. Vestibulum tempor ultrices erat, id efficitur purus accumsan ac. Nunc elementum lorem vitae diam gravida, in tincidunt nunc dictum. Proin a augue ut neque ullamcorper condimentum. Nam et tristique nunc. Proin eget leo nec diam viverra consectetur.

        Cras tempor felis sit amet ante aliquet tempor. Vivamus aliquam sodales iaculis. Pellentesque aliquam posuere magna ut venenatis. Donec cursus risus orci, non tristique dui congue ac. Proin id condimentum nibh, at porttitor urna. Nunc mollis, enim nec blandit mattis, neque quam euismod nibh, at sollicitudin nisi purus a erat. Nam consequat et ipsum id vehicula. Sed non dui aliquet nisl maximus finibus.

        Donec porta justo eget elit vehicula tincidunt. In hac habitasse platea dictumst. Praesent molestie diam sed nunc auctor tempor. Aliquam erat volutpat. Sed ut tempus nisi. Cras sagittis ligula sit amet turpis luctus, vel consequat ex facilisis. Donec laoreet nisi justo, eu porta ante tempor in. Sed posuere porttitor ante, et tristique mi vestibulum volutpat. In bibendum nisi eu metus semper, ut malesuada dui vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis enim vel neque porttitor pellentesque ornare a velit. Aenean vulputate viverra odio eget bibendum. Phasellus rhoncus, dui maximus porta porttitor, felis erat consequat nisl, dictum ornare neque ex quis leo. Quisque quis lorem interdum, condimentum urna sed, sagittis tellus.

        Proin nibh risus, ornare sed gravida id, suscipit a diam. Donec commodo et arcu in sodales. Nulla facilisi. Nullam venenatis, ex vel scelerisque blandit, augue tellus consequat ex, a ornare tortor mi sit amet felis. Nulla consequat venenatis elit, vitae condimentum urna vulputate in. Sed volutpat lectus dignissim, efficitur lectus et, venenatis enim. Donec est purus, tincidunt quis porttitor sed, finibus eu neque. Donec aliquet vestibulum varius. Cras convallis dignissim orci, quis sodales tellus volutpat a. Fusce fermentum commodo fermentum.
      </p>
    </Card>
  )
};

export default memo(Home);