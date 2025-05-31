
// ✅ Example: pages/privacy-policy.tsx
// Or: app/privacy-policy/page.tsx

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Privacy Policy</h1>
      <p className="mb-6">
        At <strong>CodeXBuddy01</strong>, your privacy is important to us. This privacy policy explains what information we collect, how we use it, and how we protect it.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Information Collection</h2>
        <p>
          We collect basic contact information when you reach out to us. This may include your name, email address, and phone number.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Use of Information</h2>
        <p>
          The information we collect is used to improve our services and respond to your queries effectively.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Information Sharing</h2>
        <p>
          We do not share your information with third parties, except as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
        <p>
          For questions about our privacy practices, email us at <a href="mailto:codexbuddy01@gmail.com" className="text-blue-600 underline">codexbuddy01@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
