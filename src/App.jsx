// import logo from './logo.svg';
import "./App.css";
import "./components/Heading.jsx";
import HeaderImg from "./assets/header.png";
import Logoimg from "./assets/logo.png";
import Img1 from "./assets/img1.png";
import Img2 from "./assets/img2.png";
import Img3 from "./assets/img3.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

function ReviewBox(props) {
	return (
		<>
			<div className="box grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-x-[38px] font-Poppins py-2 px-5">
				<div className="col-span-2 flex justify-center items-center">
					<img src={props.img} className="rounded-full" alt="name" />
				</div>
				<div className="col-span-8 h-full">
					<div className="flex flex-col justify-around h-full">
						<div className="header text-3xl uppercase font-medium">
							{props.header}
						</div>
						<div className="boldText Dat font-bold">{props.Date}</div>
						<div className="review">{props.review}</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Services(props) {
	return (
		<>
			<div className="Coaching">{props.Coaching}</div>
		</>
	);
}

// function SocialMediaIcons(props) {
//   return <>
//     <div className='Icons'>{props.Icons}</div>
//   </>
// }

function App() {
	const data = [
		{
			Img: Img1,
			header: "Is it celiac disease or a wheat allergy?",
			review:
				"If you get stomach cramps and feel bloated after eating a sandwich on wheat bread or a bowl of pasta, do you have celiac disease? A wheat allergy? Or neither?...",
			date: "DECEMBER 2, 2021",
		},
		{
			Img: Img2,
			header: "Foods High in Lactose",
			review:
				"Around 75% of the world’s population has some form of lactose intolerance. Some can digest low-lactose diets, while others experience digestive symptoms after eating any amount of dairy. These symptoms can lead to diarrhea, stomach pain, and more.",
			date: "1 January, 2023 ",
		},
		{
			Img: Img3,
			header: "The 8 Most Common Food Allergies",
			review:
				"Common food allergies include dairy, peanuts, and tree nuts, among others. You may be more likely to outgrow certain allergies than others.",
			date: "25 November, 2023 ",
		},
	];

	const name = [
		{ Coaching: "Services" },
		{ Coaching: "Shop Now" },
		{ Coaching: "Contact Us" },
	];

	//const social = [{Icons : BsFacebook},{Icons : BsInstagram}]

	return (
		<>
			<div className="Header bg-[#ffea20] grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 grid-cols12 2xl:py-0 xl:py-0 lg:py-0 md:py-32 sm:py-32 py-32 relative justify-center">
				<div className="container 2xl:ml-[60px] xl:ml-[60px] lg:ml-[60px] md:ml-[0px] sm:ml-[0px] ml-[0px] font-Montserrat flex flex-col justify-center 2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center items-center 2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-12 sm:col-span-12 col-span-12 px-5">
					<h1 className="t1 font-bold text-8xl text-white w-full text-center">
						Al-Eaze
					</h1>
					<div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col items-center font-medium">
						<p>Read about the facts and truths about food allergies</p>
						<div className="t2 text-8xl font-bold bg-clip-text bg-gradient-to-br from-[#e3f6ff] to-[#9df1df] text-transparent">
							Blog
						</div>
					</div>
				</div>
				<div className="col-span-7 flex justify-end">
					<img
						src={HeaderImg}
						className="2xl:block xl:block lg:block md:hidden sm:hidden hidden h-fit w-fit"
						alt="hi"
					></img>
				</div>
			</div>

			<div className="bg-[#8dcbe6] py-64">
				<div className="Between container mx-auto flex flex-col gap-y-12">
					{data.map((e) => {
						return (
							<ReviewBox
								img={e.Img}
								header={e.header}
								Date={e.date}
								review={e.review}
							/>
						);
					})}
				</div>
			</div>
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
		</>
	);
}

export default App;
