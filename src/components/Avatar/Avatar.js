import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="New Pet" src="../../images/pig_clip_art.png" sx={{ width: 256, height: 256 }}/>
    </Stack>
  );
}

export default ImageAvatars;