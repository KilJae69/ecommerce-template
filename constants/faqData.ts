// app/data/faqData.ts

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQCategory = {
  id: string;          // unique identifier, e.g. "shipping"
  label: string;       // English label for the tab, e.g. "Shipping"
  items: FAQItem[];    // array of question/answer pairs as plain English
};

export const faqData: FAQCategory[] = [
  {
    id: "shipping",
    label: "Shipping",
    items: [
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, you’ll receive a confirmation email with a tracking number. Use that number on our carrier’s website to see the delivery status.",
      },
      {
        question: "What is the estimated delivery time for my order?",
        answer:
          "Most orders arrive within 5–7 business days. During promotional periods or holidays, shipping may take up to 10 business days.",
      },
      {
        question: "Can I change my shipping address after placing an order?",
        answer:
          "If your order hasn’t shipped yet, email us at orders@sparkshop.com with your new address, and we’ll update it. Once shipped, we can’t guarantee address changes.",
      },
      {
        question: "Do you offer expedited shipping options?",
        answer:
          "Yes! At checkout, you can choose Rush or Overnight shipping for an additional fee. Available only within the continental U.S.",
      },
      {
        question: "What should I do if my order is delayed or lost?",
        answer:
          "If tracking shows an unexpected delay, please contact our support team at support@sparkshop.com. We’ll open an investigation with the carrier to locate your package.",
      },
    ],
  },
  {
    id: "products",
    label: "Products",
    items: [
      {
        question: "How do I determine the right size for my sneakers?",
        answer:
          "Each product page includes a sizing chart. Measure your foot length in centimeters and match it to the chart. If you’re between sizes, we recommend sizing up.",
      },
      {
        question: "Are your sneakers authentic?",
        answer:
          "Absolutely. We only source from authorized retailers and distributors. Each pair comes with a certificate of authenticity included in the box.",
      },
      {
        question: "Can I return or exchange my sneakers if they don’t fit?",
        answer:
          "Yes—our return policy allows exchanges within 30 days as long as the sneakers are unworn and in original packaging. See our Refund Policy for details.",
      },
      {
        question: "Are the colors of the sneakers accurate in the photos?",
        answer:
          "We strive for accurate color representation, but actual colors may vary slightly due to screen settings. If you need more details, contact us for additional images.",
      },
      {
        question: "Do you restock sold-out sneakers?",
        answer:
          "Occasionally we get restock shipments—subscribe to our newsletter or follow us on Instagram for real-time restock alerts.",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay / Google Pay.",
      },
      {
        question: "How can I apply a discount code to my order?",
        answer:
          "On the checkout page, you’ll see a “Promo Code” field. Enter your code there and click “Apply” before proceeding to payment.",
      },
      {
        question: "Can I modify or cancel my order after payment?",
        answer:
          "You can cancel or modify within 1 hour of placing your order by emailing support@sparkshop.com. After that window, we can’t guarantee changes.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes—our site uses industry-standard SSL/TLS encryption and tokenization. We do not store full credit card numbers on our servers.",
      },
      {
        question: "Do you offer gift cards?",
        answer:
          "Yes—digital gift cards are available in denominations from $25 to $200. They can be redeemed on any purchase at checkout.",
      },
    ],
  },
  {
    id: "returns",
    label: "Returns",
    items: [
      {
        question: "How do I initiate a return or exchange?",
        answer:
          "Visit our Returns Center (linked at the bottom of any page) and enter your order number & email. Follow the prompts to generate a free return label.",
      },
      {
        question: "What is your return policy for defective products?",
        answer:
          "If your item is defective, contact us immediately. We’ll issue a prepaid label, inspect the product upon receipt, and send a replacement or full refund.",
      },
      {
        question: "Are there any restocking fees for returns?",
        answer:
          "We do not charge restocking fees for standard returns. However, if an item is returned damaged or worn, restocking fees may apply.",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Once we receive your returned item, please allow 5–7 business days for inspection and refund processing to your original payment method.",
      },
      {
        question: "Can I return sneakers if I’ve worn them?",
        answer:
          "We only accept returns for unworn sneakers in original condition. Worn or used sneakers are not eligible for return.",
      },
    ],
  },
];
