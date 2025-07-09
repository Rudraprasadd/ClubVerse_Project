"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Star, Search, Filter, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function ClubsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const clubs = [
    {
      id: 1,
      name: "Tech Innovation Club",
      description: "Building the future through technology and innovation",
      category: "Technology",
      members: 156,
      rating: 4.8,
      location: "Engineering Building",
      nextEvent: "AI Workshop - Jan 25",
      image: "/placeholder.svg?height=200&width=300",
      isVerified: true,
    },
    {
      id: 2,
      name: "Environmental Action Society",
      description: "Creating sustainable solutions for a better tomorrow",
      category: "Environment",
      members: 89,
      rating: 4.9,
      location: "Science Building",
      nextEvent: "Tree Planting - Jan 28",
      image: "/placeholder.svg?height=200&width=300",
      isVerified: true,
    },
    {
      id: 3,
      name: "Creative Arts Collective",
      description: "Expressing creativity through various art forms",
      category: "Arts",
      members: 124,
      rating: 4.7,
      location: "Arts Center",
      nextEvent: "Art Exhibition - Feb 1",
      image: "/placeholder.svg?height=200&width=300",
      isVerified: false,
    },
    {
      id: 4,
      name: "Business Leaders Network",
      description: "Developing future business leaders and entrepreneurs",
      category: "Business",
      members: 203,
      rating: 4.6,
      location: "Business School",
      nextEvent: "Networking Event - Jan 30",
      image: "/placeholder.svg?height=200&width=300",
      isVerified: true,
    },
    {
      id: 5,
      name: "Sports & Fitness Club",
      description: "Promoting health and wellness through sports",
      category: "Sports",
      members: 178,
      rating: 4.5,
      location: "Sports Complex",
      nextEvent: "Marathon Training - Feb 3",
      image: "/placeholder.svg?height=200&width=300",
      isVerified: true,
    },
    {
      id: 6,
      name: "Music Society",
      description: "Bringing together music lovers and performers",
      category: "Arts",
      members: 95,
      rating: 4.8,
      location: "Music Hall",
      nextEvent: "Concert Night - Feb 5",
      image: "/placeholder.svg?height=200&width=300",
      isVerified: false,
    },
  ]

  const categories = ["all", "Technology", "Environment", "Arts", "Business", "Sports"]

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || club.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">ClubVerse</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Discover Clubs</h1>
          <p className="text-gray-600 mb-6">Find and join clubs that match your interests and passions</p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredClubs.length} of {clubs.length} clubs
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <Card key={club.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={club.image || "/placeholder.svg"}
                  alt={club.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {club.isVerified && <Badge className="absolute top-3 right-3 bg-blue-600">Verified</Badge>}
                <Badge className="absolute top-3 left-3 bg-white text-gray-700">{club.category}</Badge>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{club.name}</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{club.rating}</span>
                  </div>
                </div>
                <CardDescription>{club.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {club.members} members
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {club.location}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-blue-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {club.nextEvent}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Link href={`/clubs/${club.id}`} className="flex-1">
                      <Button className="w-full">View Club</Button>
                    </Link>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Join
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No clubs found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
