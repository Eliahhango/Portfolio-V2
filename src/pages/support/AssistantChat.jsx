import PageTemplate from '../PageTemplate'

const AssistantChat = () => (
  <PageTemplate title="AI Assistant" description="Chat with our support bot">
    <div className="max-w-2xl mx-auto">
      <div className="h-96 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary text-6xl">chat</span>
      </div>
      <form className="mt-6 flex gap-2">
        <input placeholder="Type a message..." className="flex-1 p-3 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" />
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg font-bold">Send</button>
      </form>
    </div>
  </PageTemplate>
)

export default AssistantChat
