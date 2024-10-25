import React from "react";

function Destinations() {
	const destinationsList = [
		{
			name: "Maldives",
			image: "./src/assets/Destinations/Maldives.png",
		},
		{
			name: "Paris",
			image: "./src/assets/Destinations/paris.png",
		},
		{
			name: "Bali",
			image: "./src/assets/Destinations/bali.png",
		},
		{
			name: "Egypt",
			image: "./src/assets/Destinations/egypt.png",
		},
		{
			name: "Spain",
			image: "./src/assets/Destinations/spain.png",
		},
	];
	return (
		<div className="w-full h-auto bg-white mt-4 p-6 flex flex-col gap-y-4">
			<h1 className="text-3xl font-medium">Trending Destinations</h1>
			<div className="flex flex-col gap-y-3  md:flex-row  md:gap-x-3 ">
				{destinationsList.map((destination, index) => (
					
						<div
							className={`bg-cover bg-center h-[200px] md:h-[500px]  w-full 
                                ${
                                    index === 0 ? "h-[130px] md:w-1/2" : "h-[90px] md:w-1/3"
                                } 
                                
                                flex  justify-center items-end  rounded-md`}
							style={{
								backgroundImage: `url(${destination.image})`,
							}}
						>

						{/* <img src={`${destination.image}`} alt={`${destination.name}`} /> */}
						<p className="bg-opacity-75 p-2 text-white">{destination.name}</p>
                        </div>
					
				))}
			</div>
		</div>
	);
}

export default Destinations;
