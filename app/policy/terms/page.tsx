import { Separator } from "@/components/ui/separator"
import Link from "next/link"

// To Do -> Finish Terms and Conditions
const TermsAndConditions = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      <p className="text-sm text-muted-foreground">Effective Date: April 19, 2025</p>

      <p>
        Welcome to <strong>[Company Name]</strong> (
        <a href="[Your Website URL]">[your-website.com]</a>). By using our website and services, you
        agree to comply with the following terms.
      </p>

      <Separator />

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
        <p>[Company Name] [Description of the service]</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. Accounts</h2>
        <p>
          To use our services, you must create an account by providing accurate and up-to-date
          information, including your name, email address, and payment details. You are responsible
          for maintaining the confidentiality of your account credentials. By subscribing or making
          a one-time payment, you agree to pay the applicable fees for the selected service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Subscriptions & Payments</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Subscriptions:</strong> After any free trial (if applicable), you will be
            required to subscribe to a monthly or yearly plan to continue using our services.
            Subscription payments will be charged automatically unless you cancel.
          </li>
          <li>
            <strong>One-Time Payments:</strong> For specific services, you may choose to make a
            one-time payment without subscribing to a recurring plan. Once paid, these services will
            be accessible without further charges unless you choose to renew or upgrade.
          </li>
          <li>
            <strong>Billing Information:</strong> By subscribing, you authorize us to charge your
            payment method on a recurring basis (for subscriptions) or a one-time payment as per
            your selection. Payments are securely processed by{" "}
            <a href="https://stripe.com" className="font-bold underline">
              Stripe
            </a>
            , and we do not store your payment details.
          </li>
          <li>
            <strong>Trial Periods:</strong> If offered, a free trial period allows you to try the
            service for a limited time. After the trial ends, if you do not subscribe or buy the
            one-time product, your access will be restricted, and your data may be deleted after a
            grace period.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Data Collection and Use</h2>
        <p>
          <strong>Personal Data:</strong> We collect personal information (such as your name, email,
          and payment details) to create and manage your account. We also collect usage data for
          improving the service and ensuring its functionality. For detailed information, refer to
          our{" "}
          <Link href="/policy/privacy" className="font-bold underline">
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          <strong>Cookies and Analytics:</strong> We use cookies to enhance user experience and
          gather anonymized analytics data, including IP addresses and browser types, to improve
          service quality. By using our service, you consent to our use of cookies. You may manage
          cookie preferences via your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Data Security and Privacy</h2>
        <p>
          We implement reasonable security measures to protect your data. However, no data
          transmission over the internet is entirely secure, and we cannot guarantee absolute
          security. Your data is retained as long as necessary to fulfill our service obligations or
          as required by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. GDPR Compliance</h2>
        <p>
          [Company Name] is committed to complying with the General Data Protection Regulation
          (GDPR). If you are located in the European Union or European Economic Area, you have the
          right to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access your personal data.</li>
          <li>Request the correction or deletion of your personal data.</li>
          <li>Withdraw consent or restrict our processing of your data.</li>
        </ul>

        <p className="mt-1">
          Please refer to our{" "}
          <Link href="/policy/privacy" className="font-bold underline">
            Privacy Policy
          </Link>{" "}
          for more information about data handling and GDPR compliance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Restrictions</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use our services for any illegal or unauthorized purposes.</li>
          <li>Share or sell access to your account to any third party.</li>
          <li>Reverse-engineer, decompile, or otherwise tamper with our software.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our service if you violate
          these Terms and Conditions. Upon termination, we may delete your data after a reasonable
          period, unless retention is required by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
        <p>
          [Company Name] may update these Terms and Conditions from time to time. Any changes will
          be posted on this page and will take effect immediately. You will be notified of
          significant changes via email.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
        <p>These Terms and Conditions are governed by the laws of [Country].</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
        <p>
          For questions, concerns, or support, please contact us at{" "}
          <a href="mailto:[Support Email]">[Support Email]</a>.
        </p>
      </section>
    </>
  )
}

export default TermsAndConditions
