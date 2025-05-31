// ✅ Example: pages/terms-of-service.tsx (for Pages Router)
// Or: app/terms-of-service/page.tsx (for App Router in Next.js 13+)

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Terms of Service</h1>
      <p className="mb-6">
        Welcome to <strong>CodeXBuddy01</strong>. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Use of Services</h2>
        <p>
          You are responsible for your use of the services and for any content you provide. You agree to use the service in compliance with all applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Modifications</h2>
        <p>
          We reserve the right to modify or discontinue the service at any time without notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Contact Us</h2>
        <p>
          If you have questions about our terms, please email us at <a href="mailto:codexbuddy01@gmail.com" className="text-blue-600 underline">codexbuddy01@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
