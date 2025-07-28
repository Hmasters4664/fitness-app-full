import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
                Elevate Your Training Business
              </h2>

              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                The ultimate platform designed specifically for personal trainers and fitness coaches to grow their
                client base, streamline operations, and maximize their earning potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-200 rounded-lg shadow-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">App Screenshots</p>
                  <p className="text-xs mt-1">Place your app images here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need as a Trainer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Best Rep provides comprehensive tools specifically designed for personal trainers and fitness coaches to
              manage their business, connect with clients, and grow their revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Client Management Made Simple</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Centralized Client Dashboard</h4>
                    <p className="text-gray-600">
                      Keep track of all your clients, their progress, workout plans, nutrition goals, and payment
                      history in one centralized dashboard. Never lose track of important client information again.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking & Analytics</h4>
                    <p className="text-gray-600">
                      Monitor your clients' fitness journey with detailed progress tracking, body composition analysis,
                      and performance metrics that help you adjust training programs for optimal results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Custom Workout Builder</h4>
                    <p className="text-gray-600">
                      Create personalized workout plans with our extensive exercise library, video demonstrations, and
                      customizable templates that save you hours of planning time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/trainer-client.png"
                alt="Personal trainer working with client using app"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/images/analytics-dashboard.png"
                alt="Professional trainer profile and program creation interface"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Grow Your Business</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Effortless Scheduling System</h4>
                    <p className="text-gray-600">
                      Save hours every week with automated scheduling that handles bookings, cancellations, and
                      rescheduling. Your clients can book sessions 24/7 while you focus on training, not admin work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Professional Program Creation</h4>
                    <p className="text-gray-600">
                      Create stunning, professional workout programs and training plans that showcase your expertise.
                      Impress clients with detailed, customized programs that demonstrate your value as a trainer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Professional Trainer Profile</h4>
                    <p className="text-gray-600">
                      Build credibility with a polished, professional profile that highlights your certifications,
                      specialties, and training philosophy. Stand out from the competition and attract quality clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Best Rep Works for Trainers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is simple. Follow these three steps to transform your personal training business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:border-orange-500 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Profile</h3>
                <p className="text-gray-600 mb-6">
                  Set up your professional trainer profile with certifications, specialties, and experience. Our
                  onboarding process takes less than 10 minutes and helps you stand out to potential clients.
                </p>
                <Image
                  src="/images/trainer-profile.png"
                  alt="Trainer profile setup interface"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-orange-500 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with Clients</h3>
                <p className="text-gray-600 mb-6">
                  Start attracting clients through our platform while managing existing ones with our comprehensive
                  client management tools, scheduling system, and communication features.
                </p>
                <Image
                  src="/images/community-fitness.png"
                  alt="Trainer connecting with clients"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-orange-500 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale Your Business</h3>
                <p className="text-gray-600 mb-6">
                  Use our analytics and business tools to track your growth, optimize your services, and scale your
                  personal training business to new heights with data-driven insights.
                </p>
                <Image
                  src="/images/business-growth.png"
                  alt="Business growth analytics for trainers"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Training Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of personal trainers and fitness coaches who are already growing their business with Best
            Rep. Start your journey to a more successful, organized, and profitable training career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg">
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-12 py-4 text-lg bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-gray-400 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative h-8 w-8 bg-white rounded-full flex items-center justify-center p-1">
                  <Image
                    src="/images/best-rep-logo.png"
                    alt="Best Rep Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Best Rep</span>
              </div>
              <p className="text-gray-400">
                Empowering personal trainers and fitness coaches to build better businesses and serve their clients more
                effectively.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Trainers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Client Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Scheduling Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Business Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Client Discovery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trainer Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Training Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Best Rep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
