import { motion } from "framer-motion";

function PrivacyContent() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[35px] shadow-xl p-12"
        >

          <h2 className="text-3xl font-bold mb-10">
            Privacy Policy
          </h2>

          <div className="space-y-10 text-slate-600 leading-8">

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                1.  Collection of Personal Data
              </h3>

              <p>
                <li>We may collect personal data that you provide to us directly, including but not limited to: </li>
                    <li className="list-disc ml-6">Name</li>
                <li className="list-disc ml-6">Contact details (email address, phone number, mailing address)</li>
                <li className="list-disc ml-6">Billing and payment information</li>
                <li className="list-disc ml-6">Enquiry or service request details</li>
               
                <li>We may also collect information automatically when you use our website, such as IP addresses, browser type, and browsing behaviour.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                2.  Purpose of Data Collection
              </h3>

              <p>
               <li>To process and respond to your enquiries, orders, and service requests </li>
               <li>To provide products and services you have requested </li>
               <li>To improve our website, services, and customer experience </li>
               <li>To send administrative, operational, and promotional communications (where you have consented)</li>
               <li>To comply with legal obligations and regulatory requirements</li>

              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                3.  Consent
              </h3>
<p>
    By providing your personal data, you consent to its collection, use, and disclosure for the purposes stated in this Privacy Policy. You may withdraw your consent at any time by contacting us (see Section 9). However, this may affect our ability to provide certain products or services to you.
</p>
              {/* <ul className="list-disc ml-6 space-y-2">
                <li>Respond to enquiries and service requests.</li>
                <li>Provide quotations and project consultations.</li>
                <li>Improve our website and customer service.</li>
                <li>Send important service-related communications.</li>
              </ul> */}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Disclosure of Personal Data
              </h3>

              <p>
                <li>We will not sell or rent your personal data to third parties. </li>
                <li>We may disclose personal data to: </li>
                <li  className="list-disc ml-6">Our subsidiaries, affiliates, and related entities </li>
                 <li  className="list-disc ml-6">Third-party service providers who perform services on our behalf (e.g., logistics, payment processing, IT support) </li>
                  <li  className="list-disc ml-6">Government authorities or regulators where required by law</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Protection of Personal Data
              </h3>

              <p>
               <li>We implement reasonable security arrangements to protect personal data from unauthorized access, collection, use, disclosure, copying, modification, disposal, or similar risks. </li>
                <li>While we take reasonable precautions, we cannot guarantee that unauthorized third parties will never be able to defeat those measures. </li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Retention of Personal Data
              </h3>

              <p>
                <li>We will retain your personal data only for as long as necessary to fulfil the purposes stated in this Privacy Policy or as required by law.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Access and Correction
              </h3>

              <p>
               <li>You have the right to request access to your personal data and to request corrections if it is inaccurate or incomplete.</li>
               <li>Requests should be made in writing to our Data Protection Officer (see Section 9).</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Use of Cookies
              </h3>

              <p>
                <li>Our website may use cookies to enhance your browsing experience and collect information on how you use our site.</li>
                <li>You may disable cookies through your browser settings, but this may affect certain functionalities of our website.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Contact Us
              </h3>

              <p>
                If you have any questions about this Privacy Policy or wish to make a request regarding your personal data, please contact:
              </p>
              <div className="mt-4 text-slate-900 font-semibold ">
              <p>Data Protection Officer</p>
              <p>Men’spool (Singapore) Pte Ltd</p>
              <p>13 Third Chin Bee Road, Singapore 618689</p>
              <p>Email: info@menspool.com</p>
              <p>Phone: +65 1234 5678</p>
            </div>

            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                10.Changes to This Privacy Policy
              </h3>

              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with the revised date..
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default PrivacyContent;