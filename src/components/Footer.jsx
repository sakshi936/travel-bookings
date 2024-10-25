import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	const socialIcons = [faFacebookF, faXTwitter, faInstagram, faLinkedinIn];
	return (
		<footer className="bg-gray-900 text-white p-10 flex flex-col justify-center items-center">
			<div className=" mx-auto px-4 flex flex-col ">
				{/* input section */}
				<div className=" mb-6 hidden md:flex justify-between items-center w-full">
					<div className="w-1/2 text-start">
						<h2 className="text-2xl font-semibold mb-4">We have some good news</h2>
						<p className="mb-6">Sign up for our newsletter to receive all the offers and discounts. Discounts are only valid for our newsletter subscribers.</p>
					</div>

					<div className="flex justify-center items-center space-x-4 ">
						<input type="email" placeholder="Enter Your Email id" className="px-4 py-2 rounded-md w-80 text-gray-900 outline-none" />
						<button className="bg-yellow-500 text-black px-6 py-2 rounded-md">Subscribe</button>
					</div>
				</div>

				<hr className="border-gray-700 my-8 hidden md:block" />

				{/* footer */}
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="mb-6 w-full text-center lg:text-left  flex flex-col items-center md:items-start justify-center gap-y-4">
						<div className="flex items-center justify-center lg:justify-start mb-4">
							<img src=".\src\assets\NavBar\logo.svg" alt="Travel Bookings Logo" />
						</div>
						<p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Vitae imperdiet id amet lacus risus.</p>
						<div className=" h-full flex justify-center items-center gap-x-2">
							{socialIcons?.map((icon, index) => (
								<div className="border-white border-[1px]  h-fit px-2 py-[0.5px] rounded-full" key={index}>
									<FontAwesomeIcon icon={icon} size="sm" />
								</div>
							))}
						</div>
					</div>
					
					{/* About links */}
					<div className="w-full lg:w-1/3 mb-6 hidden md:flex flex-col">
						<h3 className="text-lg font-semibold mb-4">About</h3>
						<ul className="text-gray-400">
							<li className="mb-2">
								<a href="#">About us</a>
							</li>
							<li className="mb-2">
								<a href="#">Terms and conditions</a>
							</li>
							<li className="mb-2">
								<a href="#">Privacy and cookies policy</a>
							</li>
							<li>
								<a href="#">Contact us</a>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div className=" text-center lg:text-left flex gap-x-10  w-fit h-full ">
                        
                        <div className=" hidden md:flex">
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="text-gray-400">
                                <li className="mb-2">
                                    <a href="#">Flight</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">Hotel</a>
                                </li>
                            </ul>
                        </div>
						{/* emial and telephone */}
						<ul className="text-gray-400">
							<li>00965-22660160</li>
							<li>travellogo@gmail.com</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Footer bottom */}
			<div className=" mt-5 w-full text-xs md:text-sm text-center">
				<p className="text-gray-500">
					Copyright &copy; 2023. Website Powered by
				</p>
			</div>
		</footer>
	);
}

export default Footer;
