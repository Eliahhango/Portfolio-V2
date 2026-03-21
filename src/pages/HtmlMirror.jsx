const HtmlMirror = ({ src }) => (
  <div className="w-full h-screen overflow-hidden bg-white">
    <iframe
      title={src}
      src={src}
      className="w-full h-full border-0"
      loading="eager"
      referrerPolicy="no-referrer"
    />
  </div>
)

export default HtmlMirror
