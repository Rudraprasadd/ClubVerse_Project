"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Calendar,
  MapPin,
  Clock,
  Star,
  Heart,
  MessageSquare,
  Share2,
  UserPlus,
  Settings,
  Trophy,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  Instagram,
  Twitter,
  Facebook,
  Search,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock club data
const clubData = {
  id: 1,
  name: "Tech Innovation Club",
  description:
    "Exploring cutting-edge technology and innovation through hands-on projects, workshops, and competitions.",
  longDescription: `The Tech Innovation Club is a vibrant community of technology enthusiasts dedicated to exploring the latest trends in software development, artificial intelligence, and emerging technologies. 

  Our mission is to provide a platform for students to learn, collaborate, and innovate together. We organize regular workshops, hackathons, and tech talks featuring industry experts.

  Whether you're a beginner looking to learn your first programming language or an experienced developer wanting to work on cutting-edge projects, our club welcomes everyone with a passion for technology.`,
  category: "Technology",
  members: 245,
  founded: "2020",
  rating: 4.8,
  isVerified: true,
  isMember: false,
  coverImage: "/placeholder.svg?height=300&width=800",
  avatar: "/placeholder.svg?height=100&width=100",
  president: {
    name: "John Smith",
    email: "john.smith@college.edu",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  vicePresident: {
    name: "Sarah Johnson",
    email: "sarah.johnson@college.edu",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  contact: {
    email: "tech.innovation@college.edu",
    phone: "+1 (555) 123-4567",
    website: "https://techinnovation.college.edu",
    social: {
      instagram: "@tech_innovation_club",
      twitter: "@tech_innovation",
      facebook: "TechInnovationClub",
    },
  },
  meetingSchedule: {
    day: "Every Friday",
    time: "4:00 PM - 6:00 PM",
    location: "Computer Lab 101",
  },
}

const upcomingEvents = [
  {
    id: 1,
    title: "AI Workshop: Machine Learning Fundamentals",
    date: "Dec 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Lab 101",
    attendees: 89,
    maxAttendees: 100,
    description: "Learn the basics of machine learning and neural networks with hands-on coding exercises.",
    isRegistered: false,
  },
  {
    id: 2,
    title: "Hackathon 2024: Build the Future",
    date: "Dec 22, 2024",
    time: "9:00 AM - 9:00 PM",
    location: "Innovation Center",
    attendees: 156,
    maxAttendees: 200,
    description: "48-hour hackathon to build innovative solutions for real-world problems.",
    isRegistered: true,
  },
  {
    id: 3,
    title: "Tech Talk: Future of Web Development",
    date: "Jan 5, 2025",
    time: "3:00 PM - 4:30 PM",
    location: "Auditorium A",
    attendees: 67,
    maxAttendees: 150,
    description: "Industry expert discusses the latest trends and future of web development.",
    isRegistered: false,
  },
]

const recentPosts = [
  {
    id: 1,
    author: {
      name: "Tech Innovation Club",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    title: "AI Workshop Registration Now Open!",
    content:
      "🚀 Exciting news! Registration for our AI Workshop is now open. Limited seats available - register now to secure your spot!",
    image: "/placeholder.svg?height=300&width=500",
    timestamp: "2 hours ago",
    likes: 89,
    comments: 23,
    shares: 12,
  },
  {
    id: 2,
    author: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    title: "Hackathon Team Formation",
    content:
      "Looking for team members for the upcoming hackathon! We need frontend developers and UI/UX designers. DM if interested! 💻",
    timestamp: "1 day ago",
    likes: 45,
    comments: 18,
    shares: 8,
  },
  {
    id: 3,
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    title: "Project Showcase Success!",
    content:
      "Amazing turnout at yesterday's project showcase! Thanks to everyone who participated and attended. Check out the winning projects! 🏆",
    image: "/placeholder.svg?height=300&width=500",
    timestamp: "3 days ago",
    likes: 127,
    comments: 34,
    shares: 22,
  },
]

const clubMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "President",
    department: "Computer Science",
    year: "4th Year",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Jan 2022",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Vice President",
    department: "Software Engineering",
    year: "3rd Year",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Mar 2022",
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Technical Lead",
    department: "Computer Science",
    year: "4th Year",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Sep 2022",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Event Coordinator",
    department: "Information Technology",
    year: "2nd Year",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "Jan 2023",
  },
]

const achievements = [
  {
    id: 1,
    title: "National AI Challenge Winner",
    description: "First place in the National AI Innovation Competition 2024",
    date: "Nov 2024",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Best Tech Club Award",
    description: "Recognized as the best technology club in the region",
    date: "Oct 2024",
    icon: "🥇",
  },
  {
    id: 3,
    title: "Innovation Excellence",
    description: "Outstanding contribution to campus innovation initiatives",
    date: "Sep 2024",
    icon: "💡",
  },
]

export default function ClubDetailPage() {
  const [activeTab, setActiveTab] = useState("about")

  const handleJoinClub = () => {
    console.log("Joining club...")
    // Handle club joining logic
  }

  const handleEventRegistration = (eventId) => {
    console.log(`Registering for event ${eventId}`)
    // Handle event registration logic
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ClubConnect
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/clubs" className="text-gray-600 hover:text-gray-900">
                ← Back to Clubs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Club Header */}
      <div className="relative">
        <div className="h-64 bg-gradient-to-r from-blue-600 to-purple-600">
          <Image
            src={clubData.coverImage || "/placeholder.svg"}
            alt="Club cover"
            width={800}
            height={300}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end space-x-6">
              <Avatar className="w-24 h-24 border-4 border-white">
                <AvatarImage src={clubData.avatar || "/placeholder.svg"} alt={clubData.name} />
                <AvatarFallback className="text-2xl">
                  {clubData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{clubData.name}</h1>
                  {clubData.isVerified && (
                    <Badge className="bg-blue-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-xl text-gray-200 mb-4">{clubData.description}</p>
                <div className="flex items-center space-x-6 text-sm">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {clubData.members} members
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {clubData.rating} rating
                  </span>
                  <span>Founded {clubData.founded}</span>
                  <Badge variant="outline" className="border-white text-white">
                    {clubData.category}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {!clubData.isMember ? (
                  <Button onClick={handleJoinClub} size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join Club
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Member Settings
                  </Button>
                )}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {clubData.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-gray-700 whitespace-pre-line">{clubData.longDescription}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Meeting Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="font-medium">{clubData.meetingSchedule.day}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{clubData.meetingSchedule.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>{clubData.meetingSchedule.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Club Leadership</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage
                          src={clubData.president.avatar || "/placeholder.svg"}
                          alt={clubData.president.name}
                        />
                        <AvatarFallback>
                          {clubData.president.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{clubData.president.name}</h4>
                        <p className="text-sm text-gray-600">President</p>
                        <p className="text-xs text-gray-500">{clubData.president.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage
                          src={clubData.vicePresident.avatar || "/placeholder.svg"}
                          alt={clubData.vicePresident.name}
                        />
                        <AvatarFallback>
                          {clubData.vicePresident.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{clubData.vicePresident.name}</h4>
                        <p className="text-sm text-gray-600">Vice President</p>
                        <p className="text-xs text-gray-500">{clubData.vicePresident.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a href={`mailto:${clubData.contact.email}`} className="text-blue-600 hover:underline">
                        {clubData.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>{clubData.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <a
                        href={clubData.contact.website}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                        <ExternalLink className="w-3 h-3 ml-1 inline" />
                      </a>
                    </div>
                    <div className="pt-3 border-t">
                      <h5 className="font-medium mb-2">Social Media</h5>
                      <div className="flex items-center gap-3">
                        <Instagram className="w-4 h-4 text-pink-600" />
                        <span className="text-sm">{clubData.contact.social.instagram}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <Twitter className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{clubData.contact.social.twitter}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <Facebook className="w-4 h-4 text-blue-700" />
                        <span className="text-sm">{clubData.contact.social.facebook}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Events
                </CardTitle>
                <CardDescription>Don't miss out on these exciting events!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">
                              {event.attendees}/{event.maxAttendees} registered
                            </Badge>
                            {event.isRegistered && <Badge className="bg-green-100 text-green-800">Registered</Badge>}
                          </div>
                        </div>
                        <div className="ml-4">
                          <Button
                            onClick={() => handleEventRegistration(event.id)}
                            disabled={event.isRegistered || event.attendees >= event.maxAttendees}
                            className={event.isRegistered ? "bg-green-600" : ""}
                          >
                            {event.isRegistered
                              ? "Registered"
                              : event.attendees >= event.maxAttendees
                                ? "Full"
                                : "Register"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Posts Tab */}
          <TabsContent value="posts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Recent Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium text-gray-900">{post.author.name}</h4>
                            <span className="text-sm text-gray-500">{post.timestamp}</span>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                          <p className="text-gray-700 mb-3">{post.content}</p>
                          {post.image && (
                            <div className="mb-3">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt="Post image"
                                width={500}
                                height={300}
                                className="rounded-lg max-w-full h-auto"
                              />
                            </div>
                          )}
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <button className="flex items-center gap-1 hover:text-red-600">
                              <Heart className="w-4 h-4" />
                              {post.likes}
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-600">
                              <MessageSquare className="w-4 h-4" />
                              {post.comments}
                            </button>
                            <button className="flex items-center gap-1 hover:text-green-600">
                              <Share2 className="w-4 h-4" />
                              {post.shares}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Club Members
                    </CardTitle>
                    <CardDescription>{clubData.members} active members</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    Search Members
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clubMembers.map((member) => (
                    <div key={member.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Avatar>
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{member.name}</h4>
                        <p className="text-sm text-blue-600">{member.role}</p>
                        <p className="text-xs text-gray-500">
                          {member.department} • {member.year}
                        </p>
                        <p className="text-xs text-gray-400">Joined {member.joinDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Club Achievements
                </CardTitle>
                <CardDescription>Celebrating our success and recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                      </div>
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
