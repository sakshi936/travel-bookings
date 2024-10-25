import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	const socialIcons = [faFacebookF, faXTwitter, faInstagram, faLinkedinIn];
	return (
		<footer className="bg-slate-950 text-white pt-10 px-4 md:px-10 pb-3 flex flex-col justify-center items-center">
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

				<hr className="border-white my-8 hidden md:block" />

				{/* footer */}
				<div className=" flex flex-col md:flex-row justify-between">
					{/* logo */}
					<ul className=" flex flex-col gap-y-2">
						<li>
							<img src=".\assets\NavBar\logo.svg" alt="Travel Bookings Logo" width={300} height={300} />
						</li>
						<li>
							<p className="text-white hidden md:block">
								Lorem ipsum dolor sit amet consectetur. Vitae <br />
								imperdiet id amet lacus risus.
							</p>
						</li>
						<li>
							<div className=" flex  gap-x-2 ">
								{socialIcons?.map((icon, index) => (
									<div className="border-white border-[1px]  h-fit px-2 py-[0.5px] rounded-full" key={index}>
										<FontAwesomeIcon icon={icon} size="sm" />
									</div>
								))}
							</div>
						</li>
					</ul>
					{/* About links */}
					<ul className="hidden md:flex flex-col gap-y-2">
						<h3 className="text-lg font-semibold">About</h3>
						<ul className="text-white flex flex-col gap-y-1">
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">Terms and conditions</a>
							</li>
							<li>
								<a href="#">Privacy and cookies policy</a>
							</li>
							<li>
								<a href="#">Contact us</a>
							</li>
						</ul>
					</ul>
					{/* quick links */}
					<ul className="hidden md:flex flex-col gap-y-2">
						<h3 className="text-lg font-semibold">Quick Links</h3>
						<ul className="text-white flex flex-col gap-y-1">
							<li>
								<a href="#">Flight</a>
							</li>
							<li>
								<a href="#">Hotel</a>
							</li>
						</ul>
					</ul>

					<hr className="border-white mt-6" />
					{/* mobile responsive */}
					<ul className="flex md:hidden mt-4">
						{/* About links */}
						<ul className="flex flex-col gap-y-2 ml-3">
							<h3 className="text-md font-semibold">About</h3>
							<ul className=" flex flex-col gap-y-1">
								<li>
									<a href="#">About us</a>
								</li>
								<li>
									<a href="#">Terms and conditions</a>
								</li>
								<li>
									<a href="#">Privacy and cookies policy</a>
								</li>
								<li>
									<a href="#">Contact us</a>
								</li>
							</ul>
						</ul>
						{/* quick links */}
						<ul className="flex flex-col gap-y-2">
							<h3 className="text-md font-semibold">Quick Links</h3>
							<ul className=" flex flex-col gap-y-1">
								<li>
									<a href="#">Flight</a>
								</li>
								<li>
									<a href="#">Hotel</a>
								</li>
							</ul>
						</ul>
					</ul>
					{/* contact */}
					<ul className="hidden  md:flex flex-col gap-y-2 items-start">
						<li className="flex justify-center items-center gap-x-2">
							<FontAwesomeIcon icon={faPhone} size="sm" />
							<p>00965-22660160</p>
						</li>
						<li className="flex justify-center items-center gap-x-2">
							<FontAwesomeIcon icon={faEnvelope} size="sm" />
							<p>travellogo@gmail.com</p>
						</li>
					</ul>
				</div>
			</div>

			{/* Footer bottom */}
			<div className=" mt-10 w-full text-xs md:text-sm text-center">
				<p className="text-gray-500">Copyright &copy; 2023. Website Powered by</p>
			</div>
		</footer>
	);
}

export default Footer;
