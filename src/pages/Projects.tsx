
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Dignitestore",
      category: "eCommerce",
      description: "Complete Shopify store setup with custom theme and product catalog.",
      image: "../../Images/dignitestore.png",
      results: ["50% increase in conversion rate", "Improved user experience", "Mobile optimization"],
      link: "https://www.dignitestore.com/"
    },
    
    {
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtfGVufDB8fDB8fHww",
      "title": "A Day in the Life of a Social Media Manager",
      "category": "Social Media",
      "description": "A productive day balancing client content, personal growth, and strategic planning.",
      "results": [
        "Revamped and updated my CV for professional opportunities",
        "Continued my HubSpot digital marketing certification course",
        "Planned upcoming content themes and strategy for client campaigns"
      ],
      link: "https://www.instagram.com/reel/DEh0ZqMtwrN/?igsh=ZzY2YTM0OWl3aXE="
    },
    
   
    {
      title: "HOME WHIMSY",
      category: "eCommerce",
      description: "A curated shopping experience that celebrates individuality. ",
      image: "../../Images/hw.jpeg",
      results: ["50% increase in conversion rate", "Improved user experience", "Mobile optimization"],
      link: "https://www.home-whimsy.com/"
    },
    {
      title: "Holidayrentalalgarve",
      category: "eCommerce",
      description: "Apartment Rental Algarve | Holiday Rental Algarve | Carvoeiro Two Carvoeiro holiday apartments and one fully renovated traditional",
      image: "../../Images/holidayrentalalgarve.png",
      results: ["50% increase in conversion rate", "Improved user experience", "Mobile optimization"],
      link: "https://www.holidayrentalalgarve.com/"
    },
    {
      title: "JoyLoveandCakes",
      category: "eCommerce",
      description: "Cake Design & Custom Sweets | Joy, Love And Cakes - Pennsauken, NJ.",
      image: "../../Images/joyloveandcakes.png",
      results: ["50% increase in conversion rate", "Improved user experience", "Mobile optimization"],
      link: "https://www.joyloveandcakes.com/"
    },
    {
      image: "https://images.unsplash.com/photo-1519923834699-ef0b7cde4712?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluc3RhZ3JhbXxlbnwwfHwwfHx8MA%3D%3D",
      "title": "Strategic Growth for Social Media Success",
      "category": "Social Media",
      "description": "A focused content and engagement strategy designed to build consistent online presence and community.",
      "results": [
        "Increased weekly engagement by 40% with strategic post scheduling",
        "Improved follower retention through consistent value-driven content",
        "Launched a mini-campaign that boosted reach by 3.5x in 10 days"
      ],
      "caption": "Growing on social media takes time, but with the right strategy, results will follow🔥 What’s your go-to tip for social media growth?",
      "link": "https://www.instagram.com/p/DHtpAxJAze4/"
    },
    
   
    {
      title: "Content Creation for Palm Oil Brand",
      category: "Social Media",
      description: "Executed a 3-month campaign focused on promoting the health benefits and culinary versatility of organic palm oil. This included branded content creation, influencer partnerships, and targeted paid ads.",
      image: "../../Images/redoil.jpeg",
      results: [
        "Doubled Instagram followers",
        "30% boost in engagement rates",
        "15% increase in product sales"
      ],
      link: "https://www.instagram.com/reel/DHnJ7bVtqXF/?igsh=MW4zbXY4ZHpzOWJ5NA%3D%3D"
    },
    
    {
      title: "The~StyleGirl",
      category: "eCommerce",
      description: "Shopify setup with custom product photography and SEO optimization.",
      image: "../../Images/stylegirl.png",
      results: ["First-month sales exceeded targets by 30%", "Established brand identity", "Seamless checkout experience"],
      link: "https://the-stylegirl.com/"
    },
    {
      title: "SunnydropPlanner",
      category: "eCommerce",
      description: "Shopify setup with custom product photography and SEO optimization.",
      image: "../../Images/sunny.png",
      results: ["First-month sales exceeded targets by 30%", "Established brand identity", "Seamless checkout experience"],
      link: "https://www.etsy.com/shop/SunnydropPlanner?ref=shop-header-name&listing_id=1412631620&from_page=listing"
    },
    {
      title: "SwedishGenius",
      category: "eCommerce",
      description: "Swedishgenius - Etsy Nigeria Shop Dominating by Swedishgenius located in Stockholm, Sweden.",
      image: "../../Images/swedishgenius.png",
      results: ["First-month sales exceeded targets by 30%", "Established brand identity", "Seamless checkout experience"],
      link: "https://www.etsy.com/shop/SwedishGenius"
    },
    {
      title: "Digital Task Manager",
      category: "Virtual Assistance",
      description: "Ongoing support for a busy CEO including email management and scheduling.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=80",
      results: ["Reduced admin workload by 70%", "Improved response times", "Optimized calendar management"],
      
      // link: "https://www.instagram.com/reel/DHnJ7bVtqXF/?igsh=MW4zbXY4ZHpzOWJ5NA%3D%3D"
    },
    
    {
      "title": "Executive Calendar & Email Management",
      image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D",
        "category": "Virtual Assistance",
        "description": "Provided professional calendar scheduling and inbox management support, ensuring seamless communication and optimized daily operations for the client.",
        "results": [
          "40% improvement in response time",
          "Zero scheduling conflicts",
          "Enhanced client-executive communication"
        ]
      },

  {
    title: "Skills Map and Peer Coaching Reflection",
    link: "https://docs.google.com/document/d/10tTSZEGxicmVKKfXjXYXqGoCCAik5H3LaByZcK639F4/edit?usp=sharing",
    description: "Reflection on personal strengths, weaknesses, and peer coaching experience.",
    category: "Virtual Assistance",
    results: ["Personal project", "Improved self-awareness and communication"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "VA Tech Tools - Calendar",
    link: "https://intranet.alxswe.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXRsR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aade887ada01f56be317475fb7b6cf247ac8ce48/Screen.PNG",
    description: "Screenshot showing effective use of digital calendar for scheduling.",
    category: "Virtual Assistance",
    results: ["Personal project", "Enhanced time management skills"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "VA Tech Tools - Inbox",
    link: "https://intranet.alxswe.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWxsR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--48d2c51f5a9619fa2af9e36f361e764f81647824/Cap.PNG",
    description: "Demonstration of professional inbox organization and email management.",
    category: "Virtual Assistance",
    results: ["Personal project", "Developed digital organization skills"],
    image: "https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5ib3h8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Milestone: Travel Pack",
    link: "https://docs.google.com/presentation/d/1GA8ZV4CRG9QgRHKfZT8Cib5DBvdYVR9IXNa5qi-3uBg/edit?usp=sharing",
    description: "Presentation of a travel itinerary with organized logistics and planning.",
    category: "Virtual Assistance",
    results: ["Personal project", "Strengthened planning and presentation abilities"],
    image: "https://images.unsplash.com/photo-1643046322163-cc1eadb6bd6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwcGFja3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Milestone: Project Plan",
    link: "https://docs.google.com/spreadsheets/d/1fdq2LLa_tSABG8H06cn5USXvsL2_QzzvzDdcEy-BvJA/edit?usp=sharing",
    description: "Detailed spreadsheet outlining task breakdown and timelines for a project.",
    category: "Virtual Assistance",
    results: ["Personal project", "Gained experience in project management"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdCUyMHBsYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Milestone: Internet Research",
    link: "https://docs.google.com/spreadsheets/d/1XcoqNtGfu1zLz9UPSP3R4Io-LnNS8sW9R4QhZ0Xb_0Y/edit?usp=sharing",
    description: "Compiled internet research with sources and analysis on a chosen topic.",
    category: "Virtual Assistance",
    results: ["Personal project", "Enhanced online research and data interpretation"],
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "Milestone: Meeting Management",
    link: "https://docs.google.com/document/d/1EUcMclVdjKj153ijX4LkaY0_cyeBB-3KCSK3xyZkwu4/edit?usp=sharing",
    description: "Documented meeting agenda, minutes, and follow-up tasks.",
    category: "Virtual Assistance",
    results: ["Personal project", "Improved meeting coordination and documentation"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "Updated Skills Tracker",
    link: "https://docs.google.com/spreadsheets/d/11cR0rkCBx3zAsJk_9_ByKpb5JzHm2Ubg44Z6f_Ytgow/edit?usp=sharing",
    description: "Spreadsheet tracking progress in various professional skill areas.",
    category: "Virtual Assistance",
    results: ["Personal project", "Promoted self-evaluation and goal setting"],
    image: "https://images.unsplash.com/photo-1629721671030-a83edbb11211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbGx8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Resume",
    link: "https://docs.google.com/document/d/1xrCf6gNp_o2Y7PiebNqY0eRfg5qIKX8n9rcCxRufmbY/edit?usp=sharing",
    description: "Professional resume showcasing relevant skills and experience.",
    category: "Virtual Assistance",
    results: ["Personal project", "Demonstrated ability to present qualifications effectively"],
    image: "https://plus.unsplash.com/premium_photo-1661288470388-c5006797bdff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdW1lfGVufDB8fDB8fHww"
  },
  {
    title: "Cover Letter",
    link: "https://docs.google.com/document/d/1bJgLNxuxOz1LRpmuk8mL1mZCFer3T9jvPB7t240j1l0/edit?usp=sharing",
    description: "Custom cover letter tailored for virtual assistant roles.",
    category: "Virtual Assistance",
    results: ["Personal project", "Showcased professional writing and personalization skills"],
    image: "https://images.unsplash.com/photo-1599498448014-81d90414c50a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNvdmVyJTIwbGV0dGVyfGVufDB8fDB8fHww"
  },
  {
    title: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/azeezaduke?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    description: "Public LinkedIn profile highlighting virtual assistant credentials.",
    category: "Virtual Assistance",
    results: ["Personal project", "Built professional online presence"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "Online Bid",
    link: "https://docs.google.com/document/d/1uZ0xeBkFBve9Br7GotV_Ae2Vndrn5YMlh2Vin9loW5E/edit?usp=sharing",
    description: "Example bid for an online freelancing opportunity.",
    category: "Virtual Assistance",
    results: ["Personal project", "Practiced freelance bidding and proposal writing"],
    image: "https://images.unsplash.com/photo-1626901491152-3960a771a802?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJpZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Personal Pitch",
    link: "https://docs.google.com/document/d/1SLiF6j3cSapWQHPgylPQYIOsJ4V-s8GB5czDw4bTZ9Q/edit?usp=sharing",
    description: "Concise personal pitch highlighting strengths as a virtual assistant.",
    category: "Virtual Assistance",
    results: ["Personal project", "Refined personal branding and pitching"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=60"
  },


      
      {
        "title": "Travel Coordination & Research Support",
        "category": "Virtual Assistance",
        "description": "Handled detailed travel planning, logistics coordination, and research support for an international project, ensuring smooth execution from planning to implementation.",
        "results": [
          "Successful coordination of 5+ trips",
          "30% time savings in planning",
          "Improved client satisfaction with logistics"
        ],
        image: "https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8fDA%3D",
        "title": "Data Entry & Skill Mapping Project",
        "category": "Virtual Assistance",
        "description": "Executed high-volume data entry tasks with accuracy and created a skills matrix to support recruitment and team optimization strategies.",
        "results": [
          "99% data accuracy rate",
          "Completed mapping for 100+ team members",
          "Enabled faster recruitment matching"
        ]
      },
    
    
    // {
    //   title: "Fashion Influencer Growth",
    //   category: "Social Media",
    //   description: "Content strategy and community engagement for a fashion influencer.",
    //   image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&auto=format&fit=crop&q=80",
    //   results: ["Doubled Instagram following", "Secured 3 brand partnerships", "Increased engagement by 45%"],
    //   link: "https://www.instagram.com/reel/DHnJ7bVtqXF/?igsh=MW4zbXY4ZHpzOWJ5NA%3D%3D"
    // },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ["all", ...new Set(projects.map(project => project.category))];

  // Before and After examples for social media accounts
  const beforeAfterExamples = [
    {
      id: 1,
      accountName: "Eat with Mimi",
      platform: "Instagram",
      beforeImage: "../../Images/ewmb.jpeg",
      afterImage: "../../Images/ewma.jpeg",
      followers: {
        before: 10,
        after: 300
      },
      engagement: {
        before: "1.2%",
        after: "4.5%"
      },
      description: "Complete brand refresh with consistent aesthetic and strategic content planning."
    },
    {
      id: 2,
      accountName: "sixtyeightdesign Brand",
      platform: "Instagram",
      beforeImage: "../../Images/sixtyeightdesignb.jpeg",
      afterImage: "../../Images/sixtyeightdesigna.jpeg",
      followers: {
        before: 798,
        after: 1993
      },
      engagement: {
        before: "0.8%",
        after: "7.2%"
      },
      description: "Implemented video-first strategy and community-building campaigns."
    },
    {
      id: 3,
      accountName: "My Personal Page",
      platform: "Instagram",
      beforeImage: "../../Images/mpb.jpeg",
      afterImage: "../../Images/mpa.jpeg",
      followers: {
        before: 387,
        after: 997
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
            <h1 className="text-4xl md:text-5xl sf font-bold mb-6 sf">My Projects</h1>
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
                className={`px-4 py-2 rounded-md sf font-medium transition-colors ${
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
              <h2 className="text-3xl sf font-bold nt">Before & After Transformations</h2>
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
                    <div className="bg-white rounded-lg shadow overflow-hidden hover-lift h-full">
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl sf font-semibold nt">{example.accountName}</h3>
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
                            <p className="text-sm font-medium pc">AFTER</p>
                            <div className="h-40 overflow-hidden rounded-md">
                              <img 
                                src={example.afterImage} 
                                alt={`${example.accountName} after`} 
                                className="w-full h-full " 
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                          <div className="bg-[#f1f1f1] p-3 rounded">
                            <p className="text-sm text-gray-500">Followers</p>
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-gray-600 line-through">{example.followers.before}</span>
                              <span className="pc font-bold">{example.followers.after}</span>
                            </div>
                          </div>
                          <div className="bg-[#f1f1f1] p-3 rounded">
                            <p className="text-sm text-gray-500">Engagement</p>
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-gray-600 line-through">{example.engagement.before}</span>
                              <span className="pc font-bold">{example.engagement.after}</span>
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
                {/* <div className="relative static translate-y-0 mr-2" /> */}
              </div>
            </div>
          </div>

          {/* Social Media Growth Strategies */}
          <div className="py-10">
            <h3 className="text-2xl sf font-bold nt mb-6 text-center">Proven Growth Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow overflow-hidden hover-lift">
                <div className="h-2 bp"></div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold nt sf mb-3">Content Calendar Strategy</h4>
                  <p className="text-gray-600 mb-4">
                    Strategic planning of content themes, posting schedules, and engagement windows for maximum reach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
                      <span className="text-sm text-gray-600">Consistent posting schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
                      <span className="text-sm text-gray-600">Content themes aligned with business goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
                      <span className="text-sm text-gray-600">Seasonal and trend-based content planning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden hover-lift">
                <div className="h-2 pb"></div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold nt sf mb-3">Engagement Techniques</h4>
                  <p className="text-gray-600 mb-4">
                    Proven methods to increase authentic engagement and build community around your brand.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
                      <span className="text-sm text-gray-600">Interactive stories and polls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
                      <span className="text-sm text-gray-600">Community questions and featured responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
                      <span className="text-sm text-gray-600">User-generated content campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden hover-lift">
                <div className="h-2 bp"></div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold sf nt mb-3">Analytics Optimization</h4>
                  <p className="text-gray-600 mb-4">
                    Data-driven approaches to continuously improve performance and reach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
                      <span className="text-sm text-gray-600">Weekly performance analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
                      <span className="text-sm text-gray-600">Content type effectiveness tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full pb mt-2"></span>
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
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold nt sf mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it, here's what my clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#38B6FF] hover-lift">
              <p className="text-gray-600 italic mb-4">
                "Working with this freelancer transformed our online store. Sales increased by 40% in the first month after the redesign, and the whole process was smooth and professional."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 pb rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium nt">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Boutique Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#38B6FF] hover-lift">
              <p className="text-gray-600 italic mb-4">
                "The social media strategy completely revitalized our brand's online presence. We've seen remarkable growth in followers and engagement, plus a significant uptick in website traffic."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 pb rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium nt">Michael Peterson</h4>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#202340] to-[#2C3062] py-16 text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing for your business.
            </p>
            <a
              href="/contact"
              className="pb hover:bg-white hover:nt text-white text-sm font-medium px-6 py-3 rounded-md transition-colors duration-300"
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
