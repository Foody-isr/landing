---
title: 'Prepare, test and publish a loyalty card'
description: 'In Foody Admin, select the restaurant and open **Loyalty program → Wallet Studio**.'
apps: foodyadmin
tags:
  - customers
  - customers-wallet-studio
updatedAt: '2026-11-24'
featureId: customers-wallet-studio
audience: internal
releaseStatus: local-release-unverified
---
In Foody Admin, choose the restaurant and open **Customers → Loyalty program → Wallet Studio**.

> **Release availability must be confirmed**
> This application exists in the source workspace. This guide does not confirm public distribution or availability in your installed release.

## Availability and access

Use an account with access to restaurant settings. Saving, testing and publishing require permission to edit settings. The Apple test requires a loyalty program and a configured Apple Pass Type ID certificate and key. For the customer pilot, also enable the Wallet API and the intended provider in the test environment.

<span id="save-design" />

## Save a private design

Set the background and Apple text colors. Choose a PNG, JPEG or WebP logo and banner, each up to 10 MB. Open **Frame banner** and choose **Entire image** to keep every edge visible or **Fill the frame** to crop. Adjust the zoom and drag in the preview, or use the horizontal and vertical sliders. Apple and Google share the settings until you enable **Use a separate Google frame** in the Google preview. On Apple, place the counter **Below the banner** or **On the banner**. New uploads retain their original file in the private draft. For an older banner, upload the original again if you need its full resolution. Turn off **Show restaurant name** to remove the name beside the Apple logo. Google keeps the program title. If an image cannot be opened, the message under the picker explains what to change. Select **Save draft**. If another editor saved a newer draft, reload it before retrying.

<span id="generate-wallet-from-website" />

## Use the website design on the Wallet card

In **Customers → Loyalty program → Wallet Studio**, click **Generate with AI**. Foody uses your published website colors, logo and one photo for the banner. It tries the homepage hero first, then the cover or a photo from a visible section. When the site has no color, Foody can extract one from the logo or photo. The crop adapts to each Wallet. Check the Apple and Google previews. You can undo the suggestion immediately, change the colors or reframe the banner. An unavailable element keeps its current value. **Save draft** keeps the design for the restaurant. **Publish design** applies it to customer cards.

<span id="try-card-layouts" />

## Compare layouts with the restaurant’s banner

In **Wallet Studio**, choose a palette or adjust the two colors. After adding a banner, try **Full product**, **Panorama** or **Balance on image**. Each layout uses your image. You can fine-tune the Apple and Google frames afterwards. Move **Sample balance** to check readability in both previews. The slider changes only the simulation. Save the draft, check a test card, then publish the design when ready.

<span id="apple-test" />

## Add a test card on iPhone

On the saved design, select **Generate an Apple test card**, then **Download .pkpass**. Open the file on an iPhone and select **Add**. Check the logo, banner, colors and Test card label. The pass shows sample progress and a demonstration QR. If signing is unavailable, check the Apple signing configuration for the environment. The Google tab previews the artwork. Check the Powered by Foody caption near the QR code. Open the card details to follow the Foody link.

<span id="publish-design" />

## Publish the card design and share enrollment

Activate the loyalty program for the pilot restaurant. Under **Customer card**, select **Publish card design** to apply the saved artwork. A later draft must be published separately. Select **Copy enrollment link** to share the restaurant’s loyalty page. If publication reports a conflict, reload the Studio and review the saved design.

<span id="member-card" />

## Join, add the personal card and test earning

On a phone, open the enrollment link, sign in, accept the terms and join. On an iPhone, select **Add your card to Apple Wallet**, then **Add** in Wallet. An enabled Google provider offers an **Add to Google Wallet** button and opens Google for confirmation. Repeat the download from the same account and check the QR and progress. Place an eligible paid test order with that account and check that the Wallet card and the loyalty page reflect the same progress. For a POS pilot with lookup and loyalty sales enabled, scan the personal QR and attach the member before confirming payment. At the threshold, check the reward in the member’s loyalty account and try applying it on an enabled checkout.

<span id="compose-wallet-manually" />

## Design a card manually

In **Wallet Studio → Card layout**, choose **Table journal** for a photo with a gingham band or **Coffee poster** for a cutout in front of a wave. Upload your logo and photo, or choose **Use website logo** and **Use website photo** to select those assets from the published site. Open **Artwork title** to edit the text, typeface, size, position and angle. **Pattern and background** sets the colors, pattern and divider position. **Photo placement** lets you move the image, trim transparent margins and place it in front of the title. Under **Logo and member information**, choose the balance alone or with its target, then the remaining progress or the program benefit. Compare the **Poster** and **Classic card** Apple previews and open **Google Wallet**. iPhone uses the poster format from iOS 27. Use the sample balance to simulate progress. Select **Save draft**, test the Apple pass, then **Publish design** to release it to customer cards.

<span id="visit-stamp-card" />

## Create a visit stamp card

In **Customers → Loyalty program**, choose visits and set the number needed for a reward. Open **Wallet Studio** and enable **Visit stamp card**. Under **Unfilled stamp**, choose a coffee cup, croissant, burger, pizza slice, sushi, falafel pita, bagel, skewer, ramen bowl, salad, ice cream, cookie, cocktail or star. Each earned visit shows a check mark. Choose the disc and ink colors, then set three to six stamps per row. You can use the restaurant’s photo behind the stamps. Move **Sample balance** to 7 to check a ten-visit card in both previews. Save the draft to download an Apple test card with that sample balance. **Publish design** applies it to member cards. The tenth eligible visit issues the reward and starts the next cycle on the same card. With a large goal, the two rows display the current group of visits and the counter shows overall progress.

<span id="distribute-and-scan" />

## Share the enrollment QR and scan the member’s card

In **Wallet Studio → Customer card**, open **Enrollment QR code** and download the SVG for your counter. Scanning it opens the restaurant website. The customer signs in, accepts the program terms and adds their personal card to an available Wallet. Eligible paid online and delivery orders linked to that account count toward the same card. At the register, open loyalty on the bill before payment. On iPhone, iPad or Android, select **Scan with the camera**, or use a 2D reader. Present one member QR at a time and verify the card before attaching it to the bill. Member lookup displays the balance. An eligible payment credits the visit.
