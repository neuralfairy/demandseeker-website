import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star } from "lucide-react"

export const metadata = {
  title: "AI Hunter Pricing Plans - Starter, Professional, Enterprise | Demandseeker Solutions",
  description:
    "Choose the perfect AI Hunter plan for your B2B sales team. Transparent pricing with no hidden fees. Start with our free trial today.",
  keywords:
    "AI Hunter pricing, B2B sales tools pricing, contact discovery pricing, email verification cost, sales automation pricing",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small sales teams getting started with AI-powered prospecting",
      features: [
        "1,000 verified contacts/month",
        "Basic email enrichment",
        "CRM integration (1 platform)",
        "Email support",
        "Basic analytics",
        "Chrome extension",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing sales teams that need advanced features and higher limits",
      features: [
        "5,000 verified contacts/month",
        "Advanced data enrichment",
        "Multiple CRM integrations",
        "Priority support",
        "Advanced analytics & reporting",
        "API access",
        "Team collaboration tools",
        "Custom data fields",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom requirements and unlimited scale",
      features: [
        "Unlimited verified contacts",
        "Custom data enrichment",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantee",
        "Custom training & onboarding",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start with a free trial and scale as you grow. No hidden fees, no long-term contracts. Cancel anytime with
              our flexible pricing plans.
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-400 scale-105"
                    : "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700"
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        : "bg-slate-700 hover:bg-slate-600 text-white"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    {plan.cta !== "Contact Sales" && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Calculate Your ROI</h2>
              <p className="text-gray-300 text-lg">
                See how much AI Hunter can save your sales team in time and increase revenue.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/20 border-purple-500/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">ROI Calculator</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Sales team size</label>
                        <input
                          type="number"
                          placeholder="5"
                          className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Hours spent on prospecting per week</label>
                        <input
                          type="number"
                          placeholder="10"
                          className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Average deal size ($)</label>
                        <input
                          type="number"
                          placeholder="5000"
                          className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        Calculate ROI
                      </Button>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-white mb-4">Estimated Results</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Time saved per month:</span>
                        <span className="text-green-400 font-bold">120 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Additional deals closed:</span>
                        <span className="text-green-400 font-bold">8 deals</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Monthly revenue increase:</span>
                        <span className="text-green-400 font-bold">$40,000</span>
                      </div>
                      <div className="border-t border-slate-700 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold">ROI:</span>
                          <span className="text-green-400 font-bold text-xl">2,580%</span>
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

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "Can I change my plan anytime?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.",
                },
                {
                  question: "What happens if I exceed my contact limit?",
                  answer:
                    "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional contacts as needed.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 14-day free trial so you can test AI Hunter risk-free. For paid plans, we offer a 30-day money-back guarantee.",
                },
                {
                  question: "Is there a setup fee?",
                  answer:
                    "No, there are no setup fees or hidden costs. You only pay for your chosen plan, and you can start using AI Hunter immediately.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams using AI Hunter to find verified contacts and close more deals.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
