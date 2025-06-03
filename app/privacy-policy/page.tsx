// app/privacy-policy/page.tsx
import { Container } from "@/components/shared/Container";

export default function PrivacyPolicyPage() {
  return (
    <Container className="relative py-12 mt-42 lg:pb-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-h1 mb-6 text-gradient">Privacy Policy</h1>
          <p className="text-paragraph mb-8">
            Last updated on June 1, 2025
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Introduction</h2>
          <p className="text-paragraph">
            Spark Studio (“we,” “us,” or “our”) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            disclose personal information when you visit or make a purchase
            from our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Information We Collect</h2>
          <p className="text-paragraph mb-4">
            We collect the following types of personal information when you use
            our site:
          </p>
          <p className="text-paragraph">
            • Contact information (e.g., name, email address, phone number)
            <br />
            • Billing and shipping details (e.g., address, payment method)
            <br />
            • Account credentials (username, password) and order history
            <br />
            • Technical data (IP address, browser type, device identifiers)
            <br />
            • Behavioral data (pages visited, search queries, clicks)
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-paragraph">
            <li>
              To process and fulfill your orders, including sending invoices and
              order confirmations.
            </li>
            <li>
              To manage your account, provide customer support, and respond to
              your inquiries.
            </li>
            <li>
              To improve our website, identify usage patterns, and optimize user
              experience through analytics.
            </li>
            <li>
              To send you marketing communications (only if you opt-in) such as
              newsletters, special offers, and promotional materials.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Cookies &amp; Tracking Technologies</h2>
          <p className="text-paragraph">
            We use cookies, web beacons, and similar tracking technologies to
            collect information about your browsing behaviors, personalize
            content, and remember your preferences. You can control cookie
            settings through your browser, but disabling certain cookies may
            limit your ability to use some features of our site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Data Sharing &amp; Disclosure</h2>
          <p className="text-paragraph">
            We may share your personal information with third parties in the
            following circumstances:
            <br />
            • Service providers (e.g., payment processors, shipping carriers)
            who assist us in operating our website.
            <br />
            • Business partners or affiliates for marketing purposes (only with
            your consent).
            <br />
            • Legal requirements: if required by law, regulation, or court
            order, or to protect our rights or the safety of others.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Data Retention</h2>
          <p className="text-paragraph">
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this policy, comply with legal
            obligations, resolve disputes, and enforce agreements. When no
            longer needed, we will securely delete or anonymize your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Your Privacy Rights</h2>
          <ul className="list-disc list-inside space-y-2 text-paragraph">
            <li>
              Access: You can request a copy of the personal data we hold about
              you.
            </li>
            <li>
              Correction: You can ask us to correct any inaccurate or incomplete
              information.
            </li>
            <li>
              Deletion: You can request that we delete your personal data
              (subject to legal obligations).
            </li>
            <li>
              Opt-Out: You can refuse or withdraw consent to receive marketing
              emails at any time by clicking the unsubscribe link in our emails.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Contact Us</h2>
          <p className="text-paragraph">
            If you have questions or concerns about this Privacy Policy or our
            data practices, please contact us at privacy@sparkshop.com.
          </p>
        </section>
      </div>
    </Container>
  );
}
