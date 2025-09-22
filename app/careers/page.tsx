'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Clock, Briefcase, Heart, Globe, Award } from "lucide-react"

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Technology",
      location: "Remote / Amritsar",
      type: "Full-time",
      experience: "2-4 years",
      description: "We're looking for a skilled frontend developer to help build and maintain our e-commerce platform using React, Next.js, and modern web technologies."
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Amritsar, Punjab",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our team to help shape the future of traditional Indian e-commerce. You'll work closely with artisans and customers to improve our platform."
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      description: "Help our customers have the best possible experience with Culture Hatti. You'll be the bridge between our customers and our artisan partners."
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Amritsar, Punjab",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create compelling marketing campaigns that celebrate Indian culture and connect with our diverse customer base across India and globally."
    },
    {
      id: 5,
      title: "Content Writer",
      department: "Content",
      location: "Remote",
      type: "Part-time",
      experience: "1-2 years",
      description: "Write engaging content about Indian culture, traditional crafts, and our artisan stories. Bilingual (Hindi/English) skills preferred."
    }
  ]

  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Meaningful Work",
      description: "Help preserve and promote Indian cultural heritage"
    },
    {
      icon: <Globe className="h-6 w-6 text-red-600" />,
      title: "Flexible Work",
      description: "Remote work options and flexible hours"
    },
    {
      icon: <Award className="h-6 w-6 text-red-600" />,
      title: "Growth Opportunities",
      description: "Learn and grow in a fast-paced startup environment"
    },
    {
      icon: <Users className="h-6 w-6 text-red-600" />,
      title: "Great Team",
      description: "Work with passionate, culturally-aware colleagues"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">करियर | Careers</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Join our mission to preserve and promote authentic Indian culture through technology and innovation.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-12 border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-red-900 text-center">Why Work With Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
                At Culture Hatti, we're not just building an e-commerce platform - we're creating a bridge between 
                traditional Indian artisans and modern customers. Join us in preserving centuries-old craftsmanship 
                while embracing cutting-edge technology.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Open Positions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-red-900 text-center mb-8">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="border-2 border-amber-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                          <Badge variant="outline" className="text-red-600 border-red-600">
                            {job.type}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.experience}
                          </div>
                        </div>
                        <p className="text-gray-700">{job.description}</p>
                      </div>
                      <div className="lg:ml-6">
                        <Button className="bg-red-800 hover:bg-red-900 text-white">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Culture Section */}
          <Card className="mb-12 border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-red-900 text-center">Our Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Values We Live By</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Respect for traditional craftsmanship and cultural heritage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Innovation in technology while preserving authenticity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Inclusive and diverse workplace environment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Customer-first approach in everything we do</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Competitive salary and equity options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Health insurance and wellness programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Learning and development opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Flexible work arrangements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Process */}
          <Card className="border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-red-900 text-center">Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Apply</h4>
                  <p className="text-sm text-gray-600">Submit your application with resume and cover letter</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Review</h4>
                  <p className="text-sm text-gray-600">Our team reviews your application within 1 week</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interview</h4>
                  <p className="text-sm text-gray-600">Video call with our team to discuss the role</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-red-600 font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Decision</h4>
                  <p className="text-sm text-gray-600">We'll get back to you with our decision</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center mt-12">
            <Card className="border-2 border-amber-200 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-red-900">Don't See Your Role?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  We're always looking for talented individuals who share our passion for Indian culture. 
                  Send us your resume and tell us how you'd like to contribute to our mission.
                </p>
                <Button className="bg-red-800 hover:bg-red-900 text-white">
                  Send Us Your Resume
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Email: careers@culture-hatti.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
        <BazaarFooter />
      </Suspense>
    </div>
  )
}
