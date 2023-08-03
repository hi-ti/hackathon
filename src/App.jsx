// import logo from './logo.svg';
import "./App.css";
import "./components/Heading.jsx";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Img1 from "./assets/img1.png";
import Img2 from "./assets/img2.png";
import Img3 from "./assets/img3.png";
import Hero from "./components/Hero";
import Topic from "./components/Topic";

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

	//const social = [{Icons : BsFacebook},{Icons : BsInstagram}]

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/Topic" element={<Topic />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
