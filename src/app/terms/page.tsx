import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-inner">
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: March 5, 2026</p>

          <p>These Terms of Service (&quot;Terms&quot;) govern your use of the Foody platform, including the Foody POS application, Foody web ordering, and related services (collectively, the &quot;Service&quot;) operated by Foody (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.</p>

          <h2>2. Description of Service</h2>
          <p>Foody provides a point-of-sale (POS) system and digital ordering platform for restaurants and food service businesses. The Service includes:</p>
          <ul>
            <li>iPad-based POS for managing orders, tables, and payments.</li>
            <li>Web-based QR ordering for restaurant guests.</li>
            <li>Dashboard for analytics and business management.</li>
            <li>Payment processing via third-party providers.</li>
          </ul>

          <h2>3. Account Registration</h2>
          <p>To use certain features of the Service, you must create an account. You agree to:</p>
          <ul>
            <li>Provide accurate and complete information.</li>
            <li>Keep your account credentials secure.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
            <li>Be responsible for all activity under your account.</li>
          </ul>

          <h2>4. Subscription and Payments</h2>
          <ul>
            <li>Foody offers monthly subscription plans. Prices are listed on our pricing page and may be updated with prior notice.</li>
            <li>Subscription fees are billed monthly in advance.</li>
            <li>Payment processing fees are separate and charged per transaction by the payment provider.</li>
            <li>You may cancel your subscription at any time. No refunds are provided for partial billing periods.</li>
          </ul>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose.</li>
            <li>Attempt to gain unauthorized access to any part of the Service.</li>
            <li>Interfere with or disrupt the Service or its infrastructure.</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
            <li>Use the Service to transmit harmful or malicious content.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>All content, features, and functionality of the Service are owned by Foody and protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.</p>

          <h2>7. Data and Privacy</h2>
          <p>Your use of the Service is also governed by our <a href="/privacy">Privacy Policy</a>. By using the Service, you consent to the collection and use of your data as described therein.</p>

          <h2>8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Foody shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service.</p>

          <h2>9. Service Availability</h2>
          <p>We strive to maintain high availability but do not guarantee uninterrupted access. We may perform maintenance or updates that temporarily affect the Service. We will provide notice when possible.</p>

          <h2>10. Termination</h2>
          <p>We may suspend or terminate your account if you violate these Terms. Upon termination, your right to use the Service ceases immediately. We may retain your data as required by law or for legitimate business purposes.</p>

          <h2>11. Changes to Terms</h2>
          <p>We may update these Terms from time to time. Material changes will be communicated via email or through the Service. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of the State of Israel, without regard to conflict of law principles.</p>

          <h2>13. Contact Us</h2>
          <p>If you have questions about these Terms, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:support@foody-pos.co.il">support@foody-pos.co.il</a></p>
          <p><strong>Website:</strong> <a href="https://foody-pos.co.il">foody-pos.co.il</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
}
