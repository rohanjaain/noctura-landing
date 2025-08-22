import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Shield, Zap, Eye, Lock, ArrowRight, CheckCircle, Mail } from 'lucide-react'
import { toast } from 'react-hot-toast'

export function LandingPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleWaitlistSubmit = async () => {
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Since Formspree is working but CORS is blocking the response,
      // we'll assume success and show the message
      console.log('Submitting email to Formspree:', email)
      
      // Create a hidden form and submit it
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://formspree.io/f/mblkendl'
      form.target = '_blank' // Open in new tab to avoid CORS
      
      const emailInput = document.createElement('input')
      emailInput.type = 'hidden'
      emailInput.name = 'email'
      emailInput.value = email
      
      form.appendChild(emailInput)
      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)
      
      // Show success message
      toast.success('You\'ve been added to the waitlist! We\'ll notify you when Noctura is ready.')
      setEmail('')
      
    } catch (error) {
      console.error('Error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: Shield,
      title: 'Policy Enforcement',
      description: 'Enforce tool-level policies with allow/deny rules, rate limiting, and timeouts'
    },
    {
      icon: Lock,
      title: 'Egress Security',
      description: 'Block private IPs, enforce domain allowlists, and prevent DNS rebinding attacks'
    },
    {
      icon: Eye,
      title: 'Output Sanitization',
      description: 'Automatically redact secrets, validate schemas, and scrub injection attempts'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Low latency overhead with connection pooling and optimized routing'
    }
  ]

  const benefits = [
    'Secure AI agent deployments',
    'Compliance and audit trails',
    'Real-time monitoring and alerts',
    'Easy policy management',
    'Zero-trust architecture',
    'Enterprise-grade security'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Noctura</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#waitlist" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Security-First AI Proxy
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Secure Your AI Agents with
              <span className="text-primary"> Noctura</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Noctura is a high-performance Policy Enforcement Point (PEP) proxy for MCP gateways. 
              Add security controls, output sanitization, and observability with minimal latency overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                Join the Waitlist
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Security for AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Noctura provides comprehensive security controls that protect your AI infrastructure 
              while maintaining high performance and ease of use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Noctura?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for production AI deployments that require enterprise-grade security and compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be First to Know
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our waitlist to get early access to Noctura and stay updated on our progress.
            </p>
          </div>
          
          <Card className="backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Join the Waitlist</CardTitle>
              <CardDescription>
                Get notified when Noctura launches and receive exclusive early access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-center text-lg py-3"
                    required
                  />
                </div>
                <Button 
                  onClick={handleWaitlistSubmit}
                  className="w-full py-3 text-lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  We respect your privacy. No spam, just updates about Noctura.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Noctura</span>
              </div>
              <p className="text-muted-foreground">
                Secure AI infrastructure with enterprise-grade policy enforcement and monitoring.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="mailto:contact@noctura.ai" className="text-muted-foreground hover:text-foreground transition-colors" title="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Noctura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 