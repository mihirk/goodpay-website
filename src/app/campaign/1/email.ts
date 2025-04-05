const bccEmails = [
    "complaints@santander.co.uk",
    "customer.service@nationwide.co.uk",
    "help@starlingbank.com",
    "complaintsresolutionuk@capitalone.com",
    "customer.care.team@hsbc.com ",
    "exec.complaintscrduk@hsbc.com",
    "complaints@zemplerbank.com",
    "onlinecomplaints@bankofscotland.co.uk",
    "complaints@tide.co",
    "jodie.thompson@tsb.co.uk",
    "customersupport@atombank.co.uk",
    "complaints.contact@jpmorgan.com",
    "customer.relations@natwest.com",
    "onlinecomplaints@lloydsbank.co.uk",
    "formalcomplaints@revolut.com",
    "customerrelations@metrobank.plc.uk",
    "complaints@monese.com",
    "complaints@santander.co.uk",
    "consumerservice@santander.co.uk",
    "wandim.execcomplaints@barclays.com",
    "alison.x.cant@barclays.com",
    "complaints@monzo.com",
    "complaints@wise.com",
    "gpl-compliance@google.com",
    "e_yates@apple.com",
    "PSRcomplaints@psr.org.uk",
    "init-campaign-1@getgoodpay.com",
]

const ccEmails = [
    "enquiries@wearepay.uk",
    "PSRcomplaints@psr.org.uk",
    "public.enquiries@hmtreasury.gov.uk",
    "enquiries@businessandtrade.gov.uk",
    "complaints@businessandtrade.gov.uk",
    "enquiries@bankofengland.co.uk",
]

const subject = encodeURIComponent("Urgent Complaint: Bank Inaction on Local Payment Rails Is Harming Consumers and Merchants");

const emailContent = `Dear Complaints Department,

I am writing to raise a serious concern about your continued reliance on card payment networks such as Visa and Mastercard, and your failure to offer consumers and merchants a modern, fair alternative based on the domestic instant payment infrastructure.

As someone who transacts regularly with your institution, I—along with many others—am deeply frustrated that every time we tap our phone or card to pay, a significant portion of the transaction (often 1.5% to 3%, or more) is siphoned off to the Visa/Mastercard duopoly. This is not only economically disastrous, it’s entirely avoidable.

Faster Payments Service (FPS) and other domestic instant payment rails already exist in the UK—built and funded by public money and national infrastructure—yet they are being underutilized by the very institutions that should be championing them. These rails are fast, secure, and dramatically cheaper, yet you have failed to provide consumers with a card-like, tap-to-pay retail experience on top of them.

Big Tech firms like Apple and Google have entrenched their partnerships with Visa and Mastercard, further closing the door on innovation in retail payments. Meanwhile, the burden of this monopolistic system is placed squarely on the shoulders of small businesses and in-turn consumers, who are paying higher prices as a result.

Countries like France, Belgium and Germany (Wero), Singapore (PayNow), India (UPI), Brazil (Pix), Denmark and Norway (MobilePay), Poland (BLIK), Peru (Yape), Spain (Bizium), Thailand (PromptPay), Malaysia (DuitNow), Philippines (InstaPay), Mexico (DiMO), Netherlands (iDEAL), Colombia (BreB) have shown clear leadership by enabling local, low-cost, instant alternatives. Their banks stepped up. Why haven’t ours?

I urge you to take this matter seriously. It is time for British banks to support domestic instant payment rails, and to finally give consumers and merchants a way out of the costly Visa/Mastercard stranglehold.

This is not just a business issue—it’s a public one.

I expect a formal response detailing your institution’s plans to support or build payment experiences that leverage domestic rails instead of card networks, and your timeline for doing so.

Sincerely,
Concerned Individual`;


const body = encodeURIComponent(emailContent.replace(/\n/g, "\r\n"));

const cc = ccEmails.join(",");
const toEmail = "contactus@psr.org.uk";
const bcc = bccEmails.join(",");
// const testingToEmail = "init-campaign-1@getgoodpay.com";
// const testingCcEmail = [testingToEmail].join(",");

// export const testingMailToLink = `mailto:${testingToEmail}?cc=${testingCcEmail}&bcc=${testingCcEmail}&subject=${subject}&body=${body}`;

export const mailtoLink = `mailto:${toEmail}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${body}`;
