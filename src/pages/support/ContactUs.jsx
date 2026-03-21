import PageTemplate from '../PageTemplate'

const ContactUs = () => (
  <PageTemplate title="Contact Us" description="Get in touch with our team">
    <div className="max-w-3xl mx-auto">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input placeholder="Full Name" className="p-3 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" />
          <input type="email" placeholder="Email" className="p-3 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" />
        </div>
        <input placeholder="Subject" className="w-full p-3 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" />
        <textarea placeholder="Message" rows="5" className="w-full p-3 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none resize-none"></textarea>
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:shadow-lg">Send Message</button>
      </form>
    </div>
  </PageTemplate>
)

export default ContactUs
