const LandingPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full px-3 max-w-7xl">
        <div
          className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
          style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <div className="flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col flex-1">
                {/* Hero Section */}
                <div className="@container">
                  <div className="@[480px]:p-4">
                    <div
                      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDllZOka6ac6rJDzRWcwW5Qwwnpuo1-9O5MmLEowFZAQLkHdlhOoL9ue-NzGMnGNjrv-llc3XyqXCQBiIXblm0mHOgyQTnvWY3XQAFtKqDJBiRvaA7sK0upgzly8SCU7DnP2kiAZ4AyNzEbPjnyAM8BJaw2t14FYYlQKdqS11PRae4W5ZM4wxsHtzobeBjyO89OGQSMJEf3RNYPlAxWI0c4QJi5uuvZswZdPX_P94HfIl2SCzM9Be9u4Y1Bw1krzj4w_G7gZkNSPowx")',
                      }}
                    >
                      <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto px-4">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                          Experience the Golden Standard of Rice
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                          Discover the rich aroma and superior quality of our
                          premium rice, perfect for any culinary creation.
                        </h2>
                      </div>
                      <a
                        href="#products"
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e7b512] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#d4a411] transition-colors"
                      >
                        <span className="truncate">Shop Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Products Sections */}
                <SectionContainer id="products" title="Deals of the Day">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <ProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDyhZEL-RQJLiSS2e5gsThL6E6HhiwtLzL095J8jDmJIPSsLrW6CyZfoc2FPe2peo2p3A1fcd75Q8pcik7mZjWpgbxSUmkWZvSCYlDUuADoQbuxOqeyZi_-iTOaAYdvHyAqRaG4uB4ioAUswYqwj9qDi9UUV0Qu9U2lsIUgz_TpZKVRUC3mnOVht830mj6TrpnG9Rc1mdHw4r2FK4nSiCtD3CLNrMp5Zjfbu_HB1GPgEtzsmikuibYXujsh-UYwRpBByWMT7kpZ7vxn"
                      title="Gold Aroma Rice - 5kg"
                      description="Perfect for everyday meals"
                    />
                    <ProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAqfHWKRFgGmyq9weh5g7mVsxFBZekRVi79W4ON90pIYrTJfR6ijfQFdsxMS__1NjzBh_UZKyThEZYaalzhsQ1Pf8lcHkk1ka5RCtYfK3vLYbfT7o_KN2tJ78b4aBgyOxGFmyYsBsqs7A5EJvsBVrZLvQ5dydYBCYTaE3qoJK1VvLUosnuP83i1YNoDs5gSlPDFYw02gq3eQfZLy2ZdX0iYtPxq_nSDQbvh7GYcabeeclOIOflLoTm72cwtavBQNX8Bg2sUZF6ouy-i"
                      title="Gold Aroma Rice - 10kg"
                      description="Ideal for larger families"
                    />
                    <ProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDtLHOd5uHc5J6YUbQOoG2CF54FwtoImGOxoEDHvuE5lLHRU5r9SXqrogwMe7XDr20gQCTzKWv7gfXTmFwMqWd3lpVlxcNPDA_-drt0g1mpSwinH4kjhxev6WyHwyENAo2TnjEwy-_Kq7HJeidxQZXfzg_nhMj5_wdzK82tyjLCSZ-TrvFx_9-RrI49meghw7hiHr62fIbRdc5TtpHb5D7MvAcC1wgAX053RRykX1j9PaVlDbVPLClko45S4ZeGBFQ4tUqxHJTqPc_4"
                      title="Gold Aroma Rice - 25kg"
                      description="Best value for bulk purchases"
                    />
                  </div>
                </SectionContainer>

                <SectionContainer title="Featured Products">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <FeaturedProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCPqrJXXGvkAs81B6KEPbybv3pZrIrA2ANK2iM7EMexaiOUSE8ULqcYsywteJC4Y4otYXWBnprWvf8jsVpymS5ZrXAsG4LXzZNtXFfGN3OMggAf7HSnMquFpgAQRENzOm_OJydx0vDy8R358zBWaIv3uySAWpzY6x3oVuVfttWj3lQAhUz6FZsrxC5hJx9qhVvLtSxIvuI2MpOhJWmq79THXjIj0ldKcoYmxPwPVqH4-xN4iT850qPS3oK3Bu_-m1PYaY47_3kAd6Oz"
                      title="Gold Aroma Rice - 5kg"
                      description="Perfect for everyday meals"
                    />
                    <FeaturedProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDFtut3DiAxUURBpKlzDfpGA3t_HkFtp5MT1GJfnXjegYFHkAbIkXaVt3PBqESITYjdMFwVQB7akfzcrRRxnuPmWlPhYNZqRFKEhWfvqLmbA9hV1Oeok0sUsYSXwArFFFw3uQOSJimKFU-cCK3kYrUupKlmndRJVz85Hh97ypbHKDBv4B3e21Z1YXk4mFoaKB2eN7UlYha93BIp5DDs5dzkdbrXL3gtBdNiW33elUdu4kJUy9lBocIl9Vov0O-s2eEuMjyXT_4nrdQH"
                      title="Gold Aroma Rice - 10kg"
                      description="Ideal for larger families"
                    />
                    <FeaturedProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCQGg902rVwi8d4pnDJ4nqWDzMMDeS-s2KdGxWQPYkbyYQ-AD51SE8Wr2Mp5QpeIbyLBl0Fg7-QSszPHTQkcdd8LbJrhPT_EPoBx24zRyOD_pW_iH41sce5USI_mqhYdUsXl-Rtfjvc-vWbso1HbzCW4-wX62BNSvis9UOXixNtpXmE6mVKafY_aWfbmSAhBho-XdS-XFC6irx4EyBcUj5-YzG34Xttjodr_-NU7po_QAJi91okYofRL9k5QxmhrZQjVw_OXp6Joz67"
                      title="Gold Aroma Rice - 25kg"
                      description="Best value for bulk purchases"
                    />
                  </div>
                </SectionContainer>

                <SectionContainer id="recipes" title="New Arrivals">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <ProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAupPbN7bORHmNJgWEUD1Qrn7kwRgOf7adM02C3EZan1IVFcui3ylVy_NhquxyiSWkDHo0EqGSRU_j_1ECAi4TV4AV7qwQ5LlG4SDvhKQV_rQ0GYYF5rr_fC75njOvHTQg5sxTFRhZCYBogi_-PhoHHBpLnfBcO9e-kU2fHsYQf_kuDTQwn9HaYxTXHy_0IDmuxkoyR2PJNRZ737soEoit0KC5zyeLs0aslOX9e1KfwqhICegMTfN-d5HAw6Kiy0dVsh0ljHhSi_P5l"
                      title="Gold Aroma Rice - 5kg"
                      description="Perfect for everyday meals"
                    />
                    <ProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB7tE2avGVb-rvaHBaNWSkS68r-q--x4GJzzntlOo4i0Yserw49rIkOwY8lOPgU1iS_wsaz7fgp05sD3VEwR_iyRhNKuDxj0Yuft5RoKvycQgsRF0v7t-WtagCJWcLQscG3ZEEuofd0d4P7lZjThfMzGh6f7zEyxRwwhIoKS9UDO78-OHz3S13HRwDySN6HOzv3oyiXJ792i8YPMgVk590OBXtNNkk6bCe6zUtXztfaLABUxQaDvqkwvELMYCty0z7_JOZ61GgVqNn_"
                      title="Gold Aroma Rice - 10kg"
                      description="Ideal for larger families"
                    />
                    <ProductCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB4d9WNChvJweqhoiPiGFka2UokkeQpO_R4xWdhLrPEUHsNZ6LmVu1XNGZcg1jhMoSQsV8jeEJkp99rSa3WZBvVgKfr4tBkEftfeCkmIbzCR6AxAzIkedrfCeIsDAbcbleVXvf6mulgQjKPjhkfiMZyadNbLvBa9lKg5uMfbfckxQ41y_B3wiDYcQAcbYqPfGn24c1LtPlXGz8k94fR2MWa2KAJitvROVOx4RlcBxusrpRItTjNA1ehQ8y9LtCdzteupigijUtpJyMH"
                      title="Gold Aroma Rice - 25kg"
                      description="Best value for bulk purchases"
                    />
                  </div>
                </SectionContainer>

                {/* Category Blocks */}
                <SectionContainer title="Category Blocks">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                    <CategoryBlock
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAi-pEMaFWobw3ulCKaYTlkV57MWt0oWWC-6zoiBehy12mm-MpjhhTe2JpSQKPU3ZQ_X2uEl64QbmoSR23OLFKGVNYXzasLG-ks1nwXEtwO7BeLhqdVeaM_k-A-KFdCQ-fu2l0OLwcU6sSR8ZhdexWMWxix4eX4hYpj_3s46Eqn0or_zp7gqlK1NShbYrTLYli8Ura0tXjr3YsRAtxutjZDOJLcg_pN9yjRhuolVPV1qLaTXFDBU2BRdgCBkbRki_ZtS6UXOjQGx4o4"
                      title="Long Grain Rice"
                    />
                    <CategoryBlock
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuACGEPB0G9NG5dME3mzFWbDJvWvX2QZj4lnamgMmz5E_AdDN6iqv9YomDyQa-N9AHuoEiud1_w2_cd0WYvHVV36flDvRBqr-oftC95a1vImMqVs1Yq6Syporw7WN_TvjBstZ_bLC9sDND6yo5A9EgJWwcRk698tOV9TcJ6MaJKcy57RxHfclpNGg02vuYE5jpWNFQb461zb1r-hQKU3c9bDK91KD6-6WDG_0_K602GJN5y76iIgLdhpQtmFJ-lKT7-X6WsKU3ttCXZ3"
                      title="Short Grain Rice"
                    />
                    <CategoryBlock
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBeETD278BMKoCXCG2gMKhlvRbYwNJDdWlDJfZcRh3VIjfd2SQaef0p4ZvfWo-TlN0SrHFzdT65L2FLGENydCpPl0cdJuXBu03KWVsufBg38th3fpvQm61tBNxrSo7TYKmIU5HidUA7rFmjIA-xVwQgnKP-MXI5h0zfIvQZgzwLXo4qSVGsC9oMok7qNb8S6jruPo9y-qJEhWCzU-lEOWhAGeIb6DN6Oz9IjjkcTg-FvLFQutOW7SI5DMGIxmucI25WPwVA0zOgInxW"
                      title="Brown Rice"
                    />
                    <CategoryBlock
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCyHlIlAs-MGCGQisufUC9665dhE9yY4K6ZdjRz3tUNrVcrr77cIv0xmnpVjva2aIi8dwazvb7pOa9_NsDBsO6KHpuu-2dhVZ-sDzB3YEWdWJ_IkR2QsbMc6sOe1TJFc58tPEHWyQst8M0xKjoXJgiP22NUlBz_V8PKv6ibAlmmh5AYLcalUHmmkm6jv8XpVwKcHy25nl1s-_9s-TFSB24PoW4Nk5kxTt-u6YqzjNX_BpT28v8INU6XDHAozXqHKbSfGSut7lWbNMd0"
                      title="Glutinous Rice"
                    />
                  </div>
                </SectionContainer>

                {/* Brand Showcase */}
                <SectionContainer title="Brand Showcase">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
                    <BrandLogo imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAyPCQpdOxgU5I0Ojo0BrWypKU_zbhzMNZj3MC5nGAPb8lb1p43BA8u_VoanMjNWPT3kYwEYKQ50pWzkYUF7T-nXlsLpny3-4cDHDtn6A0lg_yapBsl142VAtXW2RpJbwTn7BAqrxQ0YqBhhUQ_6oTqY-Dlud1YsYJJjXaRmI71TzzdLCYPfMdejXQbdwWJn0f4HW0J5Hmb4X0wZ02No47WOKqddIITTOoiW8bpWd7ZsOpQF5faRBloyMYruuY-fW4XA2J62RVBG-Pn" />
                    <BrandLogo imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDHSjeYYp1gY0xnfgMFBl6_nmP6tf2h4yfw2m2ipy2LzKYJMu2-WdSsfR5s5OgflgTVDTwIyZ5gkHEw7jM4VpUVij4WWRK27GZ7h-ldZCve26CE5SAUvna7mm_tmr1bPX_YWnHiqwzdRDBFfRkrJ0A_3N9XV8BEkY1Otu5bT31BlQMXnkXYTwBY7578z4pTDDvjbjzOVI6-tiRb6-RDwDvwX_r5VIiaAsBHIZdFYhRvcz15eDnmXKAUgy39_uwtPjL58VVwadpBPjpM" />
                    <BrandLogo imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuC1DIUgH_ZPRDBWkQcAxLViZk6YxNmXY_a8thwjVJGZ5BYr4UzhsqYFsoyjyiZQnOTbPMZO_oCu5okullF-5k6Dl-PUiz1wD33aKjOevOng8ldCnZLI4TZW4o8UPNLSdLTlcqIvrv0Zf93LjW_aoJR1ejzzBv0_PpOEAW79kp5v0XNJ89vJZGzotuJKTXgCquSHaJkCcbHnBHOBDOKyWZEvaRT6iTbMTYLJeQWJu4sBRtNKg8jbHio8f0dy0u39tYscKsS487LS71tL" />
                  </div>
                </SectionContainer>

                {/* Recipe Spotlight */}
                <SectionContainer title="Recipe Spotlight">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <RecipeCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCQimDtZfbSBdQWstFxR7d9KPTIS1coao45csHDki2Ed0kL5QPz_u7AIW4dLw7KCX85ncK1_VN1ytF7k9pGNK4uROCskTLXkS1_BR6Q4u47kKv4u5ekRvRjWbRINj2dW77gzye8BmAwG6xgRxgkYmsv11qPd8bAHG4ZMgKn4wpUnkY1TQ-_y9C0mGboo5EP_JFa6X4NdidPmYfQ7G-MBbzSrQPqubP89eb2lVJpBEq-yxI6WmEVBQ0LwWvq37379m3QMXWG8LIS1FDf"
                      title="The Journey of Gold Aroma Rice"
                      description="From the field to your table"
                    />
                    <RecipeCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB-8puaPP6FxFjPOfGJV63qKjjN_NBTiaa67BRzF0KHlffa_7h-WrYJfnDnLRJacXaVjC7Vv9KhgRgF1dfdRb-IN82ltY0mbauk6aSlgBYCsxnvyogY4xlobgWr0XjmudGBq6UlFdAOhRXI2xZ8WiGC5_1xgO3T1RyUOriElQL4-MD392qATSrEKHLtxN25dmly5fAVycyCSMlUUGYWhJX-utHyj3CEkSX4n9kV2obAPKXlkJ2m0lU_bhGYReth4DDfLmYWZqcL26Rd"
                      title="Health Benefits of Rice"
                      description="Nutritional value and health advantages"
                    />
                    <RecipeCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDu0AkywqPPWm_GdTDk0OvBrfzHTP4qrgHUR5KuhpG9E1NMHJhpHvh8V0Gm0lqEc_82qbpPCX2IrnPZZm_dyS8WLYlNkVPHBC2nnw5XHLE6XN5jJU7SG4bh75FnxaLFiPj2m2zcswVb-qciDQDzeP_YxURDvUeQdD3w7yqnGqWCBueBB02Um5g6KMGKdYVkPbQRiS6W4qDgX08e8LsYJcuitlGwBSpQHjC4UStoja5JG9y32geluH4A4RphJcutlfFSvZmF1z-8Xddc"
                      title="Tips for Perfect Rice Every Time"
                      description="Master the art of cooking rice"
                    />
                  </div>
                </SectionContainer>

                {/* About Us */}
                <SectionContainer id="about" title="About Us">
                  <p className="text-[#181611] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Gold Aroma Rice is dedicated to providing the highest
                    quality rice, cultivated with care and tradition. Our
                    mission is to deliver exceptional taste and nutritional
                    value to every meal, ensuring satisfaction and well-being
                    for our customers.
                  </p>
                  <div className="flex w-full grow bg-white @container p-4">
                    <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-xl grid grid-cols-[2fr_1fr_1fr]">
                      <div
                        className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi3HlStE4zWLkVHG_ofPXfwg4veDiXI9S8AdtRgF4fG87QvZswGI7Kz6sn72t-M2buD4bXf99rSCRSEAtGmQU2s0HFMTsERMWIw_Cn_6bRzloEcu_in31kxUXp1XKeSLokpm-YcppwSHLckEjN9dcRhNAzgYu2cb3SsA7oPGIdTJjByXRYSODhs8APzo5iXiNwNEWL-7J3HjZt656kSw_B-K0fKL9cWVeBGMj29JVp32wCwsEKDQGw9xw7nOoGqUQO9TPtSOm1FKkU")',
                        }}
                      ></div>
                      <div
                        className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2 row-span-2"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGclRxbQBhBKZlgPSUpLvMpeJ9ny_P6rlTRRQYol4ayr-yM94L9r3AQWS2NENfE78lG9yM4M2TMIqty2tgKrDHAojJ37CERQVRlOXo2v8y6-pAASgSpBwpLx8E76vwS1e2nG8yZO6Aus-M5wJUOUsNt5O3Wdp5b1jQbvsZn8dp3ayV39XDzH4Gg5sTmCzHMD_kgOFWjqhzR-wsx7rgqxCdmxCHgdC_OK2bQAZusdTcgIvjd81li-6LCbgAE5bbvnbbDHiX9zEEWG6L")',
                        }}
                      ></div>
                    </div>
                  </div>
                </SectionContainer>

                {/* Why Choose Us */}
                <SectionContainer title="Why Choose Us">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                    <FeatureCard
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>
                        </svg>
                      }
                      title="Sustainable Farming"
                      description="Our rice is grown using sustainable farming practices, ensuring minimal environmental impact and promoting biodiversity."
                    />
                    <FeatureCard
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                        </svg>
                      }
                      title="Superior Quality"
                      description="Gold Aroma Rice is known for its superior quality, offering a rich aroma and exceptional taste that enhances any dish."
                    />
                    <FeatureCard
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                        </svg>
                      }
                      title="Health Benefits"
                      description="Our rice is packed with essential nutrients, contributing to a healthy and balanced diet."
                    />
                    <FeatureCard
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z"></path>
                        </svg>
                      }
                      title="Awards & Certifications"
                      description="We have received numerous awards and certifications for our commitment to quality and sustainability."
                    />
                  </div>
                </SectionContainer>

                {/* Customer Testimonials */}
                <SectionContainer title="Customer Testimonials">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <TestimonialCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB-2L03j8V7fgf8q5B3DcWy9XW7lff5peOIFvSSBgIykBXeA67gEMBNT8-ad-bVY5TecopGVykCSeHVzhtlAGS79B8-j6zCjRxHXhu6ZlbM2cVFjb7VjritX2sZB82IfyghmEGQFEJeEI8U0aaOtkBmdVO1Lf5m-YZc5cyq_wX6HFYWI5MpXdu3TRqfzJaEMIOrfk2KAAv3_eA6uqtIBFNbWMNOizEp6chUYjzK5GJM73NiBgdXOUBD7_npd2IsnD0WGWhDK3cVrbXs"
                      name="Sophia Carter"
                      review="5 Stars: 'I love that this rice is sustainably farmed. It tastes amazing and I feel good about supporting an eco-friendly brand!'"
                    />
                    <TestimonialCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDiVKt4YjdPQaI6Tn51mjcVTP-K9UKRiaFoRYz_nj4KZ36kXOFcNNF4Hc5UgZ5VTxXYBgAkbNq6jCrnw3aa8z-wCAjuVgI2hr6ChrMgfGfAmbQ4LxWSdCFoMpphSUwgKMtcB_2o8S-03glCWJVWi1Z_TJGzMnu1IFBmcsu3SJ3oVx1iR30gyaSwh_DHz_Y2ARzmafXME_NzmgegY0gO64uymFX-1NTjB2lUAaE8p4yzEWYwhLD27aqmvUEsD-EQKoO0cm6vnjZG_iMz"
                      name="Ethan Walker"
                      review="4 Stars: 'The quality of Gold Aroma Rice is unmatched. The aroma is incredible and it cooks perfectly every time.'"
                    />
                    <TestimonialCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAhqXPF6LgcW0vsA5vnxLEncRunO-MLq9h7FmqAR1bnTPT-Ym5Z1GD_VBjWOSL_yuGRAce-rpXNAKp3ngNzPXoOlo-Qfp0h6AB5Bt-LzzocrNVrO_pO-Gr7wRlU8ZCTiwB3P9yL8SyyWSA1OxgeAXcPzJeWpUV2Xj6cmtTes6R2w_CeJ9cpJuv9bN1c74kFOUOGa7bld9zz26r620aMsiedF8-0xaAz13hrAFa22ofZ-u9hUBtKwtbXQxQmTXz0OrSUZN2FeCmNddqZ"
                      name="Olivia Hayes"
                      review="5 Stars: 'This rice is not only delicious but also so healthy. I feel great knowing I'm feeding my family nutritious meals.'"
                    />
                  </div>
                </SectionContainer>

                {/* Blog Preview */}
                <SectionContainer title="Blog Preview">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <BlogCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDq4itS9_jMNRfW9liz1J06yOYq_FZ0ieMgum4i_EMTNPiZ3OzF-Qh6u7ntMiqCf9jR8wXdwwqMLPx7_a8WYVfvmIDSndQbtADxkUP_PlIpn8Ww-dgw-1rPyeglXyU6MrDjURObAb4LGFeL0EgektBFdjEzuxfMQdFEkZXzmnUCpZolu6Du-hsK1mrXMeB4s7QMKCbTT8iIym_TyIihi6VJ35U4HfGr2HhPwP8Qgya4l27gG69jY1F_dqDIM6yYt4NjfXp3ByCLYXfD"
                      title="The Journey of Gold Aroma Rice"
                      description="From the field to your table"
                    />
                    <BlogCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAV9R13u_1J8Je4XTgPu5akcujpLIFgsAaNQxYnqL1tHbUUiqzeaVmE3pnCXwsjPU5wsheKGaKw4UC9iPwaydb_0g0e4omJ-wuJl8jLHsax6wNKiUzpxk21HvLpDv2inNOLzGOab7j4h1O-fpG9d2O9HCGOSKz6kC4ei2IUFvad-wlrXjMir0qstd0nUVKY-16TK-VcL8cCDVJ7ncbnfNU0lrJe_7UcRUFumTnnHw1mCsQTuzVm_z7ZS1JVbZaz9AI4DHIR1zIU3RrU"
                      title="Health Benefits of Rice"
                      description="Nutritional value and health advantages"
                    />
                    <BlogCard
                      imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDqkwU9YoyG4To-GwnGubfoqXxYlxN654zuNYrmwbI_bB7YHamb5_Df7UptBR6XoGIiCdz64jWjUloGZM6MoAcm7gqjpYbmSX_Iyolksym57Y9DhTEurmICO0WjEsco6B3WHkZRY1qCaxoGyPNLkGTLbQmWnDl-tgXgeCwGy1dsC4sBMdNUPLroX2jUKIdeh9DZ8DJL2NzK0zQ_WDOiXaJp2qgL5Gg6TLkUFZ6mSMLPDecRbwM-tY40vhdx3H5oHxAOPLupgnuq2Ent"
                      title="Tips for Perfect Rice Every Time"
                      description="Master the art of cooking rice"
                    />
                  </div>
                </SectionContainer>

                {/* Customer Support */}
                <SectionContainer title="Customer Support">
                  <div className="flex flex-col sm:flex-row gap-4 px-4 py-3 justify-center">
                    <SupportButton href="#faqs" text="FAQs" />
                    <SupportButton href="#contact" text="Contact Us" />
                    <SupportButton href="#returns" text="Return Policy" />
                  </div>
                </SectionContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const SectionContainer = ({ id, title, children }) => (
  <div id={id} className="mb-8">
    <h2 className="text-[#181611] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      {title}
    </h2>
    {children}
  </div>
);

