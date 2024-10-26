import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";


const FlightSearchCard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);

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
				{["ONE WAY", "Round Trip", "Multi-City"].map((type, index) => (
					<button key={index} className={`w-fit p-2 font-semibold text-xs border-[1px] ${index === 0 ? "text-teal-700 border-teal-700" : "text-gray-700 border-gray-700"}   rounded-lg`}>
						{type}
					</button>
				))}
			</div>

			{/* From and To Section */}
			<div className=" bg-gray-50 p-4 rounded-lg border-[0px] md:border-[1px] border-gray-800 z-0">
				<div className="flex flex-col md:flex-row gap-y-2 md:justify-between items-center">
					{/* "From" Section */}
					<div className="text-center md:text-left rounded-lg border-[1px] md:border-[0px] border-gray-800 py-2 md:py-0 w-[250px] md:w-fit">
						<label className="block text-gray-700 text-xs">From</label>
						<button className="text-lg font-bold" onClick={() => setIsOpen(!isOpen)}>
							Dubai(DXB)
						</button>
						<p className="text-xs text-gray-500">Dubai international airport</p>

						{/* Dropdown for Airport List */}
						{isOpen && (
							<div className="absolute z-10 mt-2 w-[200px] md:w-[400px] bg-gray-50 rounded-lg shadow-2xl max-auto ">
								<ul className="divide-y divide-gray-200">
									{airports.map((airport, index) => (
										<li
											key={index}
											onClick={() => setIsOpen(false)}
											className={`px-2 py-1 flex justify-between items-center cursor-pointer ${
												index === 0 ? "bg-[#048B9980] text-white" : "hover:bg-[#36909a82]"
											}  rounded-lg m-2`}
										>
											<div className="text-left">
												<h3 className="text-xs md:text-sm font-semibold">{airport.name}</h3>
												<p className="text-xs md:text-sm text-gray-500">{airport.country}</p>
											</div>
											<span className="text-xs font-bold">{airport.code}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* swap button */}
					<div className="bg-teal-800  text-white w-[30px] h-[30px] flex justify-center items-center rounded-full">
						<FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-white w-4 h-4" />
					</div>
					{/* To section */}
					<div className="text-center md:text-right rounded-lg border-[1px] md:border-[0px] border-gray-800 py-2  md:py-0 w-[250px] md:w-fit">
						<label className="block text-gray-700 text-xs">To</label>
						<button className="text-lg font-bold" onClick={() => setIsOpen(!isOpen)}>
							Kuwait(KWI)
						</button>
						<p className="text-xs text-gray-500">Kuwait international airport</p>
					</div>
				</div>
			</div>

			{/* Departure and Return Date Section */}
			<div className=" flex justify-between gap-4 border-[1px] border-gray-800 rounded-lg px-4 py-2">
				<div className="w-1/2">
					<div className="p-2 rounded-lg">
						<label className="block text-gray-800 text-sm ">Departure</label>
						<button className="font-bold text-md md:text-lg" onClick={() => setShowCalendar(!showCalendar)}>
							23-06-2025
						</button>
						<p className="text-xs text-gray-700">Friday</p>

						{/* Calendar Dropdown */}
						{showCalendar && (
							<div className="absolute z-10 mt-2 w-[200px] md:w-[500px] bg-gray-50 rounded-xl shadow-2xl p-4 ">
								<div className="flex  justify-between">
									{["December", "January"].map((month) => (
										<div className="hidden md:block" key={month}>
											<h1 className="text-center text-gray-600 text-md font-semibold mb-4">{month} 2025</h1>
											<div className="grid grid-cols-7 gap-2 px-4">
												{/* Calendar Header */}
												{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
													<div key={day} className="text-center font-medium  text-sm text-gray-400">
														{day}
													</div>
												))}
											
												{[...Array(31)].map((_, index) => (
													<button
														key={index}
														className={`p-1 text-center rounded-full text-xs ${
															index + 1 <= 30 && index + 1 >= 25 ? "bg-teal-500 text-white" : "hover:bg-gray-200"
														}`}
														onClick={() => setShowCalendar(!showCalendar)}
													>
														{index + 1}
													</button>
												))}
											</div>
										</div>
									))}

									{/* mobile view */}
									<div className="block md:hidden">
										<h1 className="text-center text-gray-600 text-md font-semibold mb-4">December 2025</h1>
										<div className="grid grid-cols-7 gap-2">
											{/* Calendar Header */}
											{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
												<div key={day} className="text-center font-medium  text-sm text-gray-400">
													{day}
												</div>
											))}
										
											{[...Array(31)].map((_, index) => (
												<button
													key={index}
													className={`p-1 text-center rounded-full text-xs ${
														index + 1 <= 30 && index + 1 >= 25 ? "bg-teal-500 text-white w-5 h-5" : "hover:bg-gray-200"
													} flex  justify-center items-center`}
													onClick={() => setShowCalendar(!showCalendar)}
												>
													{index + 1}
												</button>
											))}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* return section */}
				<div className="w-1/2 text-end">
					<div className="p-2 rounded-lg">
						<label className="block text-gray-800 text-sm ">Return</label>
						<button className="font-bold text-md md:text-lg" onClick={() => setShowCalendar(!showCalendar)}>26-06-2025</button>
						<p className="text-xs text-gray-700">Sunday</p>
					</div>
				</div>
			</div>

			{/* Passenger Count */}
			<div className="flex gap-y-2 justify-between ">
				{[
					{ label: "Adult", subLabel: "(12+yrs)", count: "01" },
					{ label: "Child", subLabel: "(2-12yrs)", count: "00" },
					{ label: "Infant", subLabel: "(0-2yrs)", count: "00" },
				].map(({ label, subLabel, count }) => (
					<div key={label} className="text-center flex border-[1px] border-gray-300 rounded-lg gap-x-6">
						<div className=" flex  justify-center items-center px-2 gap-x-2 md:gap-x-8">
							<div>
								<label className={`block text-sm `}>{label}</label>
								<p className="text-[10px] text-gray-500">{subLabel}</p>
							</div>
							<p className={`font-semibold text-md md:text-xl ${count === "01" ? "text-gray-900" : "text-gray-400"}`}>{count}</p>
						</div>
						<div className=" hidden md:flex flex-col">
							<span className="border-[1px] border-gray-300 rounded-tr-lg w-[25px] bg-gray-100">&#x25B2;</span>
							<span className="border-[1px] border-gray-300 rounded-br-lg bg-gray-100">&#x25BC;</span>
						</div>
					</div>
				))}
			</div>

			{/* Direct Flight Checkbox */}
			<div className=" flex items-center">
				<input type="checkbox" id="directFlight" className="form-checkbox h-4 w-4 text-teal-500" />
				<label htmlFor="directFlight" className="ml-2 text-gray-700 text-xs">
					Direct flights
				</label>
			</div>

			{/* Search Button */}
			<div className=" flex justify-center">
				<button className=" w-80 p-3 bg-teal-500 text-white font-semibold text-sm rounded-lg ">Search Flight</button>
			</div>
		</div>
	);
};

export default FlightSearchCard;
