import PageHero from '@/components/layout/PageHero'
import React from 'react'

const Product = () => {
  return (
    <>
    <PageHero 
        title="Products" 
        subtitle="We taken extra steps to create a stronger community of like-minded people dedicated to celebrating youth for the social causes"
      />

      {/* SocialBirds Section with Card Styling */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* SocialBirds Image Section - Left */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Orange Card for SocialBirds Image */}
                  <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <img 
                        src='https://www.beaninfosys.com/img/social-bird.png' 
                        alt="SocialBirds Logo"
                        className="w-48 h-48 object-contain mx-auto mb-4"
                      />
                      <h3 className="text-xl font-semibold text-[#3F321F] mb-2">SocialBirds</h3>
                      <p className="text-gray-600">Community Platform</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-bounce delay-500"></div>
                </div>
              </div>

              {/* Text Section - Right */}
              <div className="flex-1">
                <div className="text-gray-800">
                  <h2 className="text-4xl font-bold mb-6 text-[#3F321F]">
                    SocialBirds Platform
                  </h2>
                  
                  <p className="text-lg text-foreground/70">
                    SocialBirds is an Online platform providing help to organizations to achieve their objective. 
                    Many social Organizations are working to help the communities, however with the increasing 
                    social media there is a potential opportunity to quickly reach out and engage the large 
                    philanthropists in a meaningful way.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To fulfill the need, we set off to build SocialBirds online platform that would connect 
                    more people with our nonprofit beneficiaries in a more meaningful way. SocialBirds Team 
                    has taken extra steps to create a stronger community of like-minded people dedicated to 
                    celebrating youth for the social causes.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    It is our intent to complement your organization's existing fundraising and volunteering 
                    activities by giving you a user-friendly Online platform to create visually compelling 
                    campaigns that raise awareness and funding for your organizational needs and dreams.
                  </p>
                  <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                <span className="text-[#3F321F] font-semibold">Currently Available</span>
              </div>
            </div>
                </div>
              </div>
            </div>
            
            {/* Centered Status Indicator - Full Width */}
            
          </div>
        </div>
      </div>

      {/* Stay Tuned Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text Section - Left */}
              <div className="flex-1">
                <div className="text-gray-800">
                  <h2 className="text-4xl font-bold mb-6 text-[#3F321F]">
                    Stay Tuned for More Products
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-foreground/70">
                    We are continuously working on innovative solutions to serve our community better. 
                    Our development team is hard at work creating new products and services that will 
                    revolutionize how organizations connect, collaborate, and create meaningful impact.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/70">
                    Keep an eye on this space as we prepare to launch exciting new products in the near future. 
                    These upcoming solutions will complement our existing offerings and provide even more 
                    value to our growing community of users.
                  </p>
                  <div className="flex justify-around ml-6 mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-[#3F321F] rounded-full animate-pulse"></div>
                <span className="text-[#3F321F] font-semibold">More products launching soon</span>
              </div>
            </div>
                </div>
              </div>

              {/* Dummy Image Section - Right */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Placeholder for future product image */}
                  <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Coming Soon</h3>
                      <p className="text-gray-600">New innovative products</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-60 animate-bounce delay-1000"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-bounce delay-500"></div>
                </div>
              </div>
            </div>
            
            {/* Centered Status Indicator - Full Width */}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
