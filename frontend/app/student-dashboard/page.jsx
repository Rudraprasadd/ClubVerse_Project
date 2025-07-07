"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Trophy, BookOpen, Users, Star, Award, Clock, MapPin, Mail, Phone, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock student data
  const studentData = {
    name: "Alex Johnson",
    email: "alex.johnson@college.edu",
    phone: "+1 (555) 123-4567",
    studentId: "STU2024001",
    major: "Computer Science",
    year: "Junior",
    gpa: 3.85,
    avatar: "/placeholder.svg?height=100&width=100",
    joinDate: "September 2022",
    location: "Campus Dorm A-204",
  }

  const gamificationData = {
    level: 12,
    points: 2450,
    nextLevelPoints: 2800,
    rank: "Club Enthusiast",
    badges: [
      { name: "Event Organizer", icon: Calendar, earned: true },
      { name: "Community Builder", icon: Users, earned: true },
      { name: "Academic Excellence", icon: BookOpen, earned: true },
      { name: "Leadership", icon: Trophy, earned: false },
      { name: "Volunteer Champion", icon: Award, earned: true },
    ],
  }

  const joinedClubs = [
    {
      id: 1,
      name: "Tech Innovation Club",
      role: "Vice President",
      joinDate: "Sep 2022",
      events: 15,
      status: "Active",
      nextEvent: "Hackathon 2024",
      nextEventDate: "March 20, 2024",
    },
    {
      id: 2,
      name: "Photography Society",
      role: "Member",
      joinDate: "Jan 2023",
      events: 8,
      status: "Active",
      nextEvent: "Nature Photography Workshop",
      nextEventDate: "March 18, 2024",
    },
    {
      id: 3,
      name: "Debate Club",
      role: "Secretary",
      joinDate: "Feb 2023",
      events: 12,
      status: "Active",
      nextEvent: "Inter-College Debate",
      nextEventDate: "March 25, 2024",
    },
  ]

  const academicProgress = {
    currentSemester: "Spring 2024",
    creditsCompleted: 89,
    totalCredits: 120,
    courses: [
      { name: "Advanced Algorithms", grade: "A", credits: 3, progress: 85 },
      { name: "Database Systems", grade: "A-", credits: 3, progress: 78 },
      { name: "Software Engineering", grade: "B+", credits: 4, progress: 82 },
      { name: "Computer Networks", grade: "A", credits: 3, progress: 90 },
    ],
  }

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Hackathon",
      club: "Tech Innovation Club",
      date: "March 20, 2024",
      time: "9:00 AM",
      location: "Engineering Building",
      type: "Competition",
    },
    {
      id: 2,
      title: "Photography Workshop",
      club: "Photography Society",
      date: "March 18, 2024",
      time: "2:00 PM",
      location: "Art Studio",
      type: "Workshop",
    },
    {
      id: 3,
      title: "Debate Practice Session",
      club: "Debate Club",
      date: "March 16, 2024",
      time: "4:00 PM",
      location: "Conference Room B",
      type: "Practice",
    },
  ]

  const achievements = [
    {
      title: "Outstanding Leadership",
      description: "Led Tech Innovation Club to win Inter-College Competition",
      date: "February 2024",
      type: "Leadership",
    },
    {
      title: "Academic Excellence",
      description: "Maintained GPA above 3.8 for 4 consecutive semesters",
      date: "January 2024",
      type: "Academic",
    },
    {
      title: "Community Service",
      description: "Completed 50+ hours of volunteer work",
      date: "December 2023",
      type: "Service",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">ClubConnect</h1>
              </Link>
              <div className="ml-8">
                <span className="text-lg font-medium text-gray-900">Student Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Link href="/clubs">Browse Clubs</Link>
              </Button>
              <Avatar>
                <AvatarImage src={studentData.avatar || "/placeholder.svg"} alt={studentData.name} />
                <AvatarFallback>
                  {studentData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {studentData.name}!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your clubs and activities</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="clubs">My Clubs</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card>
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={studentData.avatar || "/placeholder.svg"} alt={studentData.name} />
                    <AvatarFallback className="text-lg">
                      {studentData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>{studentData.name}</CardTitle>
                  <CardDescription>
                    {studentData.major} • {studentData.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {studentData.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {studentData.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {studentData.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    GPA: {studentData.gpa}
                  </div>
                </CardContent>
              </Card>

              {/* Gamification Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                    Level {gamificationData.level}
                  </CardTitle>
                  <CardDescription>{gamificationData.rank}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{gamificationData.points} points</span>
                      <span>{gamificationData.nextLevelPoints} points</span>
                    </div>
                    <Progress
                      value={(gamificationData.points / gamificationData.nextLevelPoints) * 100}
                      className="h-2"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {gamificationData.badges.slice(0, 3).map((badge, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`p-2 rounded-full ${badge.earned ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-400"}`}
                        >
                          <badge.icon className="h-4 w-4 mx-auto" />
                        </div>
                        <span className="text-xs mt-1 block">{badge.name.split(" ")[0]}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Clubs Joined</span>
                    <span className="font-semibold">{joinedClubs.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Events Attended</span>
                    <span className="font-semibold">35</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Hours Volunteered</span>
                    <span className="font-semibold">67</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Certificates Earned</span>
                    <span className="font-semibold">8</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.club}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {event.date} at {event.time}
                          <MapPin className="h-3 w-3 ml-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Clubs Tab */}
          <TabsContent value="clubs" className="space-y-6">
            <div className="grid gap-6">
              {joinedClubs.map((club) => (
                <Card key={club.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{club.name}</CardTitle>
                        <CardDescription>
                          {club.role} • Joined {club.joinDate}
                        </CardDescription>
                      </div>
                      <Badge variant={club.status === "Active" ? "default" : "secondary"}>{club.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">{club.events}</div>
                        <div className="text-sm text-gray-600">Events Attended</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-medium">{club.nextEvent}</div>
                        <div className="text-sm text-gray-600">Next Event</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-medium">{club.nextEventDate}</div>
                        <div className="text-sm text-gray-600">Date</div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm">View Club</Button>
                      <Button size="sm" variant="outline">
                        View Events
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Academics Tab */}
          <TabsContent value="academics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Progress</CardTitle>
                  <CardDescription>{academicProgress.currentSemester}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Credits Completed</span>
                        <span>
                          {academicProgress.creditsCompleted}/{academicProgress.totalCredits}
                        </span>
                      </div>
                      <Progress
                        value={(academicProgress.creditsCompleted / academicProgress.totalCredits) * 100}
                        className="h-2"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{studentData.gpa}</div>
                        <div className="text-sm text-gray-600">Current GPA</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          {Math.round(
                            ((academicProgress.totalCredits - academicProgress.creditsCompleted) /
                              academicProgress.totalCredits) *
                              100,
                          )}
                          %
                        </div>
                        <div className="text-sm text-gray-600">To Graduate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {academicProgress.courses.map((course, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{course.name}</span>
                          <Badge variant="outline">{course.grade}</Badge>
                        </div>
                        <Progress value={course.progress} className="h-1" />
                        <div className="text-xs text-gray-500">
                          {course.credits} credits • {course.progress}% complete
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Badges Earned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {gamificationData.badges.map((badge, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border text-center ${badge.earned ? "bg-yellow-50 border-yellow-200" : "bg-gray-50 border-gray-200"}`}
                      >
                        <badge.icon
                          className={`h-8 w-8 mx-auto mb-2 ${badge.earned ? "text-yellow-600" : "text-gray-400"}`}
                        />
                        <div className="font-medium text-sm">{badge.name}</div>
                        {badge.earned && <div className="text-xs text-green-600 mt-1">Earned</div>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <div className="flex items-center mt-2">
                          <Badge variant="outline" className="mr-2">
                            {achievement.type}
                          </Badge>
                          <span className="text-xs text-gray-500">{achievement.date}</span>
                        </div>
                      </div>
                    ))}
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
