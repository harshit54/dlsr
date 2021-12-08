import React from 'react';

export default function imageSR() {
  return(
    <div class="row">
      <h1 class="sm:text-3xl font-medium text-gray-900 pt-10">Result</h1>
      <div class="column pt-0">
      <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
            <img class="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1280x720"/>
            <div class="text-center lg:w-2/3 w-full">
              <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Original</h2>
              <h3 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-500">1920x1080</h3>
            </div>
          </div>
        </section>
      </div>
      <div class="column pt-0">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
            <img class="lg:w-5/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1920x1080"/>
            <div class="text-center lg:w-2/3 w-full">
              <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Super-Resolution</h2>
              <h3 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-500">1920x1080</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
