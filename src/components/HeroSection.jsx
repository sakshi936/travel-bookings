import React from "react";
// import TripSearchCard from "./components/TripSearchCard";
import FlightSearchCard from "./FlightSearchCard"

function HeroSection() {
	return (
		<div className='bg-teal-700 md:bg-[url("https://images.pexels.com/photos/28672693/pexels-photo-28672693/free-photo-of-serene-river-and-lush-forest-with-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-cover bg-center w-full h-full md:h-screen flex flex-col gap-y-4 md:gap-y-0 md:flex-row  gap-x-3 justify-center items-center p-4'>
			{/* discount image  */}
			<div className="w-auto md:w-[500px] text-center font-semibold text-white flex flex-col justify-center items-center gap-y-7">
				<h1 className=" text-3xl md:text-5xl">Take a trip around the world together!</h1>
				
					<img src=".\assets\Hero\discount.png" alt="discount" width={300} height={150}/>
				
			</div>
			{/*fligth search  card*/}
            <FlightSearchCard/>
			
		</div>
	);
}

export default HeroSection;
