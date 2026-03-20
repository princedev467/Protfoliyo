import React from 'react';

function GridDemo(props) {

    const x = [{ label: 1 }, { label: 2 }, { label: 3 }, { label: 4 }, { label: 5 }, { label: 6 }, { label: 7 }, { label: 8 }, { label: 9 }]

    const y = [{ label: 1 }, { label: 2 }, { label: 3 }, { label: 4 }, { label: 5 }, { label: 6 }]

    return (
        <div >

            {/* grid-template-columns */}
            <h1 className='text-center font-bold text-3xl'>grid-template-columns</h1>

            <div class="grid grid-cols-4 gap-4">{
                x.map((v) => (
                    <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                ))
            }
            </div>
            <br /><br />

            {/* Implementing a subgrid */}
            <h1 className='text-center font-bold text-3xl'>Implementing a subgrid </h1>
            <div class="grid grid-cols-4 gap-4">
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">1</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">2</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">3</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">4</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">5</div>
                <div class="col-span-3 grid grid-cols-subgrid gap-4">
                    <div class="col-start-2  border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">06</div>
                </div>
            </div>
            <br /><br />

            {/* Responsive design */}
            <h1 className='text-center font-bold text-3xl'>Responsive design</h1>
            <div class="grid grid-cols-1 md:grid-cols-6">{
                y.map((v) => (
                    <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                ))
            }
            </div>
            <br /><br />

            {/* colums */}
            {/* Spanning columns */}
            <h1 className='text-center font-bold text-3xl'>Spanning columns</h1>
            <div class="grid grid-cols-3 gap-4">
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">1</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">2</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">3</div>
                <div class=" col-span-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">4</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">5</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">6</div>
                <div class="col-span-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">7</div>

            </div>
            <br /><br />

            {/* Starting and ending lines */}
            <h1 className='text-center font-bold text-3xl'>Starting and ending lines</h1>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-span-4 col-start-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">01</div>
                <div class="col-start-1 col-end-3 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">02</div>
                <div class="col-span-2 col-end-7 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">03</div>
                <div class="col-start-1 col-end-7 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">04</div>
            </div>
            <br /><br /><br />

            {/* grid-template-rows */}
            <h1 className='text-center font-bold text-3xl'>grid-template-rows</h1>

            <div class="grid grid-flow-col grid-rows-4 gap-4">{
                x.map((v) => (
                    <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                ))
            }
            </div>
            <br /><br />

            {/* Implementing a subgrid */}
            <h1 className='text-center font-bold text-3xl'>Implementing a subgrid in rows </h1>
            <div class="grid grid-flow-col grid-rows-4">
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">1</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">2</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">3</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">4</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">5</div>
                <div class="row-span-3 grid grid-rows-subgrid gap-4">
                    <div class="row-start-2  border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">06</div>
                </div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">7</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">8</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">9</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">10</div>

            </div>
            <br /><br />

            {/* grid-template-rows  Customeize*/}
            <h1 className='text-center font-bold text-3xl'>grid-template-rows Customeize</h1>

            <div class="grid  grid-flow-col grid-rows-[200px_minmax(900px,1fr)_100px]">{
                y.map((v) => (
                    <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                ))
            }
            </div>
            <br /><br />

            {/* Responsive design */}
            <h1 className='text-center font-bold text-3xl'>Responsive design rows</h1>
            <div class="grid  grid-flow-col grid-rows-2 md:grid-rows-6 ">{
                y.map((v) => (
                    <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                ))
            }
            </div>
            <br /><br />

            {/* colums */}
            {/* Spanning columns */}
            <h1 className='text-center font-bold text-3xl'>Spanning columns</h1>
            <div class="grid grid-cols-3 gap-4">
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">1</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">2</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">3</div>
                <div class=" col-span-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">4</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">5</div>
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">6</div>
                <div class="col-span-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">7</div>

            </div>
            <br /><br />

            {/* Starting and ending lines */}
            <h1 className='text-center font-bold text-3xl'>Starting and ending lines</h1>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-span-4 col-start-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">01</div>
                <div class="col-start-1 col-end-3 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">02</div>
                <div class="col-span-2 col-end-7 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">03</div>
                <div class="col-start-1 col-end-7 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">04</div>
            </div>

            <br /><br /><br /><br />
            {/* rows */}
            {/* Spanning columns */}
            <h1 className='text-center font-bold text-3xl'>Spanning rows</h1>
            <div class="grid grid-flow-col grid-rows-3 gap-4">
                <div class=" row-span-3  border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">1</div>
                <div class=" col-span-2  border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">2</div>
                <div class="col-span-2 row-span-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">3</div>

            </div>
            <br /><br />

            {/* Starting and ending lines */}
            <h1 className='text-center font-bold text-3xl'>Starting and ending lines rows</h1>
            <div class="grid grid-flow-col grid-rows-3 gap-4">
                <div class="row-span-2 row-start-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">01</div>
                <div class="row-span-2 row-end-3 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">02</div>
                <div class="row-start-1 row-end-4 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">03</div>
            </div>

            <br /><br />
            <br /><br />
            {/* Grid-cols  */}
            <h1 className='text-center font-bold text-3xl'>Grid-cols,Gap</h1>
            <div class=" grid grid-cols-4  gap-4 ">
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">01</div>
                <div class="contents">
                    <div class="  border-2 text-center mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold   text-white text-2xl">02</div>
                    <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold  text-white text-2xl">03</div>
                </div>
                <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold text-white text-2xl">04</div>
            </div>

            <br /><br />
            {/* Grid-rows  */}
            <h1 className='text-center font-bold text-3xl'>Grid-rows,Gap</h1>
            <div class=" grid grid-rows-4 gap-4">
                <div class="  border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">05</div>
                <div class="contents">
                    <div class="  border-2 text-center mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold   text-white text-2xl">06</div>
                    <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold  text-white text-2xl">07</div>
                </div>
                <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold text-white text-2xl">08</div>
            </div>
            <br /><br /><br />



            {/* grid-auto-flow */}
            <h1 className='text-center font-bold text-3xl'>grid-auto-flow</h1>
            <div class=" grid grid-flow-row-dense md:grid-cols-3 grid-rows-3">
                <div class="col-span-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">01</div>
                <div class="col-span-2 border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">02</div>
                <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold text-white text-2xl">03</div>
                <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold text-white text-2xl">04</div>
                <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold text-white text-2xl">05</div>
            </div>
            <br /><br /><br />

            {/* grid-auto-columns */}
            <h1 className='text-center font-bold text-3xl'>grid-auto-columns</h1>

            <div class="grid grid-flow-col auto-cols-auto ">{
                y.map((v) => (
                    <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                ))
            }

                <br /><br />
                <div class="grid grid-flow-col auto-cols-[minmax(0,2fr)]  ">{
                    y.map((v) => (
                        <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                    ))
                }
                </div>

            </div>


 {/* grid-auto-rows */}
            <h1 className='text-center font-bold text-3xl'>grid-auto-rows</h1>
<div class="grid grid-flow-col auto-row-auto ">{
                y.map((v) => (
                    <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                ))
            }

                <br /><br />
                <div class="grid grid-flow-row auto-rows-max md:auto-rows-min ">{
                    y.map((v) => (
                        <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                    ))
                }
                </div>

            </div>

            <br /><br /><br />

 {/* grid-auto-rows */}
            <h1 className='text-center font-bold text-3xl'>Gap</h1>
                <div class=" grid grid-cols-2 gap-4 ">
                <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">01</div>
                <div class="contents">
                    <div class="  border-2 text-center mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold   text-white text-2xl">02</div>
                    <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold  text-white text-2xl">03</div>
                </div>
                <div class="  border-2 text-center  mx-3 py-10 rounded-2xl  bg-sky-500 font-semibold text-white text-2xl">04</div>
            </div>

<br /><br /><br />
             <div class="grid grid-cols-3 gap-x-6 gap-y-10 ">{
                    y.map((v) => (
                        <div class=" border-2 text-center mx-3 py-10 rounded-2xl bg-sky-500 font-semibold text-white text-2xl">{v.label}</div>

                    ))
                }
                </div>
        </div>
    );
}

export default GridDemo;