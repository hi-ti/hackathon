// import logo from './logo.svg';
import './App.css';
import './components/Heading.jsx';
import HeaderImg from "./assets/header.png";
import Logoimg from "./assets/logo.png";
import Img1 from "./assets/img1.png";
import Img2 from "./assets/img2.png";
import Img3 from "./assets/img3.png";
import {BsFacebook,BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";

function ReviewBox(props) {
  return <>
    <div className="box">
      <div className="img">
        <img src={props.img} className="rounded-50" alt="name"/>
      </div>
      <div>
      <div className="header">{props.header}</div>
      <div className="boldText Date">{props.Date}</div>
      <div className="review">{props.review}</div></div>
    </div>
  </>
}

function Services(props) {
  return <>
    <div className="Coaching">{props.Coaching}</div>
  </>
}

// function SocialMediaIcons(props) {
//   return <>
//     <div className='Icons'>{props.Icons}</div>
//   </>
// }

function App() {
  const data = [{Img: Img1, header: "Is it celiac disease or a wheat allergy?", review: "If you get stomach cramps and feel bloated after eating a sandwich on wheat bread or a bowl of pasta, do you have celiac disease? A wheat allergy? Or neither?...", date: "DECEMBER 2, 2021"}, {
    Img: Img2, header: "Foods High in Lactose", review: "Around 75% of the world’s population has some form of lactose intolerance. Some can digest low-lactose diets, while others experience digestive symptoms after eating any amount of dairy. These symptoms can lead to diarrhea, stomach pain, and more.", date: "1 January, 2023 "
  }, {Img: Img3, header: "The 8 Most Common Food Allergies", review: "Common food allergies include dairy, peanuts, and tree nuts, among others. You may be more likely to outgrow certain allergies than others.", date: "25 November, 2023 "
  }]

  const name = [{Coaching : "Services"},{Coaching : "Shop Now"},{Coaching : "Contact Us"}]

  //const social = [{Icons : BsFacebook},{Icons : BsInstagram}]

  return (
      <>
      <div className='Header'>
        <h1 className='t1'>Al-Eaze</h1>
        <p>Read about the facts and truths about food allergies</p>
        <h1 className='t2'>Blog</h1>
        <img src='appreact\src\assets\header.png' className='j' alt='hi'></img>
      </div>

      <div className='Between'>
      {data.map((e) => {
        return (
          <ReviewBox img={e.Img} header={e.header} Date={e.date} review={e.review} />);
      })}
    </div>
    <div className='Footer'>
        {name.map((f) => {
          return (
            <Services Coaching={f.Coaching} />
          );
        })}
        {/* {social.map((g) => {
      return (
        <SocialMediaIcons Icons={g.Icons} />
      )
    })} */}
        <BsFacebook size={16} color="black"/>
    <BsInstagram size={16} color="black"/>
    <AiFillTwitterCircle />
      </div>
      </>
  );
}

export default App;
