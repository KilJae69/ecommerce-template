// app/refund-policy/page.tsx
import { Container } from "@/components/shared/Container";

export default function RefundPolicyPage() {
  return (
    <Container className="relative py-12 mt-42 lg:pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-h1 mb-6 text-gradient">Refund Policy</h1>
          <p className="text-paragraph mb-8">
            Effective Date: June 1, 2025
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Introduction</h2>
          <p className="text-paragraph">
            Thank you for shopping with Spark Studio. If you are not entirely
            satisfied with your purchase, we’re here to help.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Eligibility for Refunds</h2>
          <p className="text-paragraph">
            To be eligible for a refund, please ensure that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-paragraph">
            <li>The item was purchased within the last 30 days.</li>
            <li>
              The product is unused, in the same condition that you received it,
              and in its original packaging.
            </li>
            <li>You have the receipt or proof of purchase.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Refund Process</h2>
          <p className="text-paragraph">
            Once we receive and inspect your returned item, we will notify you
            of the approval or rejection of your refund. If approved, we will
            process the refund to your original payment method within 5–7
            business days. Shipping costs are non‐refundable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Non-Refundable Items</h2>
          <p className="text-paragraph">
            Certain items are non‐refundable: sale items, gift cards, digital
            products, and items not in original condition.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h2 mb-4">Contact Us for Refunds</h2>
          <p className="text-paragraph">
            If you have questions about refunds or your refund status, please
            email us at refunds@sparkshop.com.
          </p>
        </section>
      </div>
    </Container>
  );
}
