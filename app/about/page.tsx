import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "About Demandseeker Solutions - AI Hunter Team & Company Vision | Miami, FL",
  description:
    "Learn about Demandseeker Solutions team, our mission to revolutionize B2B sales with AI Hunter, and our expertise in contact discovery and email enrichment.",
  keywords:
    "about demandseeker, AI Hunter team, B2B sales experts, Miami company, sales intelligence, contact discovery experts",
}

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former VP of Sales at TechCorp with 15+ years in B2B sales and AI technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "AI/ML expert with previous experience at Google and Microsoft, specializing in data intelligence.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Johnson",
      role: "VP of Product",
      bio: "Product strategist with deep expertise in SaaS platforms and user experience design.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "Head of Sales",
      bio: "B2B sales leader with proven track record of scaling sales teams and driving revenue growth.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Sales Teams Served" },
    { number: "200M+", label: "Verified Contacts" },
    { number: "95%", label: "Email Accuracy" },
    { number: "3x", label: "Average ROI Increase" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              🚀 Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionizing{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                B2B Sales
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Founded in Miami, Demandseeker Solutions is on a mission to transform how B2B sales teams discover,
              verify, and engage with prospects using cutting-edge AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower B2B sales teams with AI-powered tools that eliminate the guesswork from prospecting,
                  providing verified contacts and enriched data that drive meaningful conversations and close more
                  deals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-blue-500/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become the global leader in AI-powered B2B sales intelligence, making high-quality prospect data
                  accessible to sales teams of all sizes and helping them achieve unprecedented growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Sales Teams Worldwide</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our AI Hunter platform has helped thousands of sales teams achieve remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our leadership team combines decades of experience in B2B sales, AI technology, and product development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/80 to-purple-900/20 border-purple-500/20 text-center"
              >
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Demandseeker Solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/20 border-purple-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Customer First</h3>
                <p className="text-gray-300">
                  Every decision we make is driven by what's best for our customers and their success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-blue-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, from product quality to customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 border-slate-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We continuously push the boundaries of what's possible with AI and sales technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Success Story?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Discover how AI Hunter can transform your B2B sales process and help you achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
