import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "Founder @ Rolex",
    content:
      "Our members are so impressed. This is a very reliable platform for courier services, the tracking is accurate",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Founder @ UI Hunter",
    content:
      "This services is one of the best, track your product and you can even see the location on google map, hence you need not worry knowing your products are in safe hands",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "Product delivered safe and sounds. The delivery was great, still can't believe it was that fast... You are the Best",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]"
    >
      <div data-aos="fade-left" data-aos-delay="200" className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="View recents comments of our satisfied clients"
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap gap-y-8 lg:mt-20">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
