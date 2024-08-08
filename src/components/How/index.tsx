import Image from "next/image";

const How = () => {
  return (
    <section
      id="how"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4"
              >
                <div
                  data-aos="zoom-out"
                  data-aos-delay="800"
                  className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4"
                >
                  <div
                    data-aos="fade-left"
                    data-aos-delay="600"
                    className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                  >
                    <Image
                      src="/about.png"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-delay="1000"
                  className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4"
                >
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src="/bg-2.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8"
                  >
                    <Image
                      src="/truck.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="800"
              className="w-full px-4 lg:w-1/2"
            >
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Globally Connected by Large Network
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  This Logistic Company was founded by a group of transportation
                  professionals who saw an opportunity to provide a better level
                  of service to businesses. Since our founding, we have grown to
                  become a leading transportation provider, with a presence in
                  over 30 countries around the world.
                  <br /> <br />
                  We strive to become pioneers in the field, providing first
                  quality and cost-effective service, and smart solutions to the
                  market. Our 30 years’ experience in the shipping, transport
                  and logistics industry is our strength, which support us to
                  deliver our promises to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
