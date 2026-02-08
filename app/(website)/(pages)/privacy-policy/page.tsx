export const metadata = {
  title: "Privacy Policy | edu2skill",
  description: "Privacy policy explaining how user data is handled on edu2skill",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-600 mb-4">
        At edu2skill, we respect your privacy and are committed to protecting your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <p className="text-gray-600">
        We do not collect personally identifiable information unless you voluntarily provide it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
      <p className="text-gray-600">
        Cookies may be used for analytics and improving user experience.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Services</h2>
      <p className="text-gray-600">
        We may use trusted third-party tools for analytics and performance monitoring.
      </p>
    </section>
  );
}
