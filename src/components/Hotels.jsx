import React from 'react'

function Hotels() {

    const hotels = [
		{
			
			image: "./src/assets/Hotels/img1.png",
		},
		{
			
			image: "./src/assets/Hotels/img2.png",
		},
		{
			
			image: "./src/assets/Hotels/img3.png",
		},
		{
			
			image: "./src/assets/Hotels/img4.png",
		},
		
	];
	return (
		<div className="w-full h-auto bg-white mt-4 pt-6 pb-20 px-10 flex flex-col gap-y-4 ">
			<h1 className="text-3xl font-medium">Recommended Best Hotels</h1>
			<div className="flex flex-col gap-y-3  md:flex-row  md:gap-x-3 ">
				{hotels.map((hotel, index) => (

                    <div>

						<img
							className={` h-[200px]  md:h-[300px] w-full  rounded-md`}
							src={`${hotel.image}`}
                        key={index}
						/>
                            </div>
                  ))}
			</div>
		</div>
	);
}

export default Hotels