import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';


const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Glow Cosmetics",
      avatar: "data:image/jpeg;base64,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",
      stars: 5,
      text: "Working with Keltoum was a game-changer for our brand. Her UGC content increased our engagement by 327% and directly contributed to a significant boost in sales. The authenticity she brings to each piece makes our products truly shine!",
      category: "Beauty & Skincare"
    },
    {
      id: 2,
      name: "Michael Torres",
      position: "Social Media Manager",
      company: "Fresh Eats",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf29FIvuiNAoOHXmdWxxS2Px_0Wvupat3yE45bzTk2U6GD4nRuFZ_l4AY&s",
      stars: 5,
      text: "The food content Keltoum created for us was absolutely stunning. She has an eye for detail that makes even simple dishes look extraordinary. Our followers couldn't stop asking about the recipes and products featured. Worth every penny!",
      category: "Food & Beverages"
    },
    {
      id: 3,
      name: "Jessica Lee",
      position: "E-commerce Director",
      company: "Urban Style",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxwl0KEhUUVVDVFPHKTd8HMBppf2_52v1xeTkYZMmyFMVZULTTERWonE&s",
      stars: 5,
      text: "Keltoum delivered fashion content that perfectly captured our brand aesthetic while feeling completely authentic. The videos she created for our summer collection outperformed our traditional ad campaigns by a significant margin.",
      category: "Fashion"
    },
    {
      id: 4,
      name: "David Chen",
      position: "Product Marketing Lead",
      company: "TechNova",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfywN4Js2psqvmSafBNN8mxYxlzQXRGiEB369dcZIa9htj1I0lJz4dVY&s",
      stars: 5,
      text: "Explaining tech products in an engaging way is challenging, but Keltoum made it look effortless. Her user-focused approach to showcasing our features resulted in content that actually drives conversions. We'll definitely be working together again!",
      category: "Tech"
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      position: "Brand Manager",
      company: "Eco Living",
      avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABAEAACAQMDAgQDBgIIBAcAAAABAgMABBEFEiExQQYTUWEicYEHFDKRobHB8CNCUmJy0eHxJIKishUWMzQ2Q1T/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAnEQACAgICAQMDBQAAAAAAAAAAAQIRAzEEIUESEzIiM3EFI1Fhgf/aAAwDAQACEQMRAD8A7jSlKAUpSgFKUoBSlKAUqljtGasz3McCSSSuFRFLMT2HzoCRXmR61r9j4p02/jDx3KhfOCO2cBTkjr3BIA/5hWqat46udP8AEU6WEtvqFkEAdVfBidTyAxIU7h0HHI+tCaOl5HrTIrTrLxVqOqWn37S7C1NvgssVzclJ5FBPO0A4HB7moY8S6l4h15bHw5NHbw20aSXEkqb1LE8qTnpgcEdc+1CKN+pWMsNV+8RsssEi3EJ2zog3BG9vUHqO9ZFHWRFdDlWGQR0IoCqlKUApSlAKUpQClKUApSlAKUpQClKUArwnAr2oOrX0On6fPeXLMIIFLylVJIUdeBQEXW9estMcQSyx/eXXIR32hR6k846ehrmX2heP47zTotM0s/HMFaaRHyF6HaDxn34rV/FursutXk9sybLhyBEH52nnax/Ev04Oa02a6JyZTg4xhVFQXSSMgdVuI1l8uRPKbO5E/Cc99vTPvVhNZl+6yWfBBJ3KYxn55xnNY5nLZIJ2g5PNRi7GUsGOe5BoQ5GZe9mL7j5pcjIbccitr8PeOI9GtxaWdqlpHOy/fJ1LPI6juDnOfxdPXitGikbYTICeeTjtVn7wjvsijOOx5qRZ3XwZ4kjKahc2d/ZxWu9SwupCWGQQpGWyT8PK8Y45Nb5o2t6deLHb210kjgYB3ZD464PevlMyFQuwL6Alc7az/h3WZrbU7bN3KoDDzMknjtgeo6/T3oNn1MDXtQNI1S11Syiu7Ny8Mg+EsMH6jtU+hUUpSgFKUoBSlKAUpSgFKUoBSlKAsXV1DaQtNcyCONSMsxrVPtD16w07Rzayukj3qvGsajcSNvXA4xyOTxWR8aQ3FzozRWnMhkXrjGO+c8dP5FcA1d7l7ovNbSQIT8Of6o5wo3Hkfp6VBeK8mJ1B5JI41EpYRDaqnonfisbIDg7iMjk1Lckq2P6vB+dQpW3MFPA6e5qUiGWyCyEA7ec896qkVREJE+H0X+NexWxm/pC4XbydxwAParkMMs0iwxRmdmHw7Buo2tD0stxTbEw/xZ/qlSPrmqowPLeVvhGQMgdKzdl4U1SeB2Np5XoZGwfyrGXulXNllJ48D+1VFkhdWXeGaV0RwSJPhHGMdKlafHkpIdiEjLMx4Uep9qsI22Jgpw3risv4b1Z9NvobgP5Y5VyozlD1B4PH0roU0zsv2W6zcMkWkXduIgsbywsBtLYI6j0w2c10kVy77NrO1l8RPfWuoTXsYtWKF4tnl5K/Djt/WGBwMV1EVBD2e0pShApSlAKUpQClKUApSlAKUpQELUbFL2MI0s8R7PC5Rh9RXDPtEtGhlmEdwZEicRFhAyM7AHJJPGfi7Yz1rvzAFSD0xXLvtK8NxTQ3OoxyXpukVdkezesijJJzjAwPXHQ1DLxZxR8DBXceP55q1FHukUoNzj4uBnmpdy67SzREHbj2PvisjpFsLW3a4KOzOAEA9amTpFow9TMOUMhcLGcFehGMnity8B6H98MlxNBIkaFfLdlKjPcAnqOnPvVvT51gvp4JLWNpYlPnxgA7VwCx464yuc1vmjXKXUB8tVURDbtAxjis2Vuqo1YoK7TK5jBANs0sSc8b3A/WsVq2lxX1tJ5Wx2C5Uggg/WvNZ1PTYiVu4RKActuxgfnVekQ6HdpnT4/u7/iV4W7/ALH5Gsrxpdo0+t6OTanFLBeSwvHtdDyCMVXpoja6QSMwT+ttGSR3471mfH1obXXkZlz5iZ44zjjmsLaRJ96WMsVD9GPT9K9HG7imeZkVSZ9GfZ34Yi8P2MkxlWW4vdsjFcFUXAwox271uFaH9lD3g0yW3uWla3hCLAXTAxyMA9xwMH0IrfKsc2KUpQgUpSgFKUoBSlKAUpSgFKUoBVm5t0uIXikAKupUgjPBGD+hq9Xh6cUBwnxD4Uk0vT7cXN2HhjBhuAwRWhbOVy2ckHGBwP1qbomjRXekW2eA0KMvHOcCup61p1nObe6uLWJ5LeZHEhjBZQDzz1xitX8RXP3LVWJjUIxwNq9gAc/v+Vc83cTTgl9VGvDRmtPNkdwu5djuq/Ey+mfSpvh+GNbaeVQMO236Comr6zHNZbUDrFyJJByVGD296l6TdWaaUrxzJsIyMt2rJJm5Losavohu4ZFjQSQTAeao4YEHIwRyKkafoqq1vI8Xli2i8qMZJO3Pcnk/X1rJaZI7l/60ecKQevvU15owyrxUW2qKuk7o599omlw3csU7zJG0SkHJ25yen6frUf7M9MXUfFFnCFMllZt94Z2UZLhWGPZcvyPVRWd1bTW8R6lc2fky21wWKWs+wuHTAy+MjgHI4P8AkegeFvDdt4ftYYoMs6RlGkY/E2Tnn9OBx1rXiTS7MeaS8GcRAhOByxyarryva6mYUpSgFKUoBSlKAUpSgFKUNAK8zUXUb+GwhMkxJ4OFXq3yrn2s+Lby5aVYGdIh18hyu3/mBz26+lSo2Dpe7pxTNcnsvE2qPFHBBcyMeG+Ft2PXLMc9exNXrTxbqayS27XMhYDcpdRz8vUcfr2qs/oVsmC9cvSjqDMAMkgYrRvGM+mSCT7vdJJeeYrABsgEKRt+oz9cVhry+vNRhJmuXeNu244/KtKv0ktLzblgrgkYPfrWSXIUuqN2PiuLtsnNLNBdyeRITE7B1RhkDPasrp80igiaxyjnO6FgfzBwa13TrqO6jMExCyp+E+nyrYbHmMhy3BwMHB/1rjKfRsijYI77+gzGpTsAe1QLi/KTptOZc5qFd3JgYRFjJJ2VB1ql4XggeSQ5uH446LnoK5OYUDNaR46sLaUQXGkz+ZAvl/eoyh3jOTjJBxn9q2SHx1osibmeaMf3o65BKzyajJbW+TsOZCvRB/nVEtwYisoZcqcxKxwBxn4vmP5452Yck5NIx58OKCvydqtfGOi3PCXDA/3kIqv/AM16YLkRb2KFdwnUbo8+nHIP0xXGdNuGiiM8fnSN0UR4DFfTg8DGM/xq+19Kku38L5BxK4+E54PzwfbrityjZgO8QzJNGskTK6MMqynIIq5XKvC/ik6exL/+z3HzY1GduSeQB0P78/OunWd1DeW0dxbSLJDIoZGXuKq1QL9KUqAKUpQClKUAqJq19Hpuny3c34YwOPUk4A+pIqXWvePdNutV8MXVtYkmcFJQgON+1gxXP0498UQOb674gudWupDJMVUEDai4AHHY98Z5zWHkuoypEfJEWQ8gJJbqV6cdcZHXp1qxFKY5bhJvNW6DcKOAyADjgcHr19qtC7MkJZI9wQBDHgYIB5Hbv+9dVRDsrguQkAkTckjfCrM2fi+HnH55Pv35qWmoyO9tc53IWDOBwcE4IP5ZGPfnmsdCltHa3FxckSFLg8PHvK7TgdfXrj2HXpV1GXy5reAt8CZRTkgD544+p/PmqT7VExlUkzbUeJYvOhYvbseo7H3rCa60UzxGFQ2xuSPlXuiTtb3j7c+RIqmSNgQOR+IVkrjTcnzIArKTnH+VePKLi2j28clJWa22jiUiWJmjkA6isjYRXQQLJdOcdgAKnLGY3G6CQL8gamLbxbfMVgR35rn6mdKSIluyQzAADcerHqfrVrxLPI1vFbWp/wCKnYCP2H9o+wqK90014/3ZA7KcD+yPcmpcax6e3329cS3L4VFJALH0Geg59amEXJ0is5KEW2RtRSHQtJ+7QuPvsw3SSyDpn1+eCPTitee42W0crHkq/wCIksef2ORwfT3pPFLqmq3H3uUSEpvkcfgB4wvXp8vzqPfXdvcSQR2qoYss7xKmzJzn6A9fWvWx4vbjSPGy5vckTbG6W2tkicrtUsQ24HrjG0Z+E47jj8uJMcysyNJK22Rid3QgbshskcnHG73HPFQZVR0MqeWAVOGOOoK56KQc5z3781GTdFOqfCFjYHPL5bHTPcDr06kYx27UjlZsdiYmLQKwOz4nBySxye+Md+3fIPSui/Zfcb7K8tlk3LBIoAA+EZBPHHy/Kua6coVZJvhdAWUKG+OP8Q9eGJPXPHOK6N9m+nyade6mf/ouiJUHoQSD+49etVb7oJdG+0pSoJFKUoBSlKAVS4DKVPQ8Gqq8NAcF8SxQ2/iG+iSMErMdqsuQVUjn58H6CsAjPGXl2nyyeu8Y5Xn8hn8vUGtq8aRFfEuoJt3ETF1U+pGQR79DWo30qoCisApABZnyQCo9+CPT86mMk9bLThKPfhlyxnc27bFKlt4C480A7s8A5A6HjvgdasWzlC2YlKAAFcDkenJBHTOetU6KElQncT8DBThiAO/yq7ujtpCSzSM+CoODjqMg9zyPTjr7W0c0+ydBM0B+GXayDGGBO7njjGRkfQfOs/oespchtu6NgSrI/r7Ho30+day0AntYQGAkkAwGXbx05Gc98enSsebsgtEuBIi8ADIZgMdMnnHPboemMVwy4FkNGHPLH+DqqMjDIAPrkVi9Tt1bIQlfXacZFalba5qFpp8RjnjJVvjE5HQ9Ac/hPHSqbnX7y7JSV8RnHwRoV9+pPP0zWR8KbezZHmw/gz1zqen6ZGIIdryf2V52+7fzmtcvr8XN413KdxjU7Q+SpzxgL7Z7jvzVkRpLu8rIJI3ALuJxnn9+vr8qC2V2eKaAq25WyCoDZ44HQHJ6VrxYI49bMebkSyv+i/YNLD50wkQowARd+Nx4I4PbjA+ftUeyRJtQuZ2UJBGv9EUGBkEfDwPTPp07cVZhMkTy+VHh1Ulk8wnbjAIwPX+FXtNgkuLKIqP6D8JuN+CeT6nrwDn+7Xbs4Fy8fdbhlXG+Ugh2yWO34enYEcj2r3SpI9uwLGrBSw8wbSfltGScjJ59T61RqUpis41eORHMmCrLtB6EjgAA9j8veqtPS4vrnZDGSGH4TjCKSeSM8dcdv40cqVslRt0jNeHlke8aB4/6FCJfxgnOBtBx/iz9BXX/AAkC0KnC4EfxcdyRj9v2rmuk6bFptuyhvMmk5llIGWP+Q/35rqvhRUGiQMo5bJJ9ecfwrJjy+5ldaNeTF7eFXtmZpSlaTIKUpQClKUArw17XhoDjn2ip5Pi+4I48xI2/6QP4Vhbmwtr2BnlQiRRkSIcMDj9eg61nftaxH4mib+1aIf8AqYfwrXkn/wCCkJ7If2rBlbjO0ephSliSZqVjObNIipBJO4MBgjlv5/25lR281zAJeEiwqRgAHjOCD+nNRISjWCqoJfAJzgkZJwQOCe/eq1ulFigZfKMZUptX4SR6/X2r0Yu0eXNU3Rl4ziFFuJXY7OF9cgcjHUYBqFqX/prJGHXaSu4kZLDHcKAQevB5+XW1DdOrTKHTLdFIPUd8euPfuKkArND5BCCWNdiEfCTgcc9M8df9qm/BUsZ88+WztKcMTkHnB9+mdxP+gqrbsR2mRUCxHY7YDMR06Hnj9vpVKyTxg3Ucfm+eQDhNw79fQ8H8iflbZ3aICf4XBdtpjwcE56+voO+BVX0LdlyKVDDcGQKvmsVAHJBx1J4OB7fuaSNEyeQZeA2R5gAAzjORjJzk59qhFiUgZpCG+FdqdOnHz+XtUtgRcwC3WSSbOzB42kEZ47Yz645zVk/AoXp/pduRMZRsU87lOB39PzqRp03krIIFMoUb41IwNxx3HyHSoUqwxXxjhZSVYnJbByR0zjHvU0PE1sxkVYudo3gkDOPl7nv09s1CRNnjEXuBOZMtOWBbg4HGOnX1+tbtpMEFrbIlvEsYIBO3ufn3rTWMgt0LsHVXDRNsK5TPX6En16+3O22Eg8lOeMV5/Mck0vB6XCUXFvyTWbkV0bwY+/Qov7rsv61zFpMGuifZ8+/Q39p2H6CufD+Z05q/b/02ilKV6R5QpSlAKUpQChpSgON/bGceI7bH/wCNf+961MMfuE3+A/tSlYM/yPU4/wBs1mGQ/wDhSn/FkdjjGM/n+gq3xnaFAUopwPUryf0pSt60eZLbLjvmN5MAHdu2jIGR04+tX23NaGYu+9Udh8R6hSf4fzxSldFoqevfSWy32xIj5P4NyZxyaXc0gliIdh5mCwB45UZpSqtdELZGsCeVLEhDkexyP4nPzqqJmOpQNuYMADkE9uaUoSe2O24lAkRSTKvxY56f6CsrcY8xbYgFPPPJ5Pwnj9Dg0pUx2VeiHDMJPMjMUeQobzOd3LY9fYVt1i58lfalK87m/JHq/p/xf5L7sc10v7N//jxPrcP/AApSufE+Z05v2za6UpXpHkilKUB//9k=",
      stars: 5,
      text: "Not only is Keltoum incredibly talented at creating beautiful content, but she also truly understood our sustainable brand values. The lifestyle content she produced resonated deeply with our target audience and helped us connect with new customers.",
      category: "Lifestyle"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Beauty & Skincare", "Food & Beverages", "Fashion", "Tech", "Lifestyle"];
  
  const filteredTestimonials = selectedCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Discover what brands have to say about working with me and the impact my UGC content has had on their marketing goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-purple-800/70 text-purple-200 hover:bg-purple-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredTestimonials.length > 0 ? (
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-10 text-pink-500 opacity-30">
              <Quote size={60} />
            </div>
            <div className="absolute -bottom-8 right-10 text-pink-500 opacity-30 transform rotate-180">
              <Quote size={60} />
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex mb-6 text-yellow-400">
                  {[...Array(filteredTestimonials[activeIndex].stars)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl font-light text-white mb-8 leading-relaxed">
                  "{filteredTestimonials[activeIndex].text}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-purple-600 mr-4">
                    <img 
                      src={filteredTestimonials[activeIndex].avatar} 
                      alt={filteredTestimonials[activeIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{filteredTestimonials[activeIndex].name}</h4>
                    <p className="text-purple-300">
                      {filteredTestimonials[activeIndex].position}, {filteredTestimonials[activeIndex].company}
                    </p>
                    <span className="inline-block mt-1 px-3 py-1 bg-purple-700/50 rounded-full text-xs text-purple-200">
                      {filteredTestimonials[activeIndex].category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 gap-3">
              <button 
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors flex items-center justify-center text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Indicator Dots */}
              <div className="flex items-center gap-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === index 
                        ? "w-6 bg-pink-500" 
                        : "w-2.5 bg-purple-600 hover:bg-purple-500"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors flex items-center justify-center text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-purple-300 py-12">
            No testimonials available for this category yet.
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-white text-2xl font-medium mb-4">Ready to create content that converts?</h3>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-pink-500 hover:bg-pink-600 transition-colors rounded-md text-white font-medium"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;