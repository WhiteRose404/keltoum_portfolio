import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Glow Cosmetics",
      avatar: "/api/placeholder/64/64",
      stars: 5,
      text: "Working with Keltoum was a game-changer for our brand. Her UGC content increased our engagement by 327% and directly contributed to a significant boost in sales. The authenticity she brings to each piece makes our products truly shine!",
      category: "Beauty & Skincare"
    },
    {
      id: 2,
      name: "Michael Torres",
      position: "Social Media Manager",
      company: "Fresh Eats",
      avatar: "/api/placeholder/64/64",
      stars: 5,
      text: "The food content Keltoum created for us was absolutely stunning. She has an eye for detail that makes even simple dishes look extraordinary. Our followers couldn't stop asking about the recipes and products featured. Worth every penny!",
      category: "Food & Beverages"
    },
    {
      id: 3,
      name: "Jessica Lee",
      position: "E-commerce Director",
      company: "Urban Style",
      avatar: "/api/placeholder/64/64",
      stars: 5,
      text: "Keltoum delivered fashion content that perfectly captured our brand aesthetic while feeling completely authentic. The videos she created for our summer collection outperformed our traditional ad campaigns by a significant margin.",
      category: "Fashion"
    },
    {
      id: 4,
      name: "David Chen",
      position: "Product Marketing Lead",
      company: "TechNova",
      avatar: "/api/placeholder/64/64",
      stars: 5,
      text: "Explaining tech products in an engaging way is challenging, but Keltoum made it look effortless. Her user-focused approach to showcasing our features resulted in content that actually drives conversions. We'll definitely be working together again!",
      category: "Tech"
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      position: "Brand Manager",
      company: "Eco Living",
      avatar: "/api/placeholder/64/64",
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