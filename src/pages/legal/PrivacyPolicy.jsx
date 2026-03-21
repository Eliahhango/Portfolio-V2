import PageTemplate from '../PageTemplate'

const PrivacyPolicy = () => (
  <PageTemplate title="Privacy Policy" description="How we protect your data">
    <div className="max-w-3xl mx-auto space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-on-surface-variant leading-relaxed">
          Your privacy is important to us. This policy explains how we collect, use, and protect your data...
        </p>
      </section>
    </div>
  </PageTemplate>
)

export default PrivacyPolicy
