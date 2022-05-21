import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars({props}) {
  console.log("avatar props: ");
  console.log(props);
  // need to strip of firs 23 chars to get the data from the base 64 encoded image
  if (typeof props === 'undefined'){
    return(
      <Avatar alt="New Pet"/>
    );
  }
  else{
    console.log("rendering image")
    return (
      
      <Avatar alt="New Pet" src={props}/>
  );
  }

}

export default ImageAvatars;
