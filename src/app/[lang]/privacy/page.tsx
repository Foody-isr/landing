import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-inner">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: March 5, 2026</p>

          <p>Foody (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the <strong>Foody POS</strong> iPad application and the <strong>Foody</strong> web ordering platform. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>

          <h2>1. Information We Collect</h2>
          <h3>a) Restaurant Staff (POS App)</h3>
          <ul>
            <li><strong>Account information:</strong> Name, email address, phone number, and role within the restaurant.</li>
            <li><strong>Usage data:</strong> Actions taken within the app such as orders created, menu changes, and print events.</li>
            <li><strong>Device information:</strong> Device model, operating system version, and app version for support and compatibility purposes.</li>
          </ul>

          <h3>b) Restaurant Guests (Web Ordering)</h3>
          <ul>
            <li><strong>Order information:</strong> Items ordered, order type (dine-in, pickup, delivery), and table number.</li>
            <li><strong>Contact information:</strong> Phone number (for OTP verification and order notifications).</li>
            <li><strong>Payment information:</strong> Payment is processed securely by our third-party payment provider (PayPlus). We do not store credit card numbers on our servers.</li>
            <li><strong>Push notification tokens:</strong> If you opt in, we store a push subscription to notify you when your order is ready.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide and operate our restaurant POS and ordering services.</li>
            <li>To process and fulfill orders.</li>
            <li>To send order status updates and notifications.</li>
            <li>To provide customer support.</li>
            <li>To generate analytics and reports for restaurant owners (aggregated data).</li>
            <li>To improve our services and fix technical issues.</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>We do not sell your personal information. We share data only with:</p>
          <ul>
            <li><strong>Payment processors:</strong> PayPlus, to process transactions securely.</li>
            <li><strong>Restaurant operators:</strong> Order and customer data is shared with the restaurant that receives your order.</li>
            <li><strong>Hosting providers:</strong> AWS for secure server infrastructure.</li>
            <li><strong>Legal requirements:</strong> When required by law or to protect our rights.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We use industry-standard security measures including:</p>
          <ul>
            <li>HTTPS encryption for all data in transit.</li>
            <li>JWT-based authentication with role-based access controls.</li>
            <li>Encrypted database storage.</li>
            <li>Regular security reviews and updates.</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>We retain your data for as long as necessary to provide our services. Restaurant staff accounts are retained while active. Order data is retained for business reporting purposes. You may request deletion of your account by contacting us.</p>

          <h2>6. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Withdraw consent for push notifications at any time.</li>
          </ul>

          <h2>7. Cookies &amp; Tracking</h2>
          <p>The Foody POS iPad app does not use cookies. The web ordering platform uses essential cookies for session management only. We do not use third-party advertising trackers.</p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes by updating the &quot;Last updated&quot; date at the top of this page.</p>

          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:support@foody-pos.co.il">support@foody-pos.co.il</a></p>
          <p><strong>Website:</strong> <a href="https://foody-pos.co.il">foody-pos.co.il</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
}
