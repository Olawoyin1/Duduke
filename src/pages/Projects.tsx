
import { useState } from "react";
// import ProjectCard from "@/components/ProjectCard";
import { Images } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
// import { 
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious
// } from "@/components/ui/carousel";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Boutique Clothing Store",
      category: "eCommerce",
      description: "Complete Shopify store setup with custom theme and product catalog.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80",
      results: ["50% increase in conversion rate", "Improved user experience", "Mobile optimization"]
    },
    {
      title: "Wellness Brand Campaign",
      category: "Social Media",
      description: "3-month social media strategy with content creation and paid advertising.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=80",
      results: ["2x follower growth", "30% engagement increase", "15% rise in direct sales"]
    },
    {
      title: "Handmade Jewelry Store",
      category: "eCommerce",
      description: "WooCommerce setup with custom product photography and SEO optimization.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80",
      results: ["First-month sales exceeded targets by 30%", "Established brand identity", "Seamless checkout experience"]
    },
    {
      title: "Executive Assistant",
      category: "Virtual Assistance",
      description: "Ongoing support for a busy CEO including email management and scheduling.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=80",
      results: ["Reduced admin workload by 70%", "Improved response times", "Optimized calendar management"]
    },
    {
      title: "Fashion Influencer Growth",
      category: "Social Media",
      description: "Content strategy and community engagement for a fashion influencer.",
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&auto=format&fit=crop&q=80",
      results: ["Doubled Instagram following", "Secured 3 brand partnerships", "Increased engagement by 45%"]
    },
    {
      title: "Online Course Launch",
      category: "Virtual Assistance",
      description: "Launch support for an online course including admin and customer service.",
      image: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=600&auto=format&fit=crop&q=80",
      results: ["Successful launch with 200+ students", "Streamlined enrollment process", "Positive student feedback"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ["all", ...new Set(projects.map(project => project.category))];

  // Before and After examples for social media accounts
  const beforeAfterExamples = [
    {
      id: 1,
      accountName: "Fashion Boutique",
      platform: "Instagram",
      beforeImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=80",
      followers: {
        before: 2300,
        after: 6800
      },
      engagement: {
        before: "1.2%",
        after: "4.5%"
      },
      description: "Complete brand refresh with consistent aesthetic and strategic content planning."
    },
    {
      id: 2,
      accountName: "Wellness Brand",
      platform: "Facebook",
      beforeImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
      followers: {
        before: 5100,
        after: 12400
      },
      engagement: {
        before: "0.8%",
        after: "3.2%"
      },
      description: "Implemented video-first strategy and community-building campaigns."
    },
    {
      id: 3,
      accountName: "Local Bakery",
      platform: "Instagram",
      beforeImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
      followers: {
        before: 850,
        after: 3700
      },
      engagement: {
        before: "1.5%",
        after: "5.2%"
      },
      description: "Created mouth-watering content with local targeting and user-generated campaigns."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="navy text-white py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-300">
              Case studies showcasing my work in eCommerce, social media, and virtual assistance
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeFilter === category
                    ? "navy text-white"
                    : "bg-softwhite nt hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-10 bg-softwhite">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Images className="text-teal h-6 w-6" />
              <h2 className="text-3xl font-bold text-navy">Before & After Transformations</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See real results from social media accounts I've managed and transformed
            </p>
          </div>

          <div className="pb-10 ">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {beforeAfterExamples.map((example) => (
                  <div key={example.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift h-full">
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl sf font-semibold text-navy">{example.accountName}</h3>
                          <span className="navy text-white text-xs px-2 py-1 rounded">
                            {example.platform}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-500">BEFORE</p>
                            <div className="h-40 overflow-hidden rounded-md">
                              <img 
                                src={example.beforeImage} 
                                alt={`${example.accountName} before`} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-teal">AFTER</p>
                            <div className="h-40 overflow-hidden rounded-md">
                              <img 
                                src={example.afterImage} 
                                alt={`${example.accountName} after`} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                          <div className="bg-softwhite p-3 rounded">
                            <p className="text-sm text-gray-500">Followers</p>
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-gray-600 line-through">{example.followers.before}</span>
                              <span className="text-teal font-bold">{example.followers.after}</span>
                            </div>
                          </div>
                          <div className="bg-softwhite p-3 rounded">
                            <p className="text-sm text-gray-500">Engagement</p>
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-gray-600 line-through">{example.engagement.before}</span>
                              <span className="text-teal font-bold">{example.engagement.after}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mt-2 text-sm">{example.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <div className="relative static translate-y-0 mr-2" />
                <div className="relative static translate-y-0 ml-2" />
              </div>
            </div>
          </div>

          {/* Social Media Growth Strategies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">Proven Growth Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                <div className="h-2 bg-teal"></div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-navy mb-3">Content Calendar Strategy</h4>
                  <p className="text-gray-600 mb-4">
                    Strategic planning of content themes, posting schedules, and engagement windows for maximum reach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">Consistent posting schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">Content themes aligned with business goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">Seasonal and trend-based content planning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                <div className="h-2 bg-teal"></div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-navy mb-3">Engagement Techniques</h4>
                  <p className="text-gray-600 mb-4">
                    Proven methods to increase authentic engagement and build community around your brand.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">Interactive stories and polls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">Community questions and featured responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">User-generated content campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                <div className="h-2 bg-teal"></div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-navy mb-3">Analytics Optimization</h4>
                  <p className="text-gray-600 mb-4">
                    Data-driven approaches to continuously improve performance and reach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">Weekly performance analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">Content type effectiveness tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2"></span>
                      <span className="text-sm text-gray-600">Audience insights and demographic targeting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it, here's what my clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-softwhite p-6 rounded-lg border-l-4 border-navy hover-lift">
              <p className="text-gray-600 italic mb-4">
                "Working with this freelancer transformed our online store. Sales increased by 40% in the first month after the redesign, and the whole process was smooth and professional."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-navy rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-navy">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Boutique Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-softwhite p-6 rounded-lg border-l-4 border-teal hover-lift">
              <p className="text-gray-600 italic mb-4">
                "The social media strategy completely revitalized our brand's online presence. We've seen remarkable growth in followers and engagement, plus a significant uptick in website traffic."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-navy">Michael Peterson</h4>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-navy to-[#2C3062] py-16 text-white">
        <div className="container-narrow">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing for your business.
            </p>
            <a
              href="/contact"
              className="bg-teal hover:bg-white hover:text-navy text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
