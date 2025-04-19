import { Separator } from "@/components/ui/separator"

// To Do -> Finish policy
const PrivacyPolicy = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Effective Date: April 19, 2025</p>

      <p>
        [Your Company Name] (<strong>“we”, “us”, or “our”</strong>) is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, and protect your personal
        information when you use our software-as-a-service platform located at [your-domain.com]
        (the “Service”).
      </p>

      <Separator />

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Personal Information:</strong> When you register, we collect your email address,
            name, and authentication data from your Google account (if applicable).
          </li>
          <li>
            <strong>Analytics Data:</strong> We use Google Analytics and similar tools to collect
            anonymized data, including your IP address and browser type.
          </li>
          <li>
            <strong>Cookies:</strong> Login sessions and usage tracking rely on browser cookies and
            similar technologies.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>To create and manage your account</li>
          <li>To provide secure login and session management</li>
          <li>To analyze usage for improving our Service</li>
          <li>To send essential service-related communications</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
        <p>
          We do <strong>not sell or rent</strong> your personal data. We may share your data only
          with trusted service providers (such as Stripe and Google) who help us operate our
          platform, and only where necessary for service delivery or legal compliance. Stripe is
          used for processing payments, and your payment information is handled securely in
          accordance with their privacy policy.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking</h2>
        <p>
          Cookies are used for secure login, user preferences, and usage analytics. By using our
          site, you consent to the use of cookies. You can manage cookie preferences through your
          browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Your Rights (GDPR)</h2>
        <p>
          If you are located in the European Union or European Economic Area, you have the right to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Object to or restrict our processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
        <p>
          We retain your information as long as your account is active or as needed to comply with
          legal obligations. If you cancel your account, we delete associated data within a
          reasonable timeframe, except where retention is legally required.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
        <p>
          We implement reasonable safeguards to protect your data, including encrypted communication
          and restricted system access. However, no method of transmission over the internet is 100%
          secure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. International Transfers</h2>
        <p>
          If we transfer data outside the EU, we do so under lawful safeguards such as Standard
          Contractual Clauses to ensure adequate protection of your information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">9. Updates to this Policy</h2>
        <p>
          We may occasionally update this Privacy Policy. Changes will be posted here and, if
          significant, notified to you via email.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
        <p>
          If you have any questions or requests about this policy, please contact us at{" "}
          <a href="mailto:privacy@yourdomain.com" className="text-blue-600 underline">
            privacy@yourdomain.com
          </a>
          .
        </p>

        <p className="text-sm text-muted-foreground">
          This policy is governed by the laws of [Country] and is designed in accordance with the
          General Data Protection Regulation (GDPR).
        </p>
      </section>
    </>
  )
}

export default PrivacyPolicy
