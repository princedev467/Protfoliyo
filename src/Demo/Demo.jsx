import React from 'react';

function Demo(props) {
    return (
        <>
            <div className='bg-green-500 min-h-screen px-4 py-6 '>


                <h1 className=' xs:py-2 xs:px-12 text-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-green-900 font-semibold' > Welcome Our Demo</h1>

                <div class="flex ... px-40 py-30 ">
                    <div class="flex-1 ...  border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">01</div>
                    <div class="contents">
                        <div class="flex-1 ...  border-2 text-center mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold   text-white text-2xl">02</div>
                        <div class="flex-1 ...  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold  text-white text-2xl">03</div>
                    </div>
                    <div class="flex-1 ...  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold text-white text-2xl">04</div>
                </div>
                 <div class="flex ... px-40 py-1 ">
                    <div class="flex-1 ...  border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">05</div>
                    <div class="contents">
                        <div class="flex-1 ...  border-2 text-center mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold   text-white text-2xl">06</div>
                        <div class="flex-1 ...  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold  text-white text-2xl">07</div>
                    </div>
                    <div class="flex-1 ...  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold text-white text-2xl">08</div>
                </div>
            </div>
        </>
    );

}

export default Demo;