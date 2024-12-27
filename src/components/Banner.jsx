import { useContext } from "react";
import About from "./About";
import Carousel from "./Carousel";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";
import PopularBooks from "./PopularBooks";
import RecentAddedBooks from "./RecentAddedBooks";
import WelcomeBox from "./WelcomeBox";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookCategoriesPage from "../components/BookCategoriesPage"


const Banner = () => {

  const { user } = useContext(AuthContext)
  return (
    <div >
      <Carousel></Carousel>

      {user && <WelcomeBox></WelcomeBox>}
      <About></About>
       <BookCategoriesPage></BookCategoriesPage>
      <ExtraSection1></ExtraSection1>
      <RecentAddedBooks></RecentAddedBooks>
      <PopularBooks></PopularBooks>
      <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default Banner;