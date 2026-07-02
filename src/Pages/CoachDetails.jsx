import CoachHero from "../Components/CoachHero";
import CoachLogos from "../Components/CoachLogos";
import CoachIntroduction from "../Components/CoachIntroduction";
import CoachSkills from "../Components/CoachSkills";
import CoachInstagram from "../Components/CoachInstagram";
import Footer from "../Components/Footer";

import coachData from "../Data/coachData";

const CoachDetails = () => {
  const coach = coachData[0];

  return (
    <>
    <CoachHero coach={coach} />

      <CoachLogos />

      <CoachIntroduction coach={coach} />

      <CoachSkills coach={coach} />

      <CoachInstagram coach={coach} />

      <Footer /> 
    </>
  );
};

export default CoachDetails;