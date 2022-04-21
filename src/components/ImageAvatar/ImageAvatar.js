import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="New Pet" src={props.imagePath} sx={{ width: 256, height: 256 }}/>
    </Stack>
  );
}

export default ImageAvatars;
