"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  ArrowUpRight,
  Bookmark,
  CreditCard,
  CuboidIcon as Cube,
  Heart,
  Home,
  Layers,
  MessageCircle,
  Mic,
  PlusSquare,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Wand2,
} from "lucide-react"

export default function Instagram2025() {
  const [immersiveMode, setImmersiveMode] = useState(false)
  const [activeTab, setActiveTab] = useState("feed")

  return (
    <div
      className={`flex flex-col min-h-screen ${immersiveMode ? "bg-gradient-to-b from-black to-purple-950" : "bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-black"}`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md ${immersiveMode ? "bg-black/30" : "bg-white/80 dark:bg-black/80"} border-b border-gray-200 dark:border-gray-800`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold italic bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Instagram
            </h1>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-xs font-normal">
              2025
            </Badge>
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Sparkles className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Send className="h-5 w-5" />
            </Button>
            <div className="ml-2 flex items-center gap-2">
              <span className="text-xs text-muted-foreground hidden md:inline">Immersive</span>
              <Switch
                checked={immersiveMode}
                onCheckedChange={setImmersiveMode}
                className="data-[state=checked]:bg-gradient-to-r from-pink-500 to-purple-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-1 max-w-6xl mx-auto w-full pb-16 px-1 md:px-4 ${immersiveMode ? "text-white" : ""}`}>
        {/* AR Stories */}
        <div className="py-4 overflow-x-auto">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center space-y-1 min-w-[76px]">
              <div className="relative">
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-blue-400 to-green-400">
                  <Avatar className="h-16 w-16 border-2 border-white dark:border-black">
                    <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt="Your story" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1">
                  <PlusSquare className="h-4 w-4 text-white" />
                </div>
              </div>
              <span className="text-xs">Your story</span>
            </div>

            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-1 min-w-[76px]">
                <div className="relative">
                  <div className="p-[2px] rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500">
                    <Avatar className="h-16 w-16 border-2 border-white dark:border-black">
                      <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt={`User ${i + 1}`} />
                      <AvatarFallback>U{i + 1}</AvatarFallback>
                    </Avatar>
                  </div>
                  {i % 2 === 0 && (
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                      <Cube className="h-4 w-4 text-white" />
                    </div>
                  )}
                  {i % 3 === 0 && (
                    <div className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full p-1">
                      <Wand2 className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-xs">user_{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="feed" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full grid grid-cols-4 mb-4 bg-transparent">
            <TabsTrigger
              value="feed"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg"
            >
              For You
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg"
            >
              Following
            </TabsTrigger>
            <TabsTrigger
              value="ar"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg"
            >
              AR World
            </TabsTrigger>
            <TabsTrigger
              value="shop"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg"
            >
              Shop
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6 mt-0">
            {/* AI Recommendation */}
            <div
              className={`p-4 rounded-xl ${immersiveMode ? "bg-white/10 backdrop-blur-md" : "bg-slate-50 dark:bg-gray-900"} mb-6`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <h3 className="font-medium">AI-Curated For You</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="relative rounded-lg overflow-hidden aspect-square">
                    <img
                      src={`/placeholder.svg?height=150&width=150`}
                      alt={`Recommendation ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {i === 1 && (
                      <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-1">
                        <Cube className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Posts */}
            {[...Array(2)].map((_, i) => (
              <Card
                key={i}
                className={`overflow-hidden ${immersiveMode ? "bg-white/10 backdrop-blur-md border-none" : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"}`}
              >
                <CardHeader className="p-4 pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8 ring-2 ring-pink-500">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={`User ${i + 1}`} />
                        <AvatarFallback>U{i + 1}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-sm font-medium">creator_{i + 1}</p>
                          <Badge variant="outline" className="rounded-full px-1.5 py-0 text-[10px] font-normal">
                            Verified
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Tokyo, Japan • <span className="text-blue-500">Follow</span>
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Layers className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-0 mt-3">
                  <div className="relative">
                    <img
                      src={`/placeholder.svg?height=600&width=600`}
                      alt={`Post ${i + 1}`}
                      className="w-full aspect-[4/5] object-cover"
                    />

                    {/* AR Controls Overlay */}
                    {i === 0 && (
                      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                        <Button
                          size="icon"
                          className="h-10 w-10 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50"
                        >
                          <Cube className="h-5 w-5 text-white" />
                        </Button>
                        <Button
                          size="icon"
                          className="h-10 w-10 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50"
                        >
                          <Wand2 className="h-5 w-5 text-white" />
                        </Button>
                      </div>
                    )}

                    {/* Shopping Tag */}
                    {i === 1 && (
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5">
                        <ShoppingBag className="h-4 w-4 text-white" />
                        <span className="text-xs text-white">Shop items</span>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col items-start p-4 space-y-3">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <MessageCircle className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <Send className="h-5 w-5" />
                      </Button>
                      {i === 1 && (
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <ShoppingBag className="h-5 w-5" />
                        </Button>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <Bookmark className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="text-sm font-medium">{Math.floor(Math.random() * 10000) + 1000} likes</p>
                    <div className="text-sm mt-1">
                      <span className="font-medium">creator_{i + 1}</span>{" "}
                      <span>
                        Exploring new dimensions with the latest AR filter! Try it yourself by tapping the cube icon
                        #future #ar #digital
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      View all {Math.floor(Math.random() * 100) + 50} comments
                    </p>

                    {/* AI Comment Suggestion */}
                    <div
                      className={`mt-3 p-2 rounded-lg flex items-center gap-2 ${immersiveMode ? "bg-white/10" : "bg-slate-50 dark:bg-gray-900"}`}
                    >
                      <Mic className="h-4 w-4 text-purple-500" />
                      <p className="text-xs text-muted-foreground">Voice comment or tap for AI suggestions</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}

            {/* E-commerce Recommendation */}
            {activeTab === "feed" && (
              <div
                className={`p-4 rounded-xl ${immersiveMode ? "bg-white/10 backdrop-blur-md" : "bg-slate-50 dark:bg-gray-900"}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-purple-500" />
                    <h3 className="font-medium">Based on your style</h3>
                  </div>
                  <Button variant="link" size="sm" className="h-8 p-0 text-xs text-purple-500">
                    View all
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="relative rounded-lg overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=200&width=200`}
                        alt={`Product ${i + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-xs text-white font-medium">Product Name</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-white">${(Math.random() * 100 + 20).toFixed(2)}</p>
                          <Button size="icon" className="h-6 w-6 rounded-full bg-white/20">
                            <ArrowUpRight className="h-3 w-3 text-white" />
                          </Button>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Button size="icon" className="h-7 w-7 rounded-full bg-black/30 backdrop-blur-md">
                          <Cube className="h-4 w-4 text-white" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="ar" className="mt-0">
            <div
              className={`p-6 rounded-xl text-center ${immersiveMode ? "bg-white/10 backdrop-blur-md" : "bg-slate-50 dark:bg-gray-900"}`}
            >
              <Cube className="h-12 w-12 mx-auto mb-3 text-purple-500" />
              <h3 className="text-lg font-medium mb-2">AR World Experience</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore immersive AR content created by your network and trending creators
              </p>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Enter AR World
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="shop" className="mt-0">
            <div
              className={`p-4 rounded-xl ${immersiveMode ? "bg-white/10 backdrop-blur-md" : "bg-white dark:bg-gray-950"} mb-4`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Your Shopping</h3>
                <Button variant="link" size="sm" className="h-8 p-0 text-xs text-purple-500">
                  View history
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-gray-900">
                  <CreditCard className="h-4 w-4 text-purple-500" />
                  <span className="text-xs">Payment methods</span>
                </div>
                <div className="flex-1 flex items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-gray-900">
                  <ShoppingBag className="h-4 w-4 text-purple-500" />
                  <span className="text-xs">Orders</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <Card
                  key={i}
                  className={`overflow-hidden ${immersiveMode ? "bg-white/10 backdrop-blur-md border-none" : "bg-white dark:bg-gray-950"}`}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={`/placeholder.svg?height=200&width=200`}
                        alt={`Product ${i + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Button size="icon" className="h-7 w-7 rounded-full bg-black/30 backdrop-blur-md">
                          <Cube className="h-4 w-4 text-white" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-3">
                    <div className="w-full">
                      <p className="text-sm font-medium truncate">Premium Product {i + 1}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm font-bold">${(Math.random() * 100 + 20).toFixed(2)}</p>
                        <Button
                          size="sm"
                          className="h-8 px-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                        >
                          Try AR
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <footer
        className={`fixed bottom-0 left-0 right-0 border-t ${immersiveMode ? "bg-black/30 backdrop-blur-md border-white/10" : "bg-white/80 dark:bg-black/80 backdrop-blur-md border-gray-200 dark:border-gray-800"}`}
      >
        <div className="flex items-center justify-around p-3 max-w-6xl mx-auto">
          <Button variant="ghost" size="icon" className={activeTab === "feed" ? "text-purple-500" : ""}>
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20"></div>
            <PlusSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className={activeTab === "ar" ? "text-purple-500" : ""}>
            <Cube className="h-6 w-6" />
          </Button>
          <Avatar className="h-7 w-7 ring-2 ring-purple-500">
            <AvatarImage src="/placeholder.svg?height=28&width=28" alt="Profile" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </footer>
    </div>
  )
}