const ProductCard = ({ imageUrl, title, description }) => (
  <div className="flex flex-col gap-4 rounded-lg">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <div>
      <p className="text-[#181611] text-base font-medium leading-normal">
        {title}
      </p>
      <p className="text-[#898061] text-sm font-normal leading-normal">
        {description}
      </p>
    </div>
  </div>
);

const FeaturedProductCard = ({ imageUrl, title, description }) => (
  <div className="flex flex-col gap-4 rounded-xl bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-[0_0_8px_rgba(0,0,0,0.15)] transition-shadow">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
      <div>
        <p className="text-[#181611] text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-[#898061] text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f3f0] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e5e4e0] transition-colors">
        <span className="truncate">Add to Cart</span>
      </button>
    </div>
  </div>
);

const CategoryBlock = ({ imageUrl, title }) => (
  <div className="flex flex-col gap-3 pb-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl hover:scale-105 transition-transform"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <p className="text-[#181611] text-base font-medium leading-normal text-center">
      {title}
    </p>
  </div>
);

const BrandLogo = ({ imageUrl }) => (
  <div className="flex flex-col gap-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl hover:scale-105 transition-transform"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
  </div>
);

const RecipeCard = ({ imageUrl, title, description }) => (
  <div className="flex flex-col gap-4 rounded-lg">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <div>
      <p className="text-[#181611] text-base font-medium leading-normal">
        {title}
      </p>
      <p className="text-[#898061] text-sm font-normal leading-normal">
        {description}
      </p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 hover:bg-[#f9f9f8] transition-colors rounded-lg">
    <div className="text-[#181611] flex items-center justify-center rounded-lg bg-[#f4f3f0] shrink-0 size-12">
      {icon}
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">
        {title}
      </p>
      <p className="text-[#898061] text-sm font-normal leading-normal line-clamp-2">
        {description}
      </p>
    </div>
  </div>
);

const TestimonialCard = ({ imageUrl, name, review }) => (
  <div className="flex flex-col gap-4 rounded-lg">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <div>
      <p className="text-[#181611] text-base font-medium leading-normal">
        {name}
      </p>
      <p className="text-[#898061] text-sm font-normal leading-normal">
        {review}
      </p>
    </div>
  </div>
);

const BlogCard = ({ imageUrl, title, description }) => (
  <div className="flex flex-col gap-4 rounded-lg">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <div>
      <p className="text-[#181611] text-base font-medium leading-normal">
        {title}
      </p>
      <p className="text-[#898061] text-sm font-normal leading-normal">
        {description}
      </p>
    </div>
  </div>
);

const SupportButton = ({ href, text }) => (
  <a
    href={href}
    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f3f0] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e5e4e0] transition-colors"
  >
    <span className="truncate">{text}</span>
  </a>
);

export default LandingPage;
