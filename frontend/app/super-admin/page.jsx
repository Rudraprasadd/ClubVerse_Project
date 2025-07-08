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
  Shield,
  Database,
  Settings,
  TrendingUp,
  AlertTriangle,
  Eye,
  Edit,
  Plus,
  Search,
  Crown,
  BarChart3,
  Activity,
  Server,
  Lock,
  UserX,
  FileText,
  Download,
  Upload,
} from "lucide-react"
import Link from "next/link"

// Mock data for super admin dashboard
const systemStats = {
  totalUsers: 1247,
  totalAdmins: 12,
  totalClubs: 24,
  systemUptime: "99.9%",
  storageUsed: "2.4 GB",
  activeConnections: 156,
}

const userManagement = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@college.edu",
    role: "admin",
    department: "Computer Science",
    status: "active",
    lastLogin: "2 hours ago",
    joinDate: "Jan 2024",
  },
  {
    id: 2,
    name: "Emily Davis",
    email: "emily.davis@college.edu",
    role: "admin",
    department: "Arts",
    status: "active",
    lastLogin: "5 hours ago",
    joinDate: "Feb 2024",
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mike.chen@college.edu",
    role: "student",
    department: "Engineering",
    status: "suspended",
    lastLogin: "1 week ago",
    joinDate: "Sep 2024",
  },
]

const systemLogs = [
  {
    id: 1,
    timestamp: "2024-12-10 14:30:25",
    level: "INFO",
    action: "User Login",
    details: "Admin user john.smith@college.edu logged in",
    ip: "192.168.1.100",
  },
  {
    id: 2,
    timestamp: "2024-12-10 14:25:12",
    level: "WARNING",
    action: "Failed Login Attempt",
    details: "Multiple failed login attempts from IP 192.168.1.200",
    ip: "192.168.1.200",
  },
  {
    id: 3,
    timestamp: "2024-12-10 14:20:45",
    level: "INFO",
    action: "Club Created",
    details: "New club 'Robotics Club' created by admin",
    ip: "192.168.1.150",
  },
]

const systemAlerts = [
  {
    id: 1,
    type: "security",
    title: "Suspicious Login Activity",
    description: "Multiple failed login attempts detected from unknown IP addresses",
    severity: "high",
    timestamp: "30 minutes ago",
  },
  {
    id: 2,
    type: "performance",
    title: "High Database Load",
    description: "Database response time increased by 15% in the last hour",
    severity: "medium",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    type: "storage",
    title: "Storage Usage Warning",
    description: "System storage usage has reached 80% capacity",
    severity: "low",
    timestamp: "2 hours ago",
  },
]

export default function SuperAdminPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleUserAction = (userId, action) => {
    console.log(`${action} user ${userId}`)
    // Handle user management actions
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ClubConnect Super Admin
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge className="bg-purple-100 text-purple-800">Super Admin</Badge>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Super Admin" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Super Admin Dashboard</h1>
          <p className="text-gray-600">Complete system control and monitoring for ClubConnect platform.</p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-blue-600">{systemStats.totalUsers}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Admins</p>
                  <p className="text-2xl font-bold text-green-600">{systemStats.totalAdmins}</p>
                </div>
                <Shield className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Clubs</p>
                  <p className="text-2xl font-bold text-purple-600">{systemStats.totalClubs}</p>
                </div>
                <Database className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">System Uptime</p>
                  <p className="text-2xl font-bold text-emerald-600">{systemStats.systemUptime}</p>
                </div>
                <Server className="w-8 h-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Storage Used</p>
                  <p className="text-2xl font-bold text-orange-600">{systemStats.storageUsed}</p>
                </div>
                <Database className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Connections</p>
                  <p className="text-2xl font-bold text-indigo-600">{systemStats.activeConnections}</p>
                </div>
                <Activity className="w-8 h-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Alerts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">{alert.title}</h4>
                      <p className="text-sm text-gray-600">{alert.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                    <span className="text-xs text-gray-500">{alert.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="system">System Settings</TabsTrigger>
            <TabsTrigger value="logs">System Logs</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="backup">Backup & Security</TabsTrigger>
          </TabsList>

          {/* User Management Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      User Management
                    </CardTitle>
                    <CardDescription>Manage all users, admins, and their permissions</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add User
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userManagement.map((user) => (
                    <div key={user.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt={user.name} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-900">{user.name}</h4>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <p className="text-xs text-gray-500">
                              {user.department} • Joined {user.joinDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <Badge
                              className={
                                user.role === "admin" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                              }
                            >
                              {user.role}
                            </Badge>
                          </div>
                          <div className="text-center">
                            <Badge
                              className={
                                user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }
                            >
                              {user.status}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Last login:</p>
                            <p className="text-xs text-gray-700">{user.lastLogin}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => handleUserAction(user.id, "suspend")}>
                              <UserX className="w-4 h-4" />
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

          {/* System Settings Tab */}
          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    General Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">User Registration</span>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Email Notifications</span>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Maintenance Mode</span>
                    <Badge className="bg-gray-100 text-gray-800">Disabled</Badge>
                  </div>
                  <Button className="w-full">Update Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Two-Factor Authentication</span>
                    <Badge className="bg-green-100 text-green-800">Required</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Password Complexity</span>
                    <Badge className="bg-green-100 text-green-800">High</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Session Timeout</span>
                    <Badge className="bg-blue-100 text-blue-800">30 minutes</Badge>
                  </div>
                  <Button className="w-full">Update Security</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Logs Tab */}
          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  System Logs
                </CardTitle>
                <CardDescription>Monitor all system activities and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemLogs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Badge
                          className={
                            log.level === "WARNING" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"
                          }
                        >
                          {log.level}
                        </Badge>
                        <div>
                          <h4 className="font-medium text-gray-900">{log.action}</h4>
                          <p className="text-sm text-gray-600">{log.details}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{log.timestamp}</p>
                        <p className="text-xs text-gray-400">IP: {log.ip}</p>
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
                    System Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Performance metrics chart</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    User Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">User growth chart</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    System Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">System usage analytics</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Database Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Database performance metrics</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Backup & Security Tab */}
          <TabsContent value="backup" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    System Backup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Last Backup</span>
                    <span className="text-sm text-gray-600">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Backup Size</span>
                    <span className="text-sm text-gray-600">1.2 GB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Auto Backup</span>
                    <Badge className="bg-green-100 text-green-800">Daily</Badge>
                  </div>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Create Backup
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    System Restore
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Available Backups</span>
                    <span className="text-sm text-gray-600">7 backups</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Oldest Backup</span>
                    <span className="text-sm text-gray-600">7 days ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Retention Policy</span>
                    <Badge className="bg-blue-100 text-blue-800">30 days</Badge>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Restore System
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
