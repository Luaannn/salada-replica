const VideoPreviewSection = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title mb-6 md:mb-8">
          WATCH THE PREVIEW<br />
          <b>OF LESSON 1:</b>
        </h2>

        <div className="relative w-full max-w-2xl mx-auto">
          <div className="relative pb-[56.25%] rounded-2xl overflow-hidden shadow-xl bg-olive-dark">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/2-A2chrN41w"
              title="Lesson 1 Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreviewSection;
