---
title: Foody quotations and sales orders
description: Development Backoffice → Payments & devices → Plans & modules → Quotes & orders.
apps: both
tags:
  - internal
  - backoffice-commercial-documents
updatedAt: '2026-11-16'
featureId: backoffice-commercial-documents
audience: internal
releaseStatus: available
---
Development Backoffice → Payments & devices → Plans & modules → Quotes & orders.

## Availability and access

Foody superadmins only, in the sandbox version containing this module. API migration 321 adds commercial documents. PDFs are quotations or sales orders; they do not collect payment, issue tax invoices or activate access. Existing subscription contracts remain unchanged. The **Quotes & orders** tab is hidden in production: catalogue management is available independently of the quotation and billing pilot.

<span id="issuer" />

## Set the issuer details

Open **Issuer settings**. Enter Foody’s legal name, company ID, address and contact details. Choose the default PDF language, prices excluding or including VAT, or **No VAT charged** as applicable, then the VAT rate and commercial terms. Select **Save issuer settings**. Defaults are copied into new documents only. Demonstration PDF identities are never reused. After a conflict, reload the saved settings before trying again.

<span id="compose" />

## Compose a quotation or order

Choose **New quotation** or **New order**. Enter the title, date, quotation validity and customer. A customer can be a prospect; search can also link an existing restaurant. Review its contact details. Select Hebrew, French or English PDF output; entered descriptions and terms are not translated automatically. Search for and add catalogue plans, modules, hardware, licences or fees. **Custom item** adds a free-form line. Adjust quantities, descriptions, details and agreed prices. Quotation-only items need an explicit price. The first save freezes the catalogue version for this document; later publications do not recalculate its prices or inclusions.

For the reviewed grid, add **Foody Integral** or **Restaurant + Orders** directly when selling that plan: the document does not automatically replace separate lines with a bundle. Do not add the bundle and its modules twice. Additional POS licences are active devices at ILS 149; EMV at ILS 49 per active terminal remains a separate line. One-time fees, options and equipment stay separate. Existing lines and negotiated prices are not rewritten.

<span id="schedule" />

## Separate one-time, monthly and prepaid charges

Use **One-time payment** for equipment or setup. For a subscription or terminal fees, select **Monthly** and enter the minimum commitment in months; 0 means no minimum commitment. **Prepaid period** covers 12, 24 or any duration from 1 to 120 months in one payment. Its price field is the unit price for the whole period. Switching from monthly to prepaid proposes 12 monthly payments; subsequently changing the duration preserves the negotiated price. Review it or use **Use catalogue price** to recalculate the period reference. Every line specifies payment on order, on activation or on a date. **By usage** discloses a unit rate outside fixed totals. **Included** records a zero-price service. Plan and module quotas are shown per unit; enable the detailed feature list if needed.

<span id="review" />

## Review and save

Choose the price tax basis and VAT rate. Changing the basis preserves negotiated net prices, rounded to the nearest agora. Enter relevant delivery, activation, renewal and cancellation terms. **Calculate totals** separates one-time and prepaid amounts, monthly charges and usage rates. Committed monthly lines also show their total over the commitment. **Preview PDF** prepares a marked draft with the dark Foody logo and A4 layout. Review the tables and download from the preview. **Save draft** saves the private document. Errors retain your entries; correct the indicated field. After an uncertain save, check **Saved documents** before creating another document.

<span id="finalize" />

## Finalize the PDF and prepare the order

After saving, open **Review & finalize**, review the PDF, then choose **Finalize document**. The document receives an FQ quotation or FO order number; its prices, inclusions and PDF become immutable. A rendering failure leaves it as a draft. Correct an expired quotation before finalization. **View archived PDF** displays and downloads the archived bytes. For a finalized quotation, **Create order draft** opens a single order draft retaining its prices and inclusions. Review and finalize the order separately. Conversion does not record customer acceptance, collect payment or send email. Find documents by type and status in **Saved documents**. An edit conflict requires reopening the saved version; local changes do not overwrite it.
