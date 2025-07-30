import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle } from "lucide-react"

export const metadata = {
  title: "AI Hunter FAQ - Common Questions About B2B Contact Discovery | Demandseeker Solutions",
  description:
    "Find answers to frequently asked questions about AI Hunter, B2B contact discovery, email verification, pricing, and technical support.",
  keywords:
    "AI Hunter FAQ, B2B sales questions, contact discovery help, email verification FAQ, sales automation support",
}

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is AI Hunter and how does it work?",
          answer:
            "AI Hunter is an AI-powered B2B contact discovery and email enrichment platform. It uses advanced machine learning algorithms to find and verify contact information across our database of 200M+ professionals, providing you with accurate email addresses, phone numbers, and enriched data points.",
        },
        {
          question: "How accurate is the contact data?",
          answer:
            "We guarantee 95% email accuracy with real-time verification. Our AI algorithms continuously validate and update contact information, ensuring you get the most current and accurate data available.",
        },
        {
          question: "Can I try AI Hunter before purchasing?",
          answer:
            "Yes! We offer a 14-day free trial with no credit card required. You'll get access to all features and can discover up to 100 contacts during your trial period.",
        },
      ],
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What data points does AI Hunter provide?",
          answer:
            "AI Hunter enriches contacts with 50+ data points including verified email addresses, phone numbers, social media profiles, company information, job titles, company size, funding information, technographics, and buying intent signals.",
        },
        {
          question: "Does AI Hunter integrate with my CRM?",
          answer:
            "Yes, AI Hunter integrates seamlessly with popular CRMs including Salesforce, HubSpot, Pipedrive, and many others. We also provide API access for custom integrations.",
        },
        {
          question: "Can I search for contacts by specific criteria?",
          answer:
            "Our advanced search filters allow you to find contacts by job title, company size, industry, location, technology stack, funding status, and many other criteria to target your ideal prospects.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "What's included in each pricing plan?",
          answer:
            "Our Starter plan ($49/month) includes 1,000 contacts, basic enrichment, and CRM integration. Professional ($149/month) offers 5,000 contacts, advanced features, and API access. Enterprise provides unlimited contacts and custom features.",
        },
        {
          question: "Can I change my plan anytime?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly. There are no long-term contracts or cancellation fees.",
        },
        {
          question: "What happens if I exceed my contact limit?",
          answer:
            "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional contact credits as needed. We never cut off access unexpectedly.",
        },
      ],
    },
    {
      category: "Data Privacy & Security",
      questions: [
        {
          question: "Is AI Hunter GDPR compliant?",
          answer:
            "Yes, AI Hunter is fully GDPR compliant. We only collect and process publicly available professional information and provide tools for data subjects to exercise their rights under GDPR.",
        },
        {
          question: "How do you ensure data security?",
          answer:
            "We use enterprise-grade security measures including 256-bit encryption, SOC 2 Type II certification, regular security audits, and secure data centers. Your data is protected with the highest security standards.",
        },
        {
          question: "Can I delete or export my data?",
          answer:
            "Yes, you have full control over your data. You can export your contact lists at any time and request data deletion. We provide easy-to-use tools for data management and comply with all data protection regulations.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What kind of support do you offer?",
          answer:
            "We provide multiple support channels including 24/7 live chat, email support (response within 2 hours), phone support during business hours, and a comprehensive help center with guides and tutorials.",
        },
        {
          question: "Do you provide training and onboarding?",
          answer:
            "Yes! All plans include access to our training resources, video tutorials, and best practices guides. Enterprise customers receive dedicated onboarding and training sessions with our team.",
        },
        {
          question: "Is there an API available?",
          answer:
            "Yes, our RESTful API is available for Professional and Enterprise plans. It allows you to integrate AI Hunter's contact discovery and enrichment capabilities directly into your applications and workflows.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              ❓ Help Center
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about AI Hunter, our features, pricing, and how to get the most out of
              our B2B contact discovery platform.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <HelpCircle className="h-8 w-8 text-purple-400" />
                  {category.category}
                </h2>

                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <Card
                      key={faqIndex}
                      className="bg-gradient-to-br from-slate-800/80 to-purple-900/20 border-purple-500/20"
                    >
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our support team is here to help you get the most out of AI Hunter. Contact us through any of these
              channels.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/20 border-purple-500/20 text-center">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-300 text-sm mb-4">Available 24/7</p>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-blue-500/20 text-center">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-300 text-sm mb-4">Response within 2 hours</p>
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 border-slate-500/20 text-center">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-300 text-sm mb-4">Mon-Fri, 9AM-6PM EST</p>
                  <Button
                    variant="outline"
                    className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white bg-transparent"
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-gray-400 text-sm">
              You can also visit our comprehensive{" "}
              <a href="/help" className="text-purple-400 hover:text-purple-300 underline">
                Help Center
              </a>{" "}
              for detailed guides and tutorials.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Try AI Hunter risk-free with our 14-day trial and see how it can transform your B2B sales process.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
