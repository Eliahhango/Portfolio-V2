import PageTemplate from '../PageTemplate'

const ScheduleConsultation = () => (
  <PageTemplate title="Schedule Consultation" description="Book a session with our experts">
    <div className="max-w-2xl mx-auto">
      <form className="space-y-6">
        <input type="date" className="w-full p-3 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" />
        <select className="w-full p-3 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none">
          <option>Select Service</option>
          <option>Cybersecurity Audit</option>
          <option>Development Consultation</option>
          <option>Design Review</option>
        </select>
        <textarea placeholder="Additional notes" rows="4" className="w-full p-3 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none resize-none"></textarea>
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold">Schedule</button>
      </form>
    </div>
  </PageTemplate>
)

export default ScheduleConsultation
