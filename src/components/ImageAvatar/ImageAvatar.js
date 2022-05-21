import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars({image}) {
  console.log('ImageAvatar component');
  if (typeof image === 'undefined'){
    return(
      <Avatar alt="New Pet" sx={{ width: 256, height: 256 }}/>
    );
  }
  else{
    console.log("rendering image")
    return (
      <Avatar alt="New Pet" src={image} sx={{ width: 256, height: 256 }}/>
  );
  }

}

export default ImageAvatars;
