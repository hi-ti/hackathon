import React from "react";
import TopicImg from "../assets/TopicImg.png";

const Topic = () => {
	return (
		<div className="grid grid-cols-12 bg-[#e3f6ff] pt-32">
			<div className="col-span-1"></div>
			<div className="col-span-10">
				<img src={TopicImg} alt="" />
				<div className="pt-16 flex flex-col gap-y-16">
					<div className="text-2xl font-bold font-Poppins text-[#619eb8]">
						Is it celiac disease or a wheat allergy?
					</div>

					<div className="text-xl font-Poppins font-semibold">
						DECEMBER 2, 2021
					</div>

					<div className="text-xl font-Poppins font-regular">
						If you get stomach cramps and feel bloated after eating a sandwich
						on wheat bread or a bowl of pasta, do you have celiac disease? A
						wheat allergy? Or neither?
						<br />
						<br />
						<br /> They’re good questions that more people are asking these
						days. The prevalence of celiac disease and wheat allergies are on
						the rise in part due to more screening and greater awareness. If you
						experience discomfort after eating products with wheat in them, how
						do you know the difference and what you should you do? Read on.
						<br />
						<br />
						<br />
						Celiac disease and wheat allergies share some common aspects, but
						they’re fundamentally different. Celiac disease is a genetic
						autoimmune disease that causes the body to attack the small
						intestine when a person with the disease eats gluten, a protein
						found in wheat. A wheat allergy is an allergic reaction to wheat
						whether it’s consumed or inhaled, for instance breathing in
						particles of wheat flour. If you have a wheat allergy, the body
						triggers an immune defense against the wheat which can lead to a
						range of symptoms.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topic;
