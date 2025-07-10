import React from "react";
import { Link } from "react-router-dom"; // or use <a> tags if not using React Router

const LandingPage = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#181611] pb-10 overflow-x-hidden"
      style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
    >
      {/* Main Content */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="w-full mt-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 md:gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 md:p-8"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6JNxsTOS0bVi7fSqqIAMiu4-DuL9RDAxcN2hLLBb6aMAUtM4LgVPbj2UooEtZpPnvPMYfrKcpfsxlqL9xibLK1qbN-5FbG784YQLM6zXIDp9cG2xC0umpWsjW7qfnmyAtUFuctPY6ObqGRFOtu-0XbdwbUWP6zK4rdLg5A9wXEWxXIflB157AwejVuuSWD82ekMT5jNvFYY61Z7dGqMLa6K6tcZ0kkuRLeSlHMrYr4iBg_8RO4hG3nifnQicMjXZhWfvr_tU0yZB8")',
            }}
          >
            <div className="flex flex-col gap-2 text-center max-w-2xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                Experience the Golden Standard of Rice
              </h1>
              <h2 className="text-white text-sm md:text-base lg:text-lg font-normal leading-normal">
                Discover the rich aroma and superior quality of our premium
                rice, perfect for any culinary creation.
              </h2>
            </div>
            <Link
              to="/products"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 md:h-12 px-4 md:px-5 bg-[#edbc2a] text-[#181611] text-sm md:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#e0b227] transition-colors"
            >
              <span className="truncate">Shop Now</span>
            </Link>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="mt-8 md:mt-12">
          <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em] pb-3">
            Company Introduction
          </h2>
          <p className="text-white text-base md:text-lg font-normal leading-normal">
            Gold Aroma Rice is cultivated in the fertile valleys of Southeast
            Asia, where generations of farmers have perfected the art of rice
            growing. Our rice is carefully selected and processed to ensure the
            highest quality and aromatic richness. We are committed to
            sustainable farming practices and ethical sourcing, ensuring that
            every grain of Gold Aroma Rice is a testament to our dedication to
            excellence.
          </p>
        </section>

        {/* Top Products Showcase */}
        <section className="mt-8 md:mt-12">
          <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em] pb-3">
            Top Products Showcase
          </h2>
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex space-x-4">
              {/* Product 1 */}
              <div className="flex flex-col gap-4 rounded-xl bg-[#27241c] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-[260px]">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyhZEL-RQJLiSS2e5gsThL6E6HhiwtLzL095J8jDmJIPSsLrW6CyZfoc2FPe2peo2p3A1fcd75Q8pcik7mZjWpgbxSUmkWZvSCYlDUuADoQbuxOqeyZi_-iTOaAYdvHyAqRaG4uB4ioAUswYqwj9qDi9UUV0Qu9U2lsIUgz_TpZKVRUC3mnOVht830mj6TrpnG9Rc1mdHw4r2FK4nSiCtD3CLNrMp5Zjfbu_HB1GPgEtzsmikuibYXujsh-UYwRpBByWMT7kpZ7vxn")',
                  }}
                ></div>
                <div className="flex flex-col flex-1 justify-between p-4 gap-4">
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Gold Aroma Rice - 5kg
                    </p>
                    <p className="text-[#b9b29d] text-sm font-normal leading-normal">
                      Perfect for everyday meals
                    </p>
                  </div>
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#393528] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4a4738] transition-colors">
                    <span className="truncate">Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex flex-col gap-4 rounded-xl bg-[#27241c] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-[260px]">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqfHWKRFgGmyq9weh5g7mVsxFBZekRVi79W4ON90pIYrTJfR6ijfQFdsxMS__1NjzBh_UZKyThEZYaalzhsQ1Pf8lcHkk1ka5RCtYfK3vLYbfT7o_KN2tJ78b4aBgyOxGFmyYsBsqs7A5EJvsBVrZLvQ5dydYBCYTaE3qoJK1VvLUosnuP83i1YNoDs5gSlPDFYw02gq3eQfZLy2ZdX0iYtPxq_nSDQbvh7GYcabeeclOIOflLoTm72cwtavBQNX8Bg2sUZF6ouy-i")',
                  }}
                ></div>
                <div className="flex flex-col flex-1 justify-between p-4 gap-4">
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Gold Aroma Rice - 10kg
                    </p>
                    <p className="text-[#b9b29d] text-sm font-normal leading-normal">
                      Ideal for larger families
                    </p>
                  </div>
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#393528] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4a4738] transition-colors">
                    <span className="truncate">Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product 3 */}
              <div className="flex flex-col gap-4 rounded-xl bg-[#27241c] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-[260px]">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtLHOd5uHc5J6YUbQOoG2CF54FwtoImGOxoEDHvuE5lLHRU5r9SXqrogwMe7XDr20gQCTzKWv7gfXTmFwMqWd3lpVlxcNPDA_-drt0g1mpSwinH4kjhxev6WyHwyENAo2TnjEwy-_Kq7HJeidxQZXfzg_nhMj5_wdzK82tyjLCSZ-TrvFx_9-RrI49meghw7hiHr62fIbRdc5TtpHb5D7MvAcC1wgAX053RRykX1j9PaVlDbVPLClko45S4ZeGBFQ4tUqxHJTqPc_4")',
                  }}
                ></div>
                <div className="flex flex-col flex-1 justify-between p-4 gap-4">
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Gold Aroma Rice - 25kg
                    </p>
                    <p className="text-[#b9b29d] text-sm font-normal leading-normal">
                      Best value for bulk purchases
                    </p>
                  </div>
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#393528] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4a4738] transition-colors">
                    <span className="truncate">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-12 md:mt-16">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Our Commitment to Quality
              </h1>
              <p className="text-white text-base md:text-lg font-normal leading-normal max-w-3xl">
                We ensure the highest standards in every step of our process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Benefit 1 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-[#544d3b] bg-[#27241c] p-4 md:p-6 flex-col hover:shadow-lg transition-all">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-lg font-bold leading-tight">
                    Sustainable Farming
                  </h2>
                  <p className="text-[#b9b29d] text-sm md:text-base font-normal leading-normal">
                    Eco-friendly practices for a healthier planet.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-[#544d3b] bg-[#27241c] p-4 md:p-6 flex-col hover:shadow-lg transition-all">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-lg font-bold leading-tight">
                    Quality Assurance
                  </h2>
                  <p className="text-[#b9b29d] text-sm md:text-base font-normal leading-normal">
                    Rigorous quality checks for superior rice.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-[#544d3b] bg-[#27241c] p-4 md:p-6 flex-col hover:shadow-lg transition-all">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-lg font-bold leading-tight">
                    Fast Delivery
                  </h2>
                  <p className="text-[#b9b29d] text-sm md:text-base font-normal leading-normal">
                    Quick and reliable shipping to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em] pb-3">
            Customer Testimonials
          </h2>

          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#393528] pl-4 pr-2">
              <p className="text-white text-sm font-medium leading-normal">
                All Ratings
              </p>
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#393528] pl-4 pr-2">
              <p className="text-white text-sm font-medium leading-normal">
                5 Stars
              </p>
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#393528] pl-4 pr-2">
              <p className="text-white text-sm font-medium leading-normal">
                4 Stars
              </p>
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#393528] pl-4 pr-2">
              <p className="text-white text-sm font-medium leading-normal">
                3 Stars
              </p>
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#393528] pl-4 pr-2">
              <p className="text-white text-sm font-medium leading-normal">
                Verified Purchases
              </p>
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-4 bg-[#27241c] p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-2L03j8V7fgf8q5B3DcWy9XW7lff5peOIFvSSBgIykBXeA67gEMBNT8-ad-bVY5TecopGVykCSeHVzhtlAGS79B8-j6zCjRxHXhu6ZlbM2cVFjb7VjritX2sZB82IfyghmEGQFEJeEI8U0aaOtkBmdVO1Lf5m-YZc5cyq_wX6HFYWI5MpXdu3TRqfzJaEMIOrfk2KAAv3_eA6uqtIBFNbWMNOizEp6chUYjzK5GJM73NiBgdXOUBD7_npd2IsnD0WGWhDK3cVrbXs")',
                  }}
                ></div>
                <div className="flex-1">
                  <p className="text-white text-base font-medium leading-normal">
                    Sophia Carter
                  </p>
                  <p className="text-[#b9b29d] text-sm font-normal leading-normal">
                    2 months ago
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-white text-base font-normal leading-normal">
                "This rice is truly exceptional! The aroma fills my kitchen, and
                the taste is simply divine. I've never had rice this good."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col gap-4 bg-[#27241c] p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiVKt4YjdPQaI6Tn51mjcVTP-K9UKRiaFoRYz_nj4KZ36kXOFcNNF4Hc5UgZ5VTxXYBgAkbNq6jCrnw3aa8z-wCAjuVgI2hr6ChrMgfGfAmbQ4LxWSdCFoMpphSUwgKMtcB_2o8S-03glCWJVWi1Z_TJGzMnu1IFBmcsu3SJ3oVx1iR30gyaSwh_DHz_Y2ARzmafXME_NzmgegY0gO64uymFX-1NTjB2lUAaE8p4yzEWYwhLD27aqmvUEsD-EQKoO0cm6vnjZG_iMz")',
                  }}
                ></div>
                <div className="flex-1">
                  <p className="text-white text-base font-medium leading-normal">
                    Ethan Walker
                  </p>
                  <p className="text-[#b9b29d] text-sm font-normal leading-normal">
                    3 months ago
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                ))}
                <div className="text-[#776f55]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-white text-base font-normal leading-normal">
                "I've been using Gold Aroma Rice for a few months now, and it's
                become a staple in my pantry. It cooks perfectly every time and
                has a wonderful flavor."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col gap-4 bg-[#27241c] p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhqXPF6LgcW0vsA5vnxLEncRunO-MLq9h7FmqAR1bnTPT-Ym5Z1GD_VBjWOSL_yuGRAce-rpXNAKp3ngNzPXoOlo-Qfp0h6AB5Bt-LzzocrNVrO_pO-Gr7wRlU8ZCTiwB3P9yL8SyyWSA1OxgeAXcPzJeWpUV2Xj6cmtTes6R2w_CeJ9cpJuv9bN1c74kFOUOGa7bld9zz26r620aMsiedF8-0xaAz13hrAFa22ofZ-u9hUBtKwtbXQxQmTXz0OrSUZN2FeCmNddqZ")',
                  }}
                ></div>
                <div className="flex-1">
                  <p className="text-white text-base font-medium leading-normal">
                    Olivia Hughes
                  </p>
                  <p className="text-[#b9b29d] text-sm font-normal leading-normal">
                    4 months ago
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-white text-base font-normal leading-normal">
                "I love this rice! It's so versatile and goes well with
                everything. Plus, it's ethically sourced, which is important to
                me."
              </p>
            </div>
          </div>
        </section>

        {/* Certifications & Partner Logos */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em] pb-3">
            Certifications & Partner Logos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAyPCQpdOxgU5I0Ojo0BrWypKU_zbhzMNZj3MC5nGAPb8lb1p43BA8u_VoanMjNWPT3kYwEYKQ50pWzkYUF7T-nXlsLpny3-4cDHDtn6A0lg_yapBsl142VAtXW2RpJbwTn7BAqrxQ0YqBhhUQ_6oTqY-Dlud1YsYJJjXaRmI71TzzdLCYPfMdejXQbdwWJn0f4HW0J5Hmb4X0wZ02No47WOKqddIITTOoiW8bpWd7ZsOpQF5faRBloyMYruuY-fW4XA2J62RVBG-Pn",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDHSjeYYp1gY0xnfgMFBl6_nmP6tf2h4yfw2m2ipy2LzKYJMu2-WdSsfR5s5OgflgTVDTwIyZ5gkHEw7jM4VpUVij4WWRK27GZ7h-ldZCve26CE5SAUvna7mm_tmr1bPX_YWnHiqwzdRDBFfRkrJ0A_3N9XV8BEkY1Otu5bT31BlQMXnkXYTwBY7578z4pTDDvjbjzOVI6-tiRb6-RDwDvwX_r5VIiaAsBHIZdFYhRvcz15eDnmXKAUgy39_uwtPjL58VVwadpBPjpM",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuC1DIUgH_ZPRDBWkQcAxLViZk6YxNmXY_a8thwjVJGZ5BYr4UzhsqYFsoyjyiZQnOTbPMZO_oCu5okullF-5k6Dl-PUiz1wD33aKjOevOng8ldCnZLI4TZW4o8UPNLSdLTlcqIvrv0Zf93LjW_aoJR1ejzzBv0_PpOEAW79kp5v0XNJ89vJZGzotuJKTXgCquSHaJkCcbHnBHOBDOKyWZEvaRT6iTbMTYLJeQWJu4sBRtNKg8jbHio8f0dy0u39tYscKsS487LS71tL",
            ].map((img, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: `url("${img}")` }}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em] pb-3">
            Gallery Preview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCQimDtZfbSBdQWstFxR7d9KPTIS1coao45csHDki2Ed0kL5QPz_u7AIW4dLw7KCX85ncK1_VN1ytF7k9pGNK4uROCskTLXkS1_BR6Q4u47kKv4u5ekRvRjWbRINj2dW77gzye8BmAwG6xgRxgkYmsv11qPd8bAHG4ZMgKn4wpUnkY1TQ-_y9C0mGboo5EP_JFa6X4NdidPmYfQ7G-MBbzSrQPqubP89eb2lVJpBEq-yxI6WmEVBQ0LwWvq37379m3QMXWG8LIS1FDf",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCdfrnPPuWbX80psAvtw_WeiE0L_JXimDqktg-lh-auXPFBPGMN16fSLdb3vdM3k1aQBxcglXXaDV40sWpPhki67rPqEASg8JDSwZJWmLfXJuOz_SaA4BCxU3Jkhit3PevJnOQ1KGX3pGFeXDpT4I48KR40SPSZALxEFa-VMIlVoAlalia5Z4n5N76dPTLn7U3ijp3oPec6UVziRkZN-72JHsE4A0VhMvuUNfcHAHG4Wpph2zPwGRqYTYxXvpWttFW7RpvLoshTl-5N",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAiayZHeCMNAOZ9dtnZ7Gfgc9okzEaxiRXEc-LOieWACqD6sYXWPxUrYMHExQY40PviOECkpae4jbaL-YrJdkdo1zFYviAmr1pzYUViKYdLJ7hk0UihWtrRu-XDLFRIc_9E397CpDt7Z6INRA-2r7dscIC8vxkXvQ8Kf_vuDk1I6r8AhA403WMAvizhGXpogRrwr0PHF8AWDeleFRw30GLScuHYJfZJ9GJRmRVXZvsUINnvcJeGIUkLD6vhTtL2S5igK5wTToOw7jlZ",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA5_CoUQ4gOTuDCajhNG7x_jQ5sSSYHXBOrMmIcZo7XZYPtMYcvj9jwNANQIo_jax3g66QprtqqwMqHu2u_CfRkN-Y8ZS3f8Bwl3yAaNjukLgD7r27F5GUfjEqpMLsuB2bFLnDvoIpbgBtpZqk-d7-wup5bKnYg-pwj9Pnciwnk3waOGFfEF3CxBukdEc4twU0vhGoTlK70Qp0s1wowHl5tESnrj0lAcqgV1dJ-ewlgqbipQNOep-Hf4Pd_nsdJjXTiUFw2qHR3neAg",
            ].map((img, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: `url("${img}")` }}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog/News Highlights */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em] pb-3">
            Blog/News Highlights
          </h2>
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex space-x-4">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi3HlStE4zWLkVHG_ofPXfwg4veDiXI9S8AdtRgF4fG87QvZswGI7Kz6sn72t-M2buD4bXf99rSCRSEAtGmQU2s0HFMTsERMWIw_Cn_6bRzloEcu_in31kxUXp1XKeSLokpm-YcppwSHLckEjN9dcRhNAzgYu2cb3SsA7oPGIdTJjByXRYSODhs8APzo5iXiNwNEWL-7J3HjZt656kSw_B-K0fKL9cWVeBGMj29JVp32wCwsEKDQGw9xw7nOoGqUQO9TPtSOm1FKkU",
                  title: "The Journey of Gold Aroma Rice",
                  desc: "From the field to your table",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-8puaPP6FxFjPOfGJV63qKjjN_NBTiaa67BRzF0KHlffa_7h-WrYJfnDnLRJacXaVjC7Vv9KhgRgF1dfdRb-IN82ltY0mbauk6aSlgBYCsxnvyogY4xlobgWr0XjmudGBq6UlFdAOhRXI2xZ8WiGC5_1xgO3T1RyUOriElQL4-MD392qATSrEKHLtxN25dmly5fAVycyCSMlUUGYWhJX-utHyj3CEkSX4n9kV2obAPKXlkJ2m0lU_bhGYReth4DDfLmYWZqcL26Rd",
                  title: "Health Benefits of Rice",
                  desc: "Nutritional value and health advantages",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu0AkywqPPWm_GdTDk0OvBrfzHTP4qrgHUR5KuhpG9E1NMHJhpHvh8V0Gm0lqEc_82qbpPCX2IrnPZZm_dyS8WLYlNkVPHBC2nnw5XHLE6XN5jJU7SG4bh75FnxaLFiPj2m2zcswVb-qciDQDzeP_YxURDvUeQdD3w7yqnGqWCBueBB02Um5g6KMGKdYVkPbQRiS6W4qDgX08e8LsYJcuitlGwBSpQHjC4UStoja5JG9y32geluH4A4RphJcutlfFSvZmF1z-8Xddc",
                  title: "Tips for Perfect Rice Every Time",
                  desc: "Master the art of cooking rice",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  to="/blog"
                  className="flex flex-col gap-4 rounded-lg min-w-[260px] group"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url("${item.img}")` }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal group-hover:text-[#edbc2a] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[#b9b29d] text-sm font-normal leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 md:mt-16 bg-[#27241c] rounded-xl p-8 md:p-12">
          <div className="flex flex-col gap-6 md:gap-8 items-center text-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Elevate Your Meals?
              </h1>
              <p className="text-white text-base md:text-lg font-normal leading-normal max-w-2xl">
                Experience the difference with Gold Aroma Rice. Order now and
                taste the golden standard of quality.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 md:h-12 px-4 md:px-5 bg-[#edbc2a] text-[#181611] text-sm md:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#e0b227] transition-colors"
            >
              <span className="truncate">Enquiry/Get Quote</span>
            </Link>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-white text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em] pb-3 text-center">
            Quick Contact Info
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 md:h-12 px-4 bg-[#393528] text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4a4738] transition-colors"
            >
              <span className="truncate">WhatsApp</span>
            </a>
            <a
              href="mailto:youremail@example.com"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 md:h-12 px-4 bg-[#393528] text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4a4738] transition-colors"
            >
              <span className="truncate">Email</span>
            </a>
            <a
              href="tel:+919999999999"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 md:h-12 px-4 bg-[#393528] text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4a4738] transition-colors"
            >
              <span className="truncate">Phone</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
