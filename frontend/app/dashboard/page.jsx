"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Calendar,
  Trophy,
  TrendingUp,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Bell,
  MessageSquare,
  BookOpen,
  Zap,
  Plus,
} from "lucide-react"
import Link from "next/link"

// Mock data for dashboard
const userStats = {
  clubsJoined: 5,
  eventsAttended: 12,
  pointsEarned: 1250,
  currentLevel: "Gold Member",
  nextLevelPoints: 1500,
}

const recentActivities = [
  {
    id: 1,
    type: "event_attended",
    title: "Attended AI Workshop",
    club: "Tech Innovation Club",
    points: 50,
    timestamp: "2 hours ago",
    icon: Calendar,
  },
  {
    id: 2,
    type: "club_joined",
    title: "Joined Photography Society",
    club: "Photography Society",
    points: 25,
    timestamp: "1 day ago",
    icon: Users,
  },
  {
    id: 3,
    type: "achievement",
    title: "Earned 'Active Participant' Badge",
    club: "Environmental Club",
    points: 100,
    timestamp: "3 days ago",
    icon: Trophy,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Campus Photo Walk",
    club: "Photography Society",
    date: "Dec 18, 2024",
    time: "5:30 PM",
    location: "Main Campus",
    registered: true,
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    club: "Environmental Club",
    date: "Dec 20, 2024",
    time: "7:00 AM",
    location: "Central Garden",
    registered: false,
  },
  {
    id: 3,
    title: "Debate Competition",
    club: "Debate Society",
    date: "Dec 22, 2024",
    time: "3:00 PM",
    location: "Auditorium",
    registered: false,
  },
]

const myClubs = [
  {
    id: 1,
    name: "Tech Innovation Club",
    role: "Member",
    avatar: "/placeholder.svg?height=40&width=40",
    newPosts: 3,
    nextEvent: "AI Workshop - Dec 15",
  },
  {
    id: 2,
    name: "Photography Society",
    role: "Member",
    avatar: "/placeholder.svg?height=40&width=40",
    newPosts: 1,
    nextEvent: "Photo Walk - Dec 18",
  },
  {
    id: 3,
    name: "Environmental Club",
    role: "Active Member",
    avatar: "/placeholder.svg?height=40&width=40",
    newPosts: 2,
    nextEvent: "Tree Plantation - Dec 20",
  },
]

const achievements = [
  {
    id: 1,
    name: "Early Bird",
    description: "Joined within first week",
    icon: "🐦",
    earned: true,
  },
  {
    id: 2,
    name: "Social Butterfly",
    description: "Joined 5+ clubs",
    icon: "🦋",
    earned: true,
  },
  {
    id: 3,
    name: "Event Enthusiast",
    description: "Attended 10+ events",
    icon: "🎉",
    earned: true,
  },
  {
    id: 4,
    name: "Community Leader",
    description: "Organize an event",
    icon: "👑",
    earned: false,
  },
]

export default function DashboardPage() {
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
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening in your clubs today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Clubs Joined</p>
                      <p className="text-2xl font-bold text-blue-600">{userStats.clubsJoined}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Events Attended</p>
                      <p className="text-2xl font-bold text-green-600">{userStats.eventsAttended}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Points Earned</p>
                      <p className="text-2xl font-bold text-purple-600">{userStats.pointsEarned}</p>
                    </div>
                    <Trophy className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Current Level</p>
                      <p className="text-sm font-bold text-yellow-600">{userStats.currentLevel}</p>
                    </div>
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="mt-2">
                    <Progress value={(userStats.pointsEarned / userStats.nextLevelPoints) * 100} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">
                      {userStats.nextLevelPoints - userStats.pointsEarned} points to next level
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Recent Activities
                </CardTitle>
                <CardDescription>Your latest club activities and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <activity.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.club}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800">+{activity.points} pts</Badge>
                        <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* My Clubs */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      My Clubs
                    </CardTitle>
                    <CardDescription>Clubs you're actively participating in</CardDescription>
                  </div>
                  <Link href="/clubs">
                    <Button variant="outline" size="sm">
                      View All
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myClubs.map((club) => (
                    <div key={club.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={club.avatar || "/placeholder.svg"} alt={club.name} />
                          <AvatarFallback>
                            {club.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-gray-900">{club.name}</h4>
                          <p className="text-sm text-gray-600">{club.role}</p>
                          <p className="text-xs text-blue-600">{club.nextEvent}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {club.newPosts > 0 && (
                          <Badge className="bg-red-100 text-red-800 mb-2">{club.newPosts} new posts</Badge>
                        )}
                        <Button size="sm" variant="outline">
                          View Club
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-medium text-gray-900 mb-1">{event.title}</h4>
                      <p className="text-sm text-blue-600 mb-2">{event.club}</p>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                      <Button size="sm" className="mt-2 w-full" variant={event.registered ? "outline" : "default"}>
                        {event.registered ? "Registered" : "Register"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-3 rounded-lg border text-center ${
                        achievement.earned
                          ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
                          : "bg-gray-50 border-gray-200 opacity-60"
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <h4 className="font-medium text-sm text-gray-900">{achievement.name}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                      {achievement.earned && (
                        <Badge className="mt-2 bg-yellow-100 text-yellow-800 text-xs">Earned</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Find New Clubs
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message Clubs
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
