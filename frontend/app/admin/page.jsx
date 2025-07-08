"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Plus,
  Search,
  MoreHorizontal,
  Bell,
  MessageSquare,
  Settings,
  BarChart3,
  UserCheck,
  Clock,
  MapPin,
} from "lucide-react"
import Link from "next/link"

// Mock data for admin dashboard
const dashboardStats = {
  totalClubs: 24,
  activeEvents: 8,
  pendingApprovals: 5,
  totalMembers: 1247,
  monthlyGrowth: 12.5,
}

const pendingApprovals = [
  {
    id: 1,
    type: "club_registration",
    title: "Robotics Club Registration",
    submittedBy: "Sarah Johnson",
    submittedDate: "Dec 10, 2024",
    description: "New club focused on robotics and automation projects",
    status: "pending",
  },
  {
    id: 2,
    type: "event_approval",
    title: "Annual Tech Symposium",
    submittedBy: "Tech Innovation Club",
    submittedDate: "Dec 9, 2024",
    description: "3-day technology conference with industry speakers",
    status: "pending",
  },
  {
    id: 3,
    type: "post_moderation",
    title: "Club Recruitment Post",
    submittedBy: "Photography Society",
    submittedDate: "Dec 8, 2024",
    description: "Recruitment post for new photography club members",
    status: "pending",
  },
]

const recentActivities = [
  {
    id: 1,
    action: "Club Approved",
    details: "Environmental Club event approved",
    user: "Admin",
    timestamp: "2 hours ago",
    type: "approval",
  },
  {
    id: 2,
    action: "New Registration",
    details: "25 new student registrations",
    user: "System",
    timestamp: "4 hours ago",
    type: "registration",
  },
  {
    id: 3,
    action: "Event Created",
    details: "AI Workshop scheduled for Dec 15",
    user: "Tech Innovation Club",
    timestamp: "6 hours ago",
    type: "event",
  },
]

const clubsOverview = [
  {
    id: 1,
    name: "Tech Innovation Club",
    members: 245,
    events: 12,
    status: "active",
    lastActivity: "2 hours ago",
    admin: "John Smith",
  },
  {
    id: 2,
    name: "Photography Society",
    members: 189,
    events: 8,
    status: "active",
    lastActivity: "5 hours ago",
    admin: "Emily Davis",
  },
  {
    id: 3,
    name: "Environmental Club",
    members: 156,
    events: 15,
    status: "active",
    lastActivity: "1 day ago",
    admin: "Mike Chen",
  },
  {
    id: 4,
    name: "Debate Society",
    members: 134,
    events: 6,
    status: "inactive",
    lastActivity: "1 week ago",
    admin: "Sarah Wilson",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "AI Workshop Series",
    club: "Tech Innovation Club",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    location: "Computer Lab 101",
    attendees: 89,
    status: "approved",
  },
  {
    id: 2,
    title: "Campus Photo Walk",
    club: "Photography Society",
    date: "Dec 18, 2024",
    time: "5:30 PM",
    location: "Main Campus",
    attendees: 67,
    status: "approved",
  },
  {
    id: 3,
    title: "Tree Plantation Drive",
    club: "Environmental Club",
    date: "Dec 20, 2024",
    time: "7:00 AM",
    location: "Central Garden",
    attendees: 234,
    status: "pending",
  },
]

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleApproval = (id, action) => {
    console.log(`${action} approval for item ${id}`)
    // Handle approval logic here
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
                ClubConnect Admin
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
                <Badge className="ml-1 bg-red-500">5</Badge>
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage clubs, events, and user activities across the platform.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Clubs</p>
                  <p className="text-2xl font-bold text-blue-600">{dashboardStats.totalClubs}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Events</p>
                  <p className="text-2xl font-bold text-green-600">{dashboardStats.activeEvents}</p>
                </div>
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Approvals</p>
                  <p className="text-2xl font-bold text-orange-600">{dashboardStats.pendingApprovals}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-purple-600">{dashboardStats.totalMembers}</p>
                </div>
                <UserCheck className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Monthly Growth</p>
                  <p className="text-2xl font-bold text-emerald-600">+{dashboardStats.monthlyGrowth}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="approvals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
            <TabsTrigger value="clubs">Clubs Management</TabsTrigger>
            <TabsTrigger value="events">Events Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Pending Approvals Tab */}
          <TabsContent value="approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      Pending Approvals
                    </CardTitle>
                    <CardDescription>Review and approve club registrations, events, and posts</CardDescription>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">{pendingApprovals.length} pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {item.type.replace("_", " ")}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Submitted by: {item.submittedBy}</span>
                            <span>Date: {item.submittedDate}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Button
                            size="sm"
                            onClick={() => handleApproval(item.id, "approve")}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleApproval(item.id, "reject")}
                            className="border-red-300 text-red-600 hover:bg-red-50"
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.action}</h4>
                        <p className="text-sm text-gray-600">{activity.details}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{activity.user}</p>
                        <p className="text-xs text-gray-400">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clubs Management Tab */}
          <TabsContent value="clubs" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Clubs Management
                    </CardTitle>
                    <CardDescription>Manage all registered clubs and their activities</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search clubs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Club
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clubsOverview.map((club) => (
                    <div key={club.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt={club.name} />
                            <AvatarFallback>
                              {club.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-900">{club.name}</h4>
                            <p className="text-sm text-gray-600">Admin: {club.admin}</p>
                            <p className="text-xs text-gray-500">Last activity: {club.lastActivity}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-lg font-semibold text-blue-600">{club.members}</p>
                            <p className="text-xs text-gray-500">Members</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-semibold text-green-600">{club.events}</p>
                            <p className="text-xs text-gray-500">Events</p>
                          </div>
                          <Badge
                            className={
                              club.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                            }
                          >
                            {club.status}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Overview Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Events Overview
                    </CardTitle>
                    <CardDescription>Monitor and manage all club events</CardDescription>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{event.title}</h4>
                            <Badge
                              className={
                                event.status === "approved"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-orange-100 text-orange-800"
                              }
                            >
                              {event.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-blue-600 mb-2">{event.club}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
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
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {event.attendees} attendees
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Club Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Chart placeholder - Club growth over time</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Event Participation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Chart placeholder - Event participation trends</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    User Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Chart placeholder - User engagement metrics</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Monthly Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Chart placeholder - Monthly activity overview</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
