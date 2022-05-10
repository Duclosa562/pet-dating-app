import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});

// KEEP THIS CODE EVEN THOUGH COMMENTED OUT
// SOURCE: https://codesandbox.io/s/convert-file-to-base64-in-react-lqi1e?file=/src/App.js:118-1105

/*var file;
var base64URL;

var state = {
  file: null,
  base64URL: ""
};

// SOURCE: https://codesandbox.io/s/convert-file-to-base64-in-react-lqi1e?file=/src/App.js:118-1105

getBase64 = file => {
  return new Promise(resolve => {
    let fileInfo;
    let baseURL = "";
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      console.log("Called", reader);
      baseURL = reader.result;
      console.log(baseURL);
      resolve(baseURL);
    };
    console.log(fileInfo);
  });
};

// SOURCE: https://codesandbox.io/s/convert-file-to-base64-in-react-lqi1e?file=/src/App.js:118-1105

handleFileInputChange = e => {
  console.log(e.target.files[0]);
  let { file } = this.state;

  file = e.target.files[0];

  this.getBase64(file)
    .then(result => {
      file["base64"] = result;
      console.log("File Is", file);
      this.setState({
        base64URL: result,
        file
      });
    })
    .catch(err => {
      console.log(err);
    });

  this.setState({
    file: e.target.files[0]
  });
};

var imageBase64 = '';*/

function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}

function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(event) => {event.preventDefault(); getBase64(event.target.files[0]); /*console.log(event.target.files[0]); <- WORKS! */ /*this.handleFileInputChange;*/}}/>
        <Button variant="contained" component="span">
          Upload Profile Picture
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
}
export default UploadButtons;