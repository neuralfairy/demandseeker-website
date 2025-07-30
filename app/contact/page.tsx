import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

export const metadata = {
  title: "Contact Demandseeker Solutions - Get Support for AI Hunter | Miami, FL",
  description:
    "Contact our AI Hunter support team in Miami, FL. Get help with B2B contact discovery, email verification, and sales automation. Multiple contact channels available.",
  keywords: "contact support, AI Hunter help, B2B sales support, Miami office, customer service, technical support",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              📞 Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about AI Hunter? Need help with your account? Our expert team in Miami is here to help you
              succeed with AI-powered B2B prospecting.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/20 border-purple-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-4">Speak directly with our experts</p>
                <p className="text-purple-400 font-semibold">+1 (305) 555-0123</p>
                <p className="text-gray-400 text-sm mt-2">Mon-Fri, 9AM-6PM EST</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-blue-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Get detailed help via email</p>
                <p className="text-blue-400 font-semibold">hello@demandseeker.com</p>
                <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 border-slate-500/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">Instant help when you need it</p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Start Chat
                </Button>
                <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Office Info */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/20 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
                <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name *</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name *</label>
                    <Input
                      placeholder="Smith"
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <Input
                    placeholder="Your Company"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <Input
                    placeholder="+1 (555) 123-4567"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">How can we help? *</label>
                  <Textarea
                    placeholder="Tell us about your needs or questions..."
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-slate-800/80 to-blue-900/20 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    Miami Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Demandseeker Solutions</p>
                      <p className="text-gray-300">1001 Brickell Bay Dr, Suite 2700</p>
                      <p className="text-gray-300">Miami, FL 33131</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <p className="text-gray-300">+1 (305) 555-0123</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <p className="text-gray-300">hello@demandseeker.com</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-300">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-purple-400" />
                    Schedule a Demo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    See AI Hunter in action with a personalized demo tailored to your business needs.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Book Your Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border-slate-500/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-gray-300 mb-4">
                    Check out our comprehensive help center with guides, tutorials, and FAQs.
                  </p>
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                  >
                    Visit Help Center
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
