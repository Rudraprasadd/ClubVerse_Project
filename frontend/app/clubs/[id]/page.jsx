"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Star, MapPin, Calendar, Clock, Mail, Phone, Globe, Heart, Share2 } from "lucide-react"
import Link from "next/link"

export default function ClubDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState("about")
  const [isJoined, setIsJoined] = useState(false)

  // Mock club data - in real app, this would be fetched based on params.id
  const club = {
    id: 1,
    name: "Tech Innovation Club",
    description:
      "Building the future through technology and innovation. We focus on emerging technologies, coding workshops, hackathons, and connecting students with industry professionals.",
    category: "Technology",
    members: 156,
    rating: 4.8,
    location: "Engineering Building, Room 201",
    founded: "2019",
    email: "tech@college.edu",
    phone: "+1 (555) 123-4567",
    website: "https://techclub.college.edu",
    image: "/placeholder.svg?height=400&width=800",
    isVerified: true,
    president: {
      name: "Sarah Johnson",
      email: "sarah.j@college.edu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  }

  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      date: "2024-01-25",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 101",
      attendees: 45,
      description: "Learn the fundamentals of AI and ML with hands-on coding exercises",
    },
    {
      id: 2,
      title: "Tech Industry Panel",
      date: "2024-02-01",
      time: "6:00 PM - 8:00 PM",
      location: "Auditorium A",
      attendees: 120,
      description: "Meet professionals from top tech companies and learn about career opportunities",
    },
    {
      id: 3,
      title: "Hackathon 2024",
      date: "2024-02-15",
      time: "9:00 AM - 9:00 PM",
      location: "Engineering Building",
      attendees: 80,
      description: "24-hour coding competition with prizes and networking opportunities",
    },
  ]

  const members = [
    { id: 1, name: "John Doe", role: "Member", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Jane Smith", role: "Vice President", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Mike Johnson", role: "Secretary", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Emily Davis", role: "Member", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 5, name: "Chris Wilson", role: "Treasurer", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 6, name: "Lisa Brown", role: "Member", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const recentActivity = [
    { id: 1, action: "New workshop announced", timestamp: "2 hours ago" },
    { id: 2, action: "5 new members joined", timestamp: "1 day ago" },
    { id: 3, action: "Event photos uploaded", timestamp: "3 days ago" },
    { id: 4, action: "Meeting minutes published", timestamp: "1 week ago" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">ClubConnect</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/clubs">
                <Button variant="outline">← Back to Clubs</Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Club Header */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="relative">
            <img
              src={club.image || "/placeholder.svg"}
              alt={club.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              {club.isVerified && <Badge className="bg-blue-600">Verified</Badge>}
              <Badge className="bg-white text-gray-700">{club.category}</Badge>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{club.name}</h1>
                <p className="text-gray-600 mb-4">{club.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {club.members} members
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {club.rating} rating
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {club.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Founded {club.founded}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                <Button
                  onClick={() => setIsJoined(!isJoined)}
                  className={isJoined ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {isJoined ? "Joined ✓" : "Join Club"}
                </Button>
                <Button variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Follow
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Club Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About {club.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>
                      The Tech Innovation Club is a vibrant community of students passionate about technology and
                      innovation. We provide a platform for students to explore emerging technologies, develop their
                      coding skills, and connect with like-minded peers and industry professionals.
                    </p>
                    <h4>What We Do:</h4>
                    <ul>
                      <li>Weekly coding workshops and tutorials</li>
                      <li>Guest lectures from industry experts</li>
                      <li>Hackathons and coding competitions</li>
                      <li>Tech project collaborations</li>
                      <li>Career guidance and networking events</li>
                    </ul>
                    <h4>Who Can Join:</h4>
                    <p>
                      Our club is open to all students regardless of their technical background. Whether you're a
                      complete beginner or an experienced programmer, there's a place for you in our community.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="text-sm">{club.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="text-sm">{club.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-3 text-gray-400" />
                      <a href={club.website} className="text-sm text-blue-600 hover:underline">
                        {club.website}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="text-sm">{club.location}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Club Leadership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={club.president.avatar || "/placeholder.svg"} alt={club.president.name} />
                        <AvatarFallback>
                          {club.president.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{club.president.name}</p>
                        <p className="text-sm text-gray-600">President</p>
                        <p className="text-sm text-gray-500">{club.president.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              <Button>Create Event</Button>
            </div>
            <div className="grid gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {event.attendees} attending
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <Button>Register</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Club Members ({club.members})</h2>
              <Button variant="outline">Invite Members</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member) => (
                <Card key={member.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates and announcements from the club</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="flex-1">{activity.action}</span>
                      <span className="text-sm text-gray-500">{activity.timestamp}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
