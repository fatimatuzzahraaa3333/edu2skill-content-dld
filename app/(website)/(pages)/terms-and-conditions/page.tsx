export const metadata = {
  title: "Terms and Conditions | edu2skill",
  description: "Terms and conditions for using edu2skill",
};

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

      <p className="text-gray-600 mb-6">
        By accessing edu2skill, you agree to comply with the following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mb-2">Content Usage</h2>
      <p className="text-gray-600">
        All educational content is provided for learning purposes only and may not be redistributed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
      <p className="text-gray-600">
        edu2skill is not responsible for any misuse of the provided educational material.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Modifications</h2>
      <p className="text-gray-600">
        Terms may be updated at any time without prior notice.
      </p>
    </section>
  );
}
