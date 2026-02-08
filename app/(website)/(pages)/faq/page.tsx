export const metadata = {
  title: "FAQ | edu2skill",
  description: "Frequently asked questions about edu2skill courses and tutorials",
};

export default function FAQPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold">
            Are the tutorials free?
          </h2>
          <p className="text-gray-600">
            Yes, all tutorials on edu2skill are completely free and publicly accessible.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Do I need prior experience?
          </h2>
          <p className="text-gray-600">
            Basic programming knowledge is helpful, but many tutorials are beginner-friendly.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Are these tutorials industry-oriented?
          </h2>
          <p className="text-gray-600">
            Yes, content is designed according to modern industry standards and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
