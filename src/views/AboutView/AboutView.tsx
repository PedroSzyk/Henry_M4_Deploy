
const AboutView = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-title text-primary mb-6">About Vintage Apple Store</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-subtitle text-primary mb-4">Our Story</h2>
              <p className="text-body text-secondary mb-4">
                Welcome to Vintage Apple Store, your premier destination for classic Apple products. 
                Founded in 2024 by a group of passionate Apple enthusiasts, we&apos;ve dedicated ourselves 
                to preserving and sharing the rich history of Apple Inc.
              </p>
              <p className="text-body text-secondary mb-4">
                Our curated collection spans decades, from the original Macintosh to the iPod Classic. 
                Each product we offer is a piece of computing history, carefully restored and ready to 
                bring a touch of nostalgia to your life or workspace.
              </p>
            </div>
          </div>
          <div className="mt-spacing">
            <h2 className="text-subtitle text-primary mb-4">Our Mission</h2>
            <p className="text-body text-secondary mb-4">
              At Vintage Apple Store, we strive to:
            </p>
            <ul className="list-disc list-inside text-body text-secondary mb-4 pl-4">
              <li>Preserve the legacy of Apple&apos;s innovative designs</li>
              <li>Provide authentic, high-quality vintage Apple products</li>
              <li>Share our passion for Apple&apos;s history with fellow enthusiasts</li>
              <li>Offer a unique shopping experience for collectors and tech lovers alike</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;