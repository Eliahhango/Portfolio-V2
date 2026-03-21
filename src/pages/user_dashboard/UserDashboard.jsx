import PageTemplate from '../PageTemplate'

const UserDashboard = () => (
  <PageTemplate title="Dashboard" description="Your project overview">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
          <h3 className="font-bold mb-2">Card {i}</h3>
          <p className="text-on-surface-variant">Dashboard data...</p>
        </div>
      ))}
    </div>
  </PageTemplate>
)

export default UserDashboard
