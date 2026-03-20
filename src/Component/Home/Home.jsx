import React from 'react';
import info from '../../assets/images/info-image.webp'
function Home(props) {
    return (
        <main>
            <section>
                <div className="container mx-auto grid grid-cols-12 gap-4 ">
                    <div className='grid col-span-5 '>
                        <h1 className='text-7xl mt-7 dark:text-white'>Creating bold visual
                            narratives that inspire and engage</h1>
                    </div>

                    <div className='grid col-span-4 col-start-9'>
                        <div className=" w-[360px] h-[360px] mt-7">
                       
                        <video loop autoPlay muted className='w-full h-full object-cover rounded-4xl'>
                            <source src="https://html.aqlova.com/videos/bfolio/video.mp4" type="video/mp4" />


                        </video>
                        </div>
                    </div>
                </div>

                <div className='container w-50 h-50 relative'>
                    <img src={info} alt=""  className='animation_info absolute'/> 
                
            </div>
            </section>

            
        </main>
    );
}

export default Home;