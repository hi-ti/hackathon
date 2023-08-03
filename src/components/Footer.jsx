import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import Logoimg from "../assets/logo.png";

function Services(props) {
	return (
		<>
			<div className="Coaching">{props.Coaching}</div>
		</>
	);
}

const Footer = () => {
	const name = [
		{ Coaching: "Services" },
		{ Coaching: "Shop Now" },
		{ Coaching: "Contact Us" },
	];
	return (
		<div>
			<div className="Footer bg-[#e3f6ff] ">
				<div className="container mx-auto flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-center items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-between gap-y-4">
					<img src={Logoimg} alt="" className="w-[196px] h-[196px]" />
					<div className="flex gap-x-4 font-Poppins font-bold">
						{name.map((f) => {
							return <Services Coaching={f.Coaching} />;
						})}
					</div>
					{/* {social.map((g) => {
      return (
        <SocialMediaIcons Icons={g.Icons} />
      )
    })} */}
					<div className="flex gap-x-8">
						<BsFacebook size={32} color="black" />
						<BsInstagram size={32} color="black" />
						<AiFillTwitterCircle size={32} color="black" />
						<AiFillYoutube size={32} color="black" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
