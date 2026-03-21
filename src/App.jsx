import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HtmlMirror from './pages/HtmlMirror'
import HtmlPathMirror from './pages/HtmlPathMirror'

const htmlRoutes = [
  // Root pages
  { path: '/', src: '/original/index.html' },
  { path: '/portfolio/updated-mobile', src: '/original/elitechwiz_portfolio_updated_mobile.html' },

  // About
  { path: '/about', src: '/original/about/mission_values.html' },
  { path: '/about/mission', src: '/original/about/mission_values.html' },
  { path: '/about/tech-stack', src: '/original/about/technology_stack_mobile.html' },

  // Auth
  { path: '/auth/login', src: '/original/auth/client_login_secure.html' },
  { path: '/auth/register', src: '/original/auth/user_registration.html' },
  { path: '/auth/forgot-password', src: '/original/auth/forgot_password.html' },

  // Blog
  { path: '/blog', src: '/original/blog/latest_insights.html' },
  { path: '/blog/posts', src: '/original/blog/latest_insights_blog_list.html' },
  { path: '/blog/post/:id', src: '/original/blog/single_blog_post.html' },
  { path: '/blog/faq', src: '/original/blog/insights_technical_faq.html' },
  { path: '/blog/updates', src: '/original/blog/insights_updates.html' },
  { path: '/blog/news', src: '/original/blog/news_events_feed.html' },
  { path: '/blog/resources', src: '/original/blog/resource_library.html' },

  // Services
  { path: '/services', src: '/original/services/services_overview.html' },
  { path: '/services/categories', src: '/original/services/service_categories.html' },
  { path: '/services/pro-1', src: '/original/services/elitechwiz_pro_services_overview_1.html' },
  { path: '/services/pro-2', src: '/original/services/elitechwiz_pro_services_overview_2.html' },
  { path: '/services/unified', src: '/original/services/elitechwiz_unified_service_detail.html' },
  { path: '/services/detail', src: '/original/services/elitechwiz_services_detail.html' },
  { path: '/services/web-development', src: '/original/services/web_development_service_detail.html' },
  { path: '/services/development-stack', src: '/original/services/development_stack_detail.html' },
  { path: '/services/penetration-testing', src: '/original/services/penetration_testing_detail.html' },
  { path: '/services/pricing', src: '/original/services/subscription_pricing_plans.html' },
  { path: '/services/pricing-mobile', src: '/original/services/pricing_tiers_mobile.html' },
  { path: '/services/growth-strategy', src: '/original/services/growth_strategy.html' },
  { path: '/services/methodology', src: '/original/services/methodology.html' },

  // Portfolio
  { path: '/portfolio', src: '/original/portfolio/all_projects.html' },
  { path: '/portfolio/mobile', src: '/original/portfolio/portfolio_projects_mobile.html' },
  { path: '/portfolio/case-study', src: '/original/portfolio/project_case_study_detailed_view.html' },
  { path: '/portfolio/nexus-prime', src: '/original/portfolio/project_showcase_nexus_prime.html' },
  { path: '/portfolio/design-process', src: '/original/portfolio/our_design_process_mobile_guide.html' },

  // Support
  { path: '/support/contact', src: '/original/support/contact_us_desktop.html' },
  { path: '/support/schedule', src: '/original/support/schedule_a_consultation.html' },
  { path: '/support/schedule-mobile', src: '/original/support/schedule_a_consultation_mobile.html' },
  { path: '/support/faq', src: '/original/support/elitechwiz_faq.html' },
  { path: '/support/unified-faq', src: '/original/support/elitechwiz_unified_faq.html' },
  { path: '/support/chat', src: '/original/support/elitechwiz_assistant_chat.html' },

  // User dashboard and portal
  { path: '/dashboard', src: '/original/user_dashboard/latest_invoice.html' },
  { path: '/dashboard/invoice', src: '/original/user_dashboard/latest_invoice.html' },
  { path: '/dashboard/projects', src: '/original/user_dashboard/project_assets.html' },
  { path: '/dashboard/contract', src: '/original/user_dashboard/view_service_contract.html' },
  { path: '/portal', src: '/original/user_portal/user_dashboard.html' },
  { path: '/portal/tracking', src: '/original/user_portal/project_status_tracking.html' },
  { path: '/portal/checklist', src: '/original/user_portal/project_kick_off_checklist.html' },
  { path: '/portal/testimonials', src: '/original/user_portal/client_testimonials_elite_prism_style.html' },

  // Legal
  { path: '/privacy', src: '/original/legal/privacy_policy.html' },
  { path: '/terms', src: '/original/legal/terms_of_service.html' },

  // Admin
  { path: '/admin', src: '/original/admin/admin_dashboard.html' },
  { path: '/admin/dashboard', src: '/original/admin/admin_dashboard.html' },
  { path: '/admin/projects', src: '/original/admin/manage_projects.html' },
  { path: '/admin/services', src: '/original/admin/manage_services.html' },
  { path: '/admin/resources', src: '/original/admin/admin_manage_resources.html' },
  { path: '/admin/blog-editor', src: '/original/admin/blog_editor.html' },
]

function App() {
  return (
    <Router>
      <Routes>
        {htmlRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<HtmlMirror src={route.src} />} />
        ))}
        <Route path="*" element={<HtmlPathMirror />} />
      </Routes>
    </Router>
  )
}

export default App

