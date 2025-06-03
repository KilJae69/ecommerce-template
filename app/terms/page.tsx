// app/terms/page.tsx
import { Container } from "@/components/shared/Container";

export default function TermsPage() {
  return (
    <Container className="relative py-12 mt-42 lg:pb-24">
      <div className="max-w-3xl mx-auto">

      
      <div className="text-center mb-12">
        <h1 className="text-h1 mb-6 text-gradient">Terms &amp; Conditions</h1>
        <p className="text-paragraph mb-8">
          Last updated on June 1, 2025
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-h2 mb-4">1. Agreement to Terms</h2>
        <p className="text-paragraph">
          By accessing or using Spark Studio’s website, you agree to be bound by
          these Terms &amp; Conditions and all applicable laws and regulations.
          If you do not agree, please do not use our site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-h2 mb-4">2. License to Use</h2>
        <p className="text-paragraph">
          Permission is granted to temporarily download one copy of the materials
          (information or software) on our website for personal, non‐commercial
          transitory viewing only. This is the grant of a license, not a
          transfer of title.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-h2 mb-4">3. Product Descriptions</h2>
        <p className="text-paragraph">
          We strive to display accurate product information. However, we do not
          warrant that product descriptions or other content is complete,
          accurate, or error‐free.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-h2 mb-4">4. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2 text-paragraph">
          <li>You agree not to misuse our website or its content in any unlawful way.</li>
          <li>You will not attempt to gain unauthorized access to any portion or feature of the site.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-h2 mb-4">5. Intellectual Property</h2>
        <p className="text-paragraph">
          All content, logos, graphics, and software on this website are the
          property of Spark Studio or our licensors and are protected by
          copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-h2 mb-4">6. Limitation of Liability</h2>
        <p className="text-paragraph">
          In no event shall Spark Studio be liable for any indirect, incidental,
          special, or consequential damages arising out of the use or inability to
          use our products or website, even if advised of the possibility of such
          damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-h2 mb-4">7. Governing Law</h2>
        <p className="text-paragraph">
          These Terms &amp; Conditions are governed by and construed in accordance
          with the laws of Bosnia and Herzegovina, without regard to conflict of
          law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-h2 mb-4">Contact Us</h2>
        <p className="text-paragraph">
          If you have any questions about these Terms &amp; Conditions, please
          contact us at legal@sparkshop.com.
        </p>
      </section>
      </div>
    </Container>
  );
}
