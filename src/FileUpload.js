import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import ImageSR from './ImageSR.js';

export default function FileUpload() {
  
  const [inputImage, setInputImage] = useState([]);
  const [response, setResponse] = useState({});

  const myFunction = (e) => {
    e.preventDefault();
    window.location.reload(false);
    let image = inputImage[0];
    console.log(image);
    let data = new FormData();
    data.append('image', image);
    let header = {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
    }
    axios.post('http://127.0.0.1:5000/', data, header)
      .then((response) => {
        console.log(response.data);
        setResponse(response.data);
      })   
      window.location.reload(false);   
  }
  return(
    <div className="file-upload">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Upload Image</h1>
      <div class="input-group flex-col justify-center content-center  ">
        <form >
          <div>
            <input type="file"  placeholder="Image-Upload" class="form-control" onChange={(e)=>setInputImage(e.target.files)} />
            <button onClick = {myFunction} type="button" class="flex mx-auto mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Upload
            </button>
          </div>
        </form>
      </div>
      {response?.input_filename?.length > 0 && <ImageSR inputFileName={response.input_filename} inputSizeX={response.input_size_x} inputSizeY={response.input_size_y} outputSizeX={response.output_size_x} outputSizeY={response.output_size_y}/>}
    </div>
  );
}