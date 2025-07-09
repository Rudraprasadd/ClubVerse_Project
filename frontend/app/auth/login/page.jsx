"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, User, Shield, Crown } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login process
    setTimeout(() => {
      if (!email || !password || !role) {
        setError("Please fill in all fields")
        setIsLoading(false)
        return
      }

      // Static login - redirect based on role
      switch (role) {
        case "student":
          router.push("/student-dashboard")
          break
        case "admin":
          router.push("/admin")
          break
        case "super-admin":
          router.push("/super-admin")
          break
        default:
          router.push("/dashboard")
      }
    }, 1000)
  }

  const roleOptions = [
    { value: "student", label: "Student", icon: User, description: "Access student dashboard and join clubs" },
    { value: "admin", label: "Club Admin", icon: Shield, description: "Manage club activities and members" },
    { value: "super-admin", label: "Super Admin", icon: Crown, description: "Full system administration access" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-indigo-600 mb-2">ClubVerse</h1>
          </Link>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Select Your Role</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center space-x-2">
                          <option.icon className="h-4 w-4" />
                          <span>{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {role && (
                  <p className="text-sm text-gray-600">{roleOptions.find((opt) => opt.value === role)?.description}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading
                  ? "Signing In..."
                  : `Sign In${role ? ` as ${roleOptions.find((opt) => opt.value === role)?.label}` : ""}`}
              </Button>

              {/* Forgot Password */}
              <div className="text-center">
                <Link href="/auth/forgot-password" className="text-sm text-indigo-600 hover:underline">
                  Forgot your password?
                </Link>
              </div>

              {/* Register Link */}
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/auth/register" className="text-indigo-600 hover:underline font-medium">
                    Sign up here
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-blue-800">Demo Credentials</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xs text-blue-700 space-y-1">
              <p>
                <strong>Student:</strong> student@college.edu / password
              </p>
              <p>
                <strong>Admin:</strong> admin@college.edu / password
              </p>
              <p>
                <strong>Super Admin:</strong> superadmin@college.edu / password
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
