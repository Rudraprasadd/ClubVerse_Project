"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Trophy, ArrowRight, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredClubs = [
    {
      id: 1,
      name: "Tech Innovation Club",
      description: "Building the future through technology and innovation",
      members: 156,
      category: "Technology",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Environmental Action Society",
      description: "Creating sustainable solutions for a better tomorrow",
      members: 89,
      category: "Environment",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Creative Arts Collective",
      description: "Expressing creativity through various art forms",
      members: 124,
      category: "Arts",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Tech Symposium",
      date: "March 15, 2024",
      club: "Tech Innovation Club",
      attendees: 200,
    },
    {
      id: 2,
      title: "Art Exhibition Opening",
      date: "March 18, 2024",
      club: "Creative Arts Collective",
      attendees: 150,
    },
    {
      id: 3,
      title: "Sustainability Workshop",
      date: "March 22, 2024",
      club: "Environmental Action Society",
      attendees: 75,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">ClubConnect</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect. Engage. <span className="text-indigo-600">Excel.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the ultimate college club management platform where students discover their passions, build lasting
            connections, and create unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Join ClubConnect <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/clubs">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                Explore Clubs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Active Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">15K+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">1.2K+</div>
              <div className="text-gray-600">Events Monthly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clubs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Clubs</h2>
            <p className="text-lg text-gray-600">Discover amazing communities waiting for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredClubs.map((club) => (
              <Card key={club.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={club.image || "/placeholder.svg"}
                    alt={club.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{club.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{club.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{club.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {club.members} members
                    </div>
                    <Badge variant="secondary">{club.category}</Badge>
                  </div>
                  <Link href={`/clubs/${club.id}`}>
                    <Button className="w-full mt-4">View Club</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Don't miss out on these exciting opportunities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.club}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees} attending
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ClubConnect?</h2>
            <p className="text-lg text-gray-600">Everything you need to manage and grow your club community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">Connect with like-minded students and build lasting relationships</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Management</h3>
              <p className="text-gray-600">Organize and manage events with powerful planning tools</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <p className="text-gray-600">Earn badges and recognition for your club participation</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">Track engagement and growth with detailed insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8">Join thousands of students already using ClubConnect</p>
          <Link href="/auth/register">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Create Your Account <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ClubConnect</h3>
              <p className="text-gray-400">Connecting students through meaningful club experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/clubs" className="hover:text-white">
                    Browse Clubs
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ClubConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
