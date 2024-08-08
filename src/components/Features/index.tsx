import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="What We Offer"
          paragraph="Welcome to our tranporation services agency. We are the best at our trans-portation service ever."
        />

        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          className="-mx-4 mt-12 flex flex-wrap lg:mt-20"
        >
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
