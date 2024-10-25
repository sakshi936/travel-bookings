import React, { useState } from "react";

const FlightSearchCard = () => {
  const [isOpen, setIsOpen] = useState(false);

	// Toggle the list visibility
	const toggleList = () => {
		setIsOpen(!isOpen);
	};

  const airports = [
		{ name: "Dubai International", country: "United Arab Emirates", code: "DXB" },
		{ name: "Dubrovnik", country: "Croatia", code: "DBV" },
		{ name: "Dubbo", country: "Australia", code: "DBO" },
		{ name: "Al Minhad Air Base", country: "United Arab Emirates", code: "NHD" },
		{ name: "Pardubice", country: "Czech Republic", code: "PED" },
	];

  return (
    <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg flex flex-col gap-y-3 md:gap-y-5">
      {/* Trip Type Buttons */}
      <div className="flex justify-start gap-x-4 ">
        {["ONE WAY", "Round Trip", "Multi-City"].map((type,index) => (
          <button
            key={index}
            className={`w-fit p-2 font-semibold text-xs border-[1px] ${
              index === 0
                ? "text-teal-700 border-teal-700"
                : "text-gray-700 border-gray-700"
            }   rounded-lg`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* From and To Section */}
      <div className=" bg-gray-50 p-4 rounded-lg border-[0px] md:border-[1px] border-gray-800 z-0">
        <div className="flex flex-col md:flex-row gap-y-2 md:justify-between items-center">
          <div className="text-center md:text-left rounded-lg border-[1px] md:border-[0px] border-gray-800 py-2 md:py-0 w-[250px] md:w-fit">
            <label className="block text-gray-700 text-xs">From</label>
            <button className="text-lg font-bold" onClick={toggleList}>Dubai(DXB)</button>
            <p className="text-xs text-gray-500">Dubai international airport</p>
          </div>

          {/* {isOpen ? 
          <div className="bg-white shadow-md rounded-lg ">
					<ul className="divide-y divide-gray-200">
						{airports.map((airport, index) => (
							<li
								key={index}
								className={`p-4 flex justify-between items-center ${
									index === 0 ? "bg-teal-400 text-white" : ""
								}`}
							>
								<div>
									<h3 className="text-lg font-semibold">{airport.name}</h3>
									<p className="text-sm text-gray-500">{airport.country}</p>
								</div>
								<span className="text-xl font-bold">{airport.code}</span>
							</li>
						))}
					</ul>
				</div>
        
         :null} */}

          <div className="bg-teal-800 text-sm  text-white w-fit h-[30px] flex flex-col  leading-3 px-2 rounded-full">
              <span  className=" ">
              &larr; 
              </span>
              <span  className="">
              &rarr;
              </span>
          </div>

          <div className="text-center md:text-right rounded-lg border-[1px] md:border-[0px] border-gray-800 py-2  md:py-0 w-[250px] md:w-fit">
            <label className="block text-gray-700 text-xs">To</label>
            <p className="text-lg font-bold">Kuwait(KWI)</p>
            <p className="text-xs text-gray-500">Kuwait international airport</p>
          </div>
        </div>
      </div>

      {/* Departure and Return Date Section */}
      <div className=" flex justify-between gap-4 border-[1px] border-gray-800 rounded-lg px-4 py-2">
        <div className="w-1/2">
          <div className="p-2 rounded-lg">
          <label className="block text-gray-800 text-sm ">Departure</label>
            <p className="font-semibold">23-06-2025</p>
            <p className="text-xs text-gray-700">Friday</p>
          </div>
        </div>
        <div className="w-1/2 text-end">
          <div className="p-2 rounded-lg">
          <label className="block text-gray-800 text-sm ">Return</label>
            <p className="font-semibold">26-06-2025</p>
            <p className="text-xs text-gray-700">Sunday</p>
          </div>
        </div>
      </div>

      {/* Passenger Count */}
      <div className="flex gap-y-2 justify-between ">
        {[
          { label: "Adult", subLabel: "(12+yrs)", count: 1 },
          { label: "Child", subLabel: "(2-12yrs)", count: 0 },
          { label: "Infant", subLabel: "(0-2yrs)", count: 0 },
        ].map(({ label, subLabel, count }) => (
          <div key={label} className="text-center flex border-[1px] border-gray-800 rounded-lg gap-x-6">
            <div className=" flex  justify-center items-center px-2 gap-x-4">
                <div >
                <label className="block text-gray-900 text-xs">{label}</label>
                <p className="text-[10px] text-gray-500">{subLabel}</p>
                </div>
                <p className="font-semibold text-lg">{count}</p>
            </div>
            <div className=" hidden md:flex flex-col ">
              <span className="border-[1px] border-gray-800 rounded-tr-lg">&#x25B2;</span> 
              <span className="border-[1px] border-gray-800 rounded-br-lg">&#x25BC;</span>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Flight Checkbox */}
      <div className=" flex items-center">
        <input
          type="checkbox"
          id="directFlight"
          className="form-checkbox h-4 w-4 text-teal-500"
        />
        <label htmlFor="directFlight" className="ml-2 text-gray-700 text-xs">
          Direct flights
        </label>
      </div>

      {/* Search Button */}
      <div className=" flex justify-center">

      <button className=" w-80 p-3 bg-teal-500 text-white font-semibold text-sm rounded-lg ">
        Search Flight
      </button>
      </div>

    </div>
  );
};

export default FlightSearchCard;
