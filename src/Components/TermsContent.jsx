import { motion } from "framer-motion";

function TermsContent() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[35px] shadow-xl p-12"
        >

          <h2 className="text-3xl font-bold mb-8">
            Terms & Conditions
          </h2>

          <div className="space-y-10 text-slate-600 leading-8">

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                1. General
              </h3>

              <p>
                <li>These Terms & Conditions apply to all visitors and users of menspool.com.sg.</li>
                <li>By using this website, you agree to comply with all applicable laws and regulations in Singapore.</li>
                <li>Men’spool reserves the right to amend these Terms at any time without prior notice. The updated version will be posted on this page with the revised date.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Website Use
              </h3>

              <p>
                <p>
                <li>You agree to use this website only for lawful purposes.</li>
                <li>You shall not attempt to gain unauthorised access to any part of the website, our servers, or any connected databases.</li>
                <li>All content, including text, images, videos, graphics, and logos, is the property of Men’spool or its licensors and may not be copied, reproduced, distributed, or used without prior written consent..</li>
              </p>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Products & Services
              </h3>

              <p>
                <li>Product and service descriptions on this website are for informational purposes only and may change without notice.</li>
                <li>Prices, availability, and specifications are subject to change at our discretion.</li>
                <li>Any quotations provided are valid only for the period stated in the quotation document.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Quotations and Orders
              </h3>

              <p>
                <li>All quotations are issued based on information provided by the customer and are subject to final confirmation.</li>
                <li>An order is only considered confirmed upon receipt of written acceptance and/or payment (where applicable).</li>
                <li>We reserve the right to refuse or cancel any order at our discretion, including due to pricing errors, stock unavailability, or suspected fraudulent activity.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                5.  Payment Terms
              </h3>

              <p>
                <li>Payment terms will be stated in our quotation or invoice.</li>
                <li>Late payments may result in suspension of services and/or additional charges..</li>
                <li>All payments must be made in Singapore Dollars (SGD) unless otherwise stated.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Warranty & Liability
              </h3>

              <p>
                <li>Products and services may carry warranties as stated in the purchase or service agreement.</li>
                <li>Warranties are void if misuse, neglect, or unauthorised modifications are detected.</li>
                <li>Men’spool is not liable for indirect, incidental, or consequential damages arising from the use of our products or services.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Maintenance & Repairs
              </h3>

              <p>
                <li>Maintenance and repair services are provided as agreed in writing with the customer.</li>
                <li>We are not responsible for pre-existing defects or damage not caused by our services.</li>
               
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Third-Party Links
              </h3>

              <p>
                <li>Our website may contain links to third-party sites. These are provided for convenience only, and we are not responsible for the content, accuracy, or practices of such sites..</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Privacy Policy
              </h3>

              <p>
                <li>Any personal data collected is handled in accordance with our Privacy Policy, available on our website.</li>
                <li>By using our website, you consent to the collection and use of your information as described in the Privacy Policy.</li>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                10. Governing Law & Jurisdiction
              </h3>

              <p>
                <li>These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Singapore</li>
                <li>Any disputes shall be subject to the exclusive jurisdiction of the Singapore courts.</li>
              </p>
            </div>

                <div  className="mt-10">
              <p className="text-slate-900 font-semibold">
                Contact Us
                </p>
            <p>For any questions regarding these Terms and Conditions, please contact:</p>
            <div className="mt-4 text-slate-900 font-semibold ">
              <p>Men's Pool Pte Ltd</p>
              <p>Email: info@menspool.com</p>
              <p>Phone: +65 1234 5678</p>
            </div>

                </div>


          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default TermsContent;