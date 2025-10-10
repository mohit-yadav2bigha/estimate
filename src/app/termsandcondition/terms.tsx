import React from 'react';

export default function TermsAndConditions() {
  return (
      <div 
        className="min-h-screen bg-black py-12 px-4 lg:px-16"
        style={{ fontFamily: 'SF Compact, -apple-system, BlinkMacSystemFont, sans-serif' }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
            Terms & Conditions
          </h1>
          <p className="text-lg text-white mb-12 text-center">Estimating Buddies</p>

          {/* Services Agreement Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <input type="radio" name="section" className="w-4 h-4" />
              <h2 className="text-2xl font-bold text-white">
                Services Agreement
              </h2>
            </div>
            <p className="text-base text-white mb-8 leading-relaxed">
              When you engage Estimating Buddies that provides construction cost estimating, 
              quantity takeoffs, or related consulting services, these Terms apply.
            </p>

            {/* Turnaround Time */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" name="subsection" className="w-4 h-4" />
                <h3 className="text-xl font-semibold text-white">
                  Turnaround Time:
                </h3>
              </div>
              <p className="text-base text-white leading-relaxed">
                Typical delivery is 2–3 business days after you accept our written quote and 
                complete payment. Complex or large projects may require additional time; we will 
                notify you if the delivery date changes.
              </p>
            </div>

            {/* Quotes & Payment */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" name="subsection" className="w-4 h-4" />
                <h3 className="text-xl font-semibold text-white">
                  Quotes & Payment:
                </h3>
              </div>
              <p className="text-base text-white leading-relaxed">
                After you send us plans, specifications, or project details, we&apos;ll review and 
                issue a written quote and invoice. We accept payments through secure online 
                processors (for example, QuickBooks Online Payments, PayPal, or credit/debit card). 
                Work begins once payment is confirmed unless otherwise agreed.
              </p>
            </div>

            {/* Cancellations & Refunds */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" name="subsection" className="w-4 h-4" />
                <h3 className="text-xl font-semibold text-white">
                  Cancellations & Refunds:
                </h3>
              </div>
              <p className="text-base text-white leading-relaxed">
                You may cancel within 2 hours of payment for a full refund if work has not started. 
                Once work begins or an estimate is delivered, refunds are not available.
              </p>
            </div>

            {/* Bid Deadlines */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" name="subsection" className="w-4 h-4" />
                <h3 className="text-xl font-semibold text-white">
                  Bid Deadlines:
                </h3>
              </div>
              <p className="text-base text-white leading-relaxed">
                Estimating Buddies is not responsible for missed external bid deadlines. Meeting 
                such deadlines is the client&apos;s responsibility; we will make commercially reasonable 
                efforts to meet agreed delivery times.
              </p>
            </div>
          </section>

          {/* Confidentiality & Marketing Use Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <input type="radio" name="section" className="w-4 h-4" />
              <h2 className="text-2xl font-bold text-white">
                Confidentiality & Marketing Use
              </h2>
            </div>

            {/* Confidential Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" name="subsection" className="w-4 h-4" />
                <h3 className="text-xl font-semibold text-white">
                  Confidential Information:
                </h3>
              </div>
              <p className="text-base text-white leading-relaxed">
                Notify us in advance if project materials must remain confidential. We can execute 
                a mutual Non-Disclosure Agreement (NDA) on request.
              </p>
            </div>

            {/* Marketing & Portfolio */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" name="subsection" className="w-4 h-4" />
                <h3 className="text-xl font-semibold text-white">
                  Marketing & Portfolio:
                </h3>
              </div>
              <p className="text-base text-white leading-relaxed">
                Unless you require otherwise in writing, we reserve the right to use anonymized, 
                non-sensitive information (project type, value range, and images that do not 
                disclose sensitive details) for marketing, portfolio, or testimonial purposes.
              </p>
            </div>
          </section>

          {/* Scope, Accuracy & Limitations Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <input type="radio" name="section" className="w-4 h-4" />
              <h2 className="text-2xl font-bold text-white">
                Scope, Accuracy & Limitations
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-base text-white leading-relaxed">
                Our estimates serve as guidelines to assist with budgeting and bidding; they are 
                not binding contracts or guaranteed final prices. Actual costs can vary due to 
                market fluctuations, labor differences, regional variations, scope revisions, 
                supply chain disruptions, or contractor selection.
              </p>
              
              <p className="text-base text-white leading-relaxed">
                We may use industry databases and cost guides (zip code or region-based) to inform 
                pricing. These sources are subject to change.
              </p>
              
              <p className="text-base text-white leading-relaxed">
                We do not provide warranties, insurance, or financial guarantees related to the 
                estimate.
              </p>
            </div>
          </section>

          {/* Client Responsibilities Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <input type="radio" name="section" className="w-4 h-4" />
              <h2 className="text-2xl font-bold text-white">
                Client Responsibilities
              </h2>
            </div>
            <p className="text-base text-white leading-relaxed">
              Provide complete, accurate, and legible plans, specifications, and scope information. 
              Delays in providing information or responding to clarifications may delay delivery.
            </p>
          </section>

          {/* Changes to Terms Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <input type="radio" name="section" className="w-4 h-4" />
              <h2 className="text-2xl font-bold text-white">
                Changes to Terms
              </h2>
            </div>
            <p className="text-base text-white leading-relaxed">
              We may revise these Terms from time to time. The latest Terms will be posted on our 
              website with an updated Effective Date. Continued use of our services after changes 
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            {/*<p className="text-sm text-gray-400">
              Last Updated: October 10, 2025
            </p>*/}
          </div>
        </div>
      </div>
  );
}
