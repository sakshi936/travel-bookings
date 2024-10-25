import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
	return (
		<div className="w-full  bg-white flex justify-between items-center pr-10 md:pr-20 ">
			{/* logo */}
			<div className=" relative  w-[200px] md:w-[320px]  ">
				<img src=".\assets\NavBar\Vector2.png" alt="vector" className="h-full w-full object-cover" />

				<div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-0 ml-2">
					<img src=".\assets\NavBar\logo.svg" alt="logo" className="w-36  md:w-56" />
				</div>
			</div>

			{/* Nav options */}
			<FontAwesomeIcon icon={faBars} size="lg" className="cursor-pointer text-gray-800 md:hidden " />
			<div className="hidden md:flex w-auto gap-x-6 text-lg font">

				<ul className=" flex gap-x-6 cursor-default">
					<li className="text-[#15B392] font-medium">Home</li>
					<li>Flight</li>
					<li>Hotel</li>
				</ul>
				<div class="h-8 w-[2px] bg-[#15B392]"></div>
				<ul className="flex gap-x-6">
					<li>
						<select>
							<option value="en">English</option>
							<option value="es">Spanish</option>
							<option value="fr">French</option>
							<option value="hi">Hindi</option>
						</select>
					</li>
					<li>
						{" "}
						<select>
							<option value="USD">USD</option>
							<option value="EUR">EUR</option>
							<option value="INR">INR</option>
							<option value="JPY">JPY</option>
							{/* Add more currencies as needed */}
						</select>
					</li>
					<li className="flex justify-center items-center">
						{/* <img src="./assets/NavBar/User.png" alt="user" /> */}
						<FontAwesomeIcon icon={faUser} className="text-gray-700 text-xl" />
						<select>
							<option value="login">Login</option>
							<option value="signup">Signup</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
