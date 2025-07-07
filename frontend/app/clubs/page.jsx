"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Star, Search, Grid, List, MapPin, Calendar, CheckCircle, Plus, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for clubs
const clubsData = [
  {
    id: 1,
    name: "Tech Innovation Club",
    description: "Exploring cutting-edge technology and innovation through hands-on projects and workshops.",
    category: "Technology",
    members: 245,
    rating: 4.8,
    isVerified: true,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Programming", "AI", "Web Development"],
    nextEvent: "AI Workshop - Dec 15",
    location: "Computer Lab 101",
    founded: "2020",
    isJoined: false,
  },
  {
    id: 2,
    name: "Photography Society",
    description: "Capturing moments, creating memories through the art of photography.",
    category: "Arts",
    members: 189,
    rating: 4.7,
    isVerified: true,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Photography", "Visual Arts", "Editing"],
    nextEvent: "Photo Walk - Dec 18",
    location: "Main Campus",
    founded: "2019",
    isJoined: true,
  },
  {
    id: 3,
    name: "Environmental Club",
    description: "Making our campus and world greener through sustainable initiatives.",
    category: "Environment",
    members: 156,
    rating: 4.9,
    isVerified: true,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Sustainability", "Conservation", "Green Energy"],
    nextEvent: "Tree Plantation - Dec 20",
    location: "Central Garden",
    founded: "2018",
    isJoined: false,
  },
  {
    id: 4,
    name: "Debate Society",
    description: "Sharpening minds through intellectual discourse and competitive debates.",
    category: "Academic",
    members: 134,
    rating: 4.6,
    isVerified: false,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Public Speaking", "Critical Thinking", "Argumentation"],
    nextEvent: "Debate Competition - Dec 22",
    location: "Auditorium",
    founded: "2021",
    isJoined: false,
  },
  {
    id: 5,
    name: "Music Ensemble",
    description: "Creating beautiful music together through various instruments and vocals.",
    category: "Arts",
    members: 98,
    rating: 4.5,
    isVerified: true,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Music", "Performance", "Instruments"],
    nextEvent: "Winter Concert - Dec 25",
    location: "Music Hall",
    founded: "2017",
    isJoined: false,
  },
  {
    id: 6,
    name: "Entrepreneurship Club",
    description: "Fostering innovation and business acumen among aspiring entrepreneurs.",
    category: "Business",
    members: 167,
    rating: 4.4,
    isVerified: true,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Startups", "Business", "Innovation"],
    nextEvent: "Pitch Competition - Jan 8",
    location: "Business Center",
    founded: "2020",
    isJoined: false,
  },
  {
    id: 7,
    name: "Robotics Club",
    description: "Building the future through robotics, automation, and engineering excellence.",
    category: "Technology",
    members: 123,
    rating: 4.7,
    isVerified: false,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Robotics", "Engineering", "Automation"],
    nextEvent: "Robot Competition - Jan 15",
    location: "Engineering Lab",
    founded: "2022",
    isJoined: false,
  },
  {
    id: 8,
    name: "Literary Society",
    description: "Celebrating the written word through poetry, prose, and literary discussions.",
    category: "Arts",
    members: 87,
    rating: 4.3,
    isVerified: true,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Literature", "Writing", "Poetry"],
    nextEvent: "Poetry Night - Dec 28",
    location: "Library Hall",
    founded: "2019",
    isJoined: false,
  },
]

const categories = ["All", "Technology", "Arts", "Environment", "Academic", "Business", "Sports", "Culture"]

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
  { value: "members", label: "Most Members" },
  { value: "alphabetical", label: "A-Z" },
]

export default function ClubsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [filteredClubs, setFilteredClubs] = useState(clubsData)

  // Filter and sort clubs based on current filters
  const handleFilterChange = () => {
    let filtered = clubsData

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (club) =>
          club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          club.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          club.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((club) => club.category === selectedCategory)
    }

    // Sort clubs
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "members":
        filtered.sort((a, b) => b.members - a.members)
        break
      case "alphabetical":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "newest":
        filtered.sort((a, b) => Number.parseInt(b.founded) - Number.parseInt(a.founded))
        break
      default: // popular
        filtered.sort((a, b) => b.members * b.rating - a.members * a.rating)
    }

    setFilteredClubs(filtered)
  }

  // Apply filters whenever dependencies change
  useState(() => {
    handleFilterChange()
  }, [searchQuery, selectedCategory, sortBy])

  const handleJoinClub = (clubId) => {
    console.log(`Joining club ${clubId}`)
    // Handle club joining logic
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
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Club
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Clubs</h1>
          <p className="text-gray-600">Find and join amazing communities that match your interests.</p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search clubs, tags, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-600">
              Showing {filteredClubs.length} of {clubsData.length} clubs
            </span>
            {selectedCategory !== "All" && (
              <Badge variant="outline" className="cursor-pointer" onClick={() => setSelectedCategory("All")}>
                {selectedCategory} ×
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("")}>
                "{searchQuery}" ×
              </Badge>
            )}
          </div>
        </div>

        {/* Clubs Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClubs.map((club) => (
              <Card key={club.id} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative">
                  <Image
                    src={club.image || "/placeholder.svg"}
                    alt={club.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {club.isVerified && (
                    <Badge className="absolute top-3 right-3 bg-blue-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  {club.isJoined && (
                    <Badge className="absolute top-3 left-3 bg-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Joined
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {club.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{club.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{club.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{club.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {club.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {club.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{club.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Next Event */}
                  <div className="text-xs text-blue-600 mb-3 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {club.nextEvent}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {club.members} members
                    </span>
                    <div className="flex items-center gap-2">
                      <Link href={`/clubs/${club.id}`}>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </Link>
                      {!club.isJoined && (
                        <Button size="sm" onClick={() => handleJoinClub(club.id)}>
                          Join
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredClubs.map((club) => (
              <Card key={club.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <Image
                        src={club.image || "/placeholder.svg"}
                        alt={club.name}
                        width={120}
                        height={80}
                        className="w-30 h-20 object-cover rounded-lg"
                      />
                      {club.isJoined && <Badge className="absolute -top-2 -right-2 bg-green-600 text-xs">Joined</Badge>}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold text-gray-900">{club.name}</h3>
                            {club.isVerified && (
                              <Badge className="bg-blue-600">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <Badge variant="outline">{club.category}</Badge>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                              {club.rating}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {club.members} members
                            </span>
                            <span>Founded {club.founded}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link href={`/clubs/${club.id}`}>
                            <Button variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </Link>
                          {!club.isJoined && <Button onClick={() => handleJoinClub(club.id)}>Join Club</Button>}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{club.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {club.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Next: {club.nextEvent}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {club.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No clubs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse all clubs.</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
