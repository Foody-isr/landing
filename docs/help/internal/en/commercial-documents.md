---
title: Foody quotations and sales orders
description: Development Backoffice → Payments & devices → Plans & modules → Quotes & orders.
apps: both
tags:
  - internal
  - backoffice-commercial-documents
updatedAt: '2026-11-18'
featureId: backoffice-commercial-documents
audience: internal
releaseStatus: available
---
Production or development Backoffice → Payments & devices → Plans & modules → Quotes & orders.

## Availability and access

Available only to Foody superadmins in development and production with the release supporting API migration 321. PDFs are private quotations or sales orders; creating them does not collect payments, issue tax invoices or activate subscriptions. Pilot checkouts and recurring charges remain sandbox-only. Existing documents and contracts retain their terms.

<span id="issuer" />

## Set the issuer details

Open **Issuer settings**. Enter Foody’s legal name, company ID, address and contact details. Choose the default PDF language, prices excluding or including VAT, or **No VAT charged** as applicable, then the VAT rate and commercial terms. Select **Save issuer settings**. Defaults are copied into new documents only. Demonstration PDF identities are never reused. After a conflict, reload the saved settings before trying again.

<span id="compose" />

## Compose a quotation or order

Choose **New quotation** or **New order**. Enter the title, date, quotation validity and customer. A customer can be a prospect; search can also link an existing restaurant. Review its contact details. Select Hebrew, French or English PDF output; entered descriptions and terms are not translated automatically. Search for and add catalogue plans, modules, hardware, licences or fees. **Custom item** adds a free-form line. Adjust quantities, descriptions, details and agreed prices. Quotation-only items need an explicit price. The first save freezes the catalogue version for this document; later publications do not recalculate its prices or inclusions.

For the reviewed grid, add **Foody Integral** or **Restaurant + Orders** directly when selling that plan: the document does not automatically replace separate lines with a bundle. Do not add the bundle and its modules twice. Additional POS licences are active devices at ILS 149; EMV at ILS 49 per active terminal remains a separate line. One-time fees, options and equipment stay separate. Existing lines and negotiated prices are not rewritten.

<span id="schedule" />

## Separate one-time, monthly and prepaid charges

Use **Monthly** with a 0-month commitment for standard monthly billing with no minimum term. **Prepaid period** shows the price for the whole period: 12 months for the price of 11 on modules and plans; 24 months for 22. Additional licences and recurring services still use all 12 or 24 months. Other durations from 1 to 120 months receive no automatic discount. Switching a catalogue-priced monthly line to prepaid applies the annual rule; a negotiated price is scaled without repricing it. Changing an existing prepaid duration retains its agreed amount: review it or select **Use catalogue price** to recalculate. Historical documents without an annual policy keep their historical reference. **One-time payment** covers hardware and setup. **By usage** discloses a rate outside fixed totals. **Included** records a complimentary service at zero. Each line specifies its due date. Quotas are shown per unit.

<span id="review" />

## Review and save

Choose the price tax basis and VAT rate. Changing the basis preserves negotiated net prices, rounded to the nearest agora. Enter relevant delivery, activation, renewal and cancellation terms. **Calculate totals** separates one-time and prepaid amounts, monthly charges and usage rates. Committed monthly lines also show their total over the commitment. **Preview PDF** prepares a marked draft with the dark Foody logo and A4 layout. Review the tables and download from the preview. **Save draft** saves the private document. Errors retain your entries; correct the indicated field. After an uncertain save, check **Saved documents** before creating another document.

Software savings excluding VAT appear in the totals and PDF when the standard annual rate is used. They are not claimed for a different negotiated amount. Prepaid commercial benefits stack with this discount: for 12 months, Orders website creation or Restaurant setup according to the subscribed module (choose one for a combined plan); for 24 months, both services and one training day according to the subscribed modules. Explicitly add selected services as **Included**, recording their scope and prepaid duration in the terms; they are not inserted automatically. Kitchen onboarding is quoted separately. Hardware, payments and options remain payable.

<span id="finalize" />

## Finalize the PDF and prepare the order

After saving, open **Review & finalize**, review the PDF, then choose **Finalize document**. The document receives an FQ quotation or FO order number; its prices, inclusions and PDF become immutable. A rendering failure leaves it as a draft. Correct an expired quotation before finalization. **View archived PDF** displays and downloads the archived bytes. For a finalized quotation, **Create order draft** opens a single order draft retaining its prices and inclusions. Review and finalize the order separately. Conversion does not record customer acceptance, collect payment or send email. Find documents by type and status in **Saved documents**. An edit conflict requires reopening the saved version; local changes do not overwrite it.
