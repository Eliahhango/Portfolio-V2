import PageTemplate from '../PageTemplate'

const TermsOfService = () => (
  <PageTemplate title="Terms of Service" description="Our terms and conditions">
    <div className="max-w-3xl mx-auto space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
        <p className="text-on-surface-variant leading-relaxed">
          By using our services, you agree to these terms and conditions...
        </p>
      </section>
    </div>
  </PageTemplate>
)

export default TermsOfService
