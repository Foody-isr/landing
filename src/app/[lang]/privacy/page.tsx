import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="legal-page" lang="en" dir="ltr">
        <div className="legal-inner">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: November 1, 2026</p>

          <p>Foody (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the <strong>Foody POS</strong> iPad application, the <strong>Foody</strong> web ordering platform, and the <strong>Foody</strong> marketing website. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>

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

          <h3>c) Optional Customer Sign-in</h3>
          <p>Customers may use email and password or configured Google, Apple and Facebook sign-in methods. Social sign-in shares a provider-specific account identifier and the name, email address or profile image supplied by that provider. Apple may supply a private relay email address. A Facebook contact email alone does not grant access to another Foody account. Foody does not receive your Google, Apple or Facebook password, and does not use this sign-in permission to post on your behalf.</p>
          <p>Where configured, provider sign-in libraries load when their choices are displayed and may communicate browser and network information to those providers under their own privacy policies. Foody uses temporary essential cookies to bind the authentication request to your browser and an HttpOnly cookie for the resulting session. Provider tokens are used for authentication and are not stored in browser storage or application logs. You can continue as a guest.</p>

          <h3>d) Documentation Support Assistant</h3>
          <p>When you use the support assistant, your question, recent conversation turns and relevant public guides are sent to Anthropic to generate a response. The Admin sends only the current product topic and language, without forwarding sign-in credentials or restaurant records. Do not include passwords, payment details or personal customer information. This feature keeps the conversation in browser-tab memory and does not persist its messages in the Foody application; our AI provider handles requests under the applicable provider agreement.</p>
          <p>For abuse prevention, the support service uses a keyed hash of the connection IP address in expiring request counters. Questions and provider response bodies are not written to this feature’s application logs.</p>

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
            <li><strong>Optional website statistics:</strong> Google receives browser and visit data through Google Analytics only after you allow Google Analytics statistics.</li>
            <li><strong>Advertising measurement:</strong> Meta receives page-view and browser data from the marketing website through the Meta Pixel, as described below.</li>
            <li><strong>AI support provider:</strong> Anthropic receives support questions, recent conversation and public documentation when you use the assistant.</li>
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
          <p>The Foody POS iPad app does not use cookies. The web ordering platform uses essential cookies for session management only.</p>
          <p>The Foody marketing website uses the Meta (Facebook) Pixel to measure page visits and advertising performance. The Pixel can use cookies and share the page URL, browser and device information, and online identifiers with Meta. Learn more in <a href="https://www.facebook.com/privacy/policy/">Meta&apos;s Privacy Policy</a>.</p>
          <p>After our contact API confirms receipt of a demo request, the marketing website records a conversion event. Its custom parameters contain only the form language, entry language and broad acquisition categories such as Google, Bing, an AI assistant, social media or direct access. Names, email addresses, phone numbers, business names, form answers and campaign identifiers are not included in these custom parameters. Entry categories are kept in session storage for the current browser tab. The same event is made available to measurement tools through the browser data layer. If you have allowed Google Analytics statistics, it is also sent as a Google Analytics lead event.</p>

          <p>Google Analytics is optional on the marketing website. The Google tag loads after you allow Google Analytics statistics. It can use cookies and process browser, device and online identifier information to report visits and confirmed demo requests. Our configuration disables Google advertising personalization and Google Signals, removes query strings and fragments from the page addresses we send, groups help pages into one section, and sends only the broad acquisition categories described above. Calculator entries and contact-form answers are not included in our analytics events. See <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from sites that use its services</a>.</p>
          <p>You can allow or decline Google Analytics statistics and change this choice through “Google Analytics preferences” in the footer. Withdrawal stops our Google measurement and clears this property’s Analytics cookies. The preference itself is kept in local storage, without a visitor identifier. This choice applies to Google Analytics; the Meta Pixel is described separately above.</p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes by updating the &quot;Last updated&quot; date at the top of this page.</p>

          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:support@foody-pos.co.il">support@foody-pos.co.il</a></p>
          <p><strong>Website:</strong> <a href="https://foody-pos.co.il">foody-pos.co.il</a></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
