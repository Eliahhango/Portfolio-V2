import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Home & Main Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'

// About
import MissionValues from './pages/about/MissionValues'
import TechStack from './pages/about/TechStack'

// Auth
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'

// Blog
import BlogHome from './pages/blog/BlogHome'
import BlogList from './pages/blog/BlogList'
import SinglePost from './pages/blog/SinglePost'
import TechnicalFAQ from './pages/blog/TechnicalFAQ'
import Updates from './pages/blog/Updates'
import NewsEvents from './pages/blog/NewsEvents'
import ResourceLibrary from './pages/blog/ResourceLibrary'

// Services
import ServicesOverview from './pages/services/ServicesOverview'
import ServiceCategories from './pages/services/ServiceCategories'
import ProServices1 from './pages/services/ProServices1'
import ProServices2 from './pages/services/ProServices2'
import UnifiedService from './pages/services/UnifiedService'
import WebDevelopment from './pages/services/WebDevelopment'
import DevelopmentStack from './pages/services/DevelopmentStack'
import PenetrationTesting from './pages/services/PenetrationTesting'
import Pricing from './pages/services/Pricing'
import PricingMobile from './pages/services/PricingMobile'
import GrowthStrategy from './pages/services/GrowthStrategy'
import Methodology from './pages/services/Methodology'

// Portfolio
import AllProjects from './pages/portfolio/AllProjects'
import PortfolioMobile from './pages/portfolio/PortfolioMobile'
import CaseStudy from './pages/portfolio/CaseStudy'
import NexusPrime from './pages/portfolio/NexusPrime'
import DesignProcess from './pages/portfolio/DesignProcess'

// Support
import ContactUs from './pages/support/ContactUs'
import ScheduleConsultation from './pages/support/ScheduleConsultation'
import SupportFAQ from './pages/support/SupportFAQ'
import UnifiedFAQ from './pages/support/UnifiedFAQ'
import AssistantChat from './pages/support/AssistantChat'

// User Dashboard
import UserDashboard from './pages/user_dashboard/UserDashboard'
import Invoice from './pages/user_dashboard/Invoice'
import ProjectAssets from './pages/user_dashboard/ProjectAssets'
import ServiceContract from './pages/user_dashboard/ServiceContract'

// User Portal
import PortalDashboard from './pages/user_portal/PortalDashboard'
import ProjectTracking from './pages/user_portal/ProjectTracking'
import KickoffChecklist from './pages/user_portal/KickoffChecklist'
import Testimonials from './pages/user_portal/Testimonials'

// Legal
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-surface text-on-surface flex flex-col">
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about" element={<MissionValues />} />
            <Route path="/about/mission" element={<MissionValues />} />
            <Route path="/about/tech-stack" element={<TechStack />} />

            {/* Auth */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />

            {/* Blog */}
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/posts" element={<BlogList />} />
            <Route path="/blog/post/:id" element={<SinglePost />} />
            <Route path="/blog/faq" element={<TechnicalFAQ />} />
            <Route path="/blog/updates" element={<Updates />} />
            <Route path="/blog/news" element={<NewsEvents />} />
            <Route path="/blog/resources" element={<ResourceLibrary />} />

            {/* Services */}
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/categories" element={<ServiceCategories />} />
            <Route path="/services/pro-1" element={<ProServices1 />} />
            <Route path="/services/pro-2" element={<ProServices2 />} />
            <Route path="/services/unified" element={<UnifiedService />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/development-stack" element={<DevelopmentStack />} />
            <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
            <Route path="/services/pricing" element={<Pricing />} />
            <Route path="/services/pricing-mobile" element={<PricingMobile />} />
            <Route path="/services/growth-strategy" element={<GrowthStrategy />} />
            <Route path="/services/methodology" element={<Methodology />} />

            {/* Portfolio */}
            <Route path="/portfolio" element={<AllProjects />} />
            <Route path="/portfolio/mobile" element={<PortfolioMobile />} />
            <Route path="/portfolio/case-study" element={<CaseStudy />} />
            <Route path="/portfolio/nexus-prime" element={<NexusPrime />} />
            <Route path="/portfolio/design-process" element={<DesignProcess />} />

            {/* Support */}
            <Route path="/support/contact" element={<ContactUs />} />
            <Route path="/support/schedule" element={<ScheduleConsultation />} />
            <Route path="/support/faq" element={<SupportFAQ />} />
            <Route path="/support/unified-faq" element={<UnifiedFAQ />} />
            <Route path="/support/chat" element={<AssistantChat />} />

            {/* User Dashboard */}
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/dashboard/invoice" element={<Invoice />} />
            <Route path="/dashboard/projects" element={<ProjectAssets />} />
            <Route path="/dashboard/contract" element={<ServiceContract />} />

            {/* User Portal */}
            <Route path="/portal" element={<PortalDashboard />} />
            <Route path="/portal/tracking" element={<ProjectTracking />} />
            <Route path="/portal/checklist" element={<KickoffChecklist />} />
            <Route path="/portal/testimonials" element={<Testimonials />} />

            {/* Legal */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App

