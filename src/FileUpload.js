import React from 'react';
import axios from 'axios';
import {useState} from 'react';

export default function FileUpload() {
  const [favs, setFavs] = useState('');
  const [banks, setBanks] = useState('');

  const myFunction = (e) => {
    e.preventDefault();
    let image = favs[0];
    console.log(image);
    let data = new FormData();
    data.append('image', image);
    let header = {
      AccessControlAllowOrigin : "*",
      AccessControlAllowHeaders : "Origin, X-Requested-With, Content-Type, Accept"
    }
    axios.post('http://127.0.0.1:5000/', data, header)
      .then((response) => {
        console.log(response);
        setBanks(response.data.filename);
      })
  }
  return(
    <div className='file-upload content-center'>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Upload Image</h1>
      <div class="input-group">
        <form onSubmit = {myFunction}>
          <div>
            <input type="file" placeholder="Image-Upload" class="form-control" onChange={(e)=>setFavs(e.target.files)} />
            <input type="submit" value="Upload" class="flex mx-auto mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"/>
          </div> 
        </form>
      </div>
    </div>
  );
}
