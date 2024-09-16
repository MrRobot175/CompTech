import "./LandPage.css";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Ico_1 from '../../../img/electric.svg'
import Ico_2 from '../../../img/memory.svg'
import Ico_3 from '../../../img/support.svg'
function LandPage() {
  return (
    <div className="land-page">
      <Title />
      <div className="cards-holder">
              <Card iconCard={Ico_1}
                  heading="Fast and Reliable"
          spanTitle="We ensure quick delivery and reliable products, making your tech needs
          easy to fulfill." />
              <Card
                  iconCard={Ico_2}
          heading="Top-Quality Hardware"
          spanTitle="Only the best components for your custom build. Your performance matters to us."
        />
              <Card
                  iconCard={Ico_3}
                  heading="Expert Support"
          spanTitle="Our experienced team is here to help with any questions or issues you might have."/>
      </div>
    </div>
  );
}
export default LandPage;
