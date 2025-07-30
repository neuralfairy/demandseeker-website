import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Zap, Shield, Users, Mail, TrendingUp, Database, Globe, CheckCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "AI Hunter Features - Advanced B2B Contact Discovery | Demandseeker Solutions",
  description:
    "Discover AI Hunter's powerful features: verified contact discovery, email enrichment, CRM integration, and real-time data validation for B2B sales teams.",
  keywords:
    "AI contact discovery, email verification, B2B prospecting, sales automation, lead enrichment, CRM integration",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Contact Discovery",
      description:
        "Find decision-makers across 200M+ verified contacts using advanced AI algorithms and machine learning.",
      benefits: [
        "95% email accuracy guarantee",
        "Real-time contact verification",
        "Advanced search filters",
        "Intent data integration",
      ],
    },
    {
      icon: Zap,
      title: "Instant Data Enrichment",
      description:
        "Enrich contacts with 50+ data points including social profiles, company insights, and buying signals.",
      benefits: ["Social media profiles", "Company technographics", "Funding information", "Employee count & growth"],
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamlessly integrate with your existing CRM and sales tools for streamlined workflow.",
      benefits: ["Salesforce integration", "HubSpot compatibility", "Pipedrive sync", "Custom API access"],
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance and SOC 2 Type II certification.",
      benefits: ["GDPR compliant", "SOC 2 Type II certified", "256-bit encryption", "Regular security audits"],
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Track performance with detailed analytics and insights to optimize your outreach campaigns.",
      benefits: ["Campaign performance metrics", "Response rate tracking", "ROI calculations", "Custom reporting"],
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Access contacts from 190+ countries with localized data and regional compliance.",
      benefits: ["190+ countries covered", "Local data compliance", "Multi-language support", "Regional phone formats"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              🎯 Advanced Features
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful AI Hunter{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how AI Hunter's advanced features help B2B sales teams find verified contacts, enrich data, and
              close more deals with unprecedented accuracy and efficiency.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
            >
              Try Interactive Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">See AI Hunter in Action</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Experience the power of AI-driven contact discovery with our interactive demo.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/20 border-purple-500/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Real-Time Contact Discovery</h3>
                    <p className="text-gray-300 mb-6">
                      Watch as AI Hunter finds and verifies contacts in real-time, providing you with accurate email
                      addresses and enriched data.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Instant email verification</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Social profile matching</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Company data enrichment</span>
                      </li>
                    </ul>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Start Interactive Demo
                    </Button>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">john.smith@techcorp.com</p>
                          <p className="text-green-400 text-sm">✓ Verified</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Sarah Johnson</p>
                          <p className="text-blue-400 text-sm">VP of Sales</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">High Intent Signal</p>
                          <p className="text-orange-400 text-sm">Recently viewed pricing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience AI Hunter?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover how AI Hunter can transform your B2B sales process.
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
