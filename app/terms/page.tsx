import React from 'react'
import Image from 'next/image'

function TermsPage() {
  return (
    <div className='flex justify-center py-10'>
        <div className='flex-col w-3/5 space-y-4'>
            <h1 className='text-6xl'>Terms & Conditions</h1>
            <p className=' text-slate-500'>Last Updated September 2024</p>
            
            <div className='text-lg space-y-8'>
                <p>1. Services:
                Sparkling Spaces will provide cleaning services as outlined in the agreed-upon Service Agreement or proposal.
                Services may include, but are not limited to, general cleaning, deep cleaning, move-in/move-out cleaning, and specialized cleaning tasks.</p>
                <p>2. Payment:
                Payment is due upon completion of services unless otherwise specified in the Service Agreement. Accepted forms of payment include check, credit card, and electronic payment.
                Late payments may be subject to a late fee.
                Non-payment will result in legal action and collection efforts, with the client liable for all associated costs and interest.</p>
                <p>3. Cancellations:
                Clients may cancel services within 24 hours' notice without penalty.
                Cancellations made with less than 24 hours' notice may be subject to cancellation fee of $99</p>
                <p>4. Rescheduling:
                Clients may reschedule services with 24 hours' notice without penalty.
                Rescheduling made with less than 24 hours' notice may be subject to a rescheduling fee of $99</p>
                <p>5. Access:
                Clients are responsible for providing Sparkling Spaces with access to the premises to be cleaned during the agreed-upon service time. If access is not provided, a lockout fee of $125  may be charged.</p>
                <p>6. Liability:
                Sparkling Spaces is not liable for pre-existing damage to client property.
                Sparkling Spaces  is not responsible for the security of client premises.
                Clients are encouraged to secure valuables and fragile items prior to cleaning.</p>
                <p>7. Satisfaction Guarantee:
                Sparkling Spaces  is committed to client satisfaction. If a client is not satisfied with the cleaning service, they should contact Sparkling Spaces within 24 hours to discuss the issue.
                Sparkling Spaces will make reasonable efforts to rectify the issue to the client's satisfaction.</p>
                <p>8. Termination:
                Either party may terminate this agreement with verbal or written notice.</p>
                <p>9. Modifications:
                Sparkling Spaces reserves the right to modify these Terms and Conditions at any time.
                Clients will be notified of any changes in writing.
                By engaging Sparkling Spaces services, the client acknowledges and agrees to these Terms and Conditions.</p>
                <p className='text-right'>- Sparkling Spaces Team</p>

            </div>
        </div>

    </div>
  )
}

export default TermsPage