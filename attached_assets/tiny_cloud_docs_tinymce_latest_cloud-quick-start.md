URL: https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/
---
TinyMCE Documentation v7

[TinyMCE Documentation v7](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/) [TinyMCE Documentation v6](https://www.tiny.cloud/docs/tinymce/6/cloud-quick-start/) [TinyMCE Documentation v5](https://www.tiny.cloud/docs/tinymce/5/)

# Quick start

## Install TinyMCE using the Tiny Cloud

TinyMCE 7 is a powerful and flexible rich text editor that can be embedded in web applications. This quick start covers how to add a TinyMCE editor to a web page using the Tiny Cloud.

It only takes 2 minutes to create your free Tiny account and get the API key:


[Sign up\\
with email![Google](https://www.tiny.cloud/images/icons/google.svg)![GitHub](https://www.tiny.cloud/images/icons/github.svg)\\
 ->](https://tiny.cloud/signup?_gl=1*1m4fqt3*_ga*NDE5MTIxMjQwLjE3MzIxOTkwODE.*_ga_GQ50XYHWQZ*MTczMjI2OTAwMi4yLjEuMTczMjI2OTQwNy40LjAuMA..*_gcl_au*NTYyNTc2NTQyLjE3MzIxOTkwODE. "Sign up with Google")

## Include the TinyMCE script

Include the following line of code in the `<head>` of an HTML page.

```html hljs language-xml
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
htmlCopied!
```

## Initialize TinyMCE as part of a web form

Initialize TinyMCE 7 on any element (or elements) on the web page by passing an object containing a `selector` value to `tinymce.init()`. The `selector` value can be any valid [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

For example: To replace `<textarea id="mytextarea">` with a TinyMCE 7 editor instance, pass the selector `'#mytextarea'` to `tinymce.init()`.

For example:

```html hljs language-xml
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
    <script>
      tinymce.init({
        selector: '#mytextarea'
      });
    </script>
  </head>

  <body>
    <h1>TinyMCE Quick Start Guide</h1>
    <form method="post">
      <textarea id="mytextarea">Hello, World!</textarea>
    </form>
  </body>
</html>
htmlCopied!
```

Adding this content to an HTML file and opening it in a web browser will load a TinyMCE editor, such as:

- TinyMCE

- HTML

- JS

- Edit on CodePen


File

Edit

View

Insert

Format

Hello, World!

p

[Build with](https://www.tiny.cloud/powered-by-tiny?utm_campaign=poweredby&utm_source=tiny&utm_medium=referral&utm_content=v7)

```html hljs language-xml
<textarea id="default">Hello, World!</textarea>
htmlCopied!
```

```js hljs language-javascript
tinymce.init({
  selector: 'textarea#default'
});
jsCopied!
```

## Add your API key

To remove the notice:

**This domain is not registered with Tiny Cloud. Please see the quick start guide or create an account.**

Replace `no-api-key` in the source script ( `<script src=...`) with a Tiny Cloud API key, which is created when signing up to the [Tiny Cloud](https://www.tiny.cloud/auth/signup/).

Signing up for a Tiny Cloud API key will also provide a trial of the [Premium Plugins](https://www.tiny.cloud/docs/tinymce/latest/plugins/#premium-plugins).

## Save the content from the editor

To retrieve content from the editor, either process the content with a form handler or use the [getContent API](https://www.tiny.cloud/docs/tinymce/latest/apis/tinymce.editor/#getContent).

If you use a form handler, once the `<form>` is submitted, TinyMCE 7 will `POST` the content in the same way as a normal HTML `<textarea>`, including the HTML elements and inline CSS of the editor content. The host’s form handler can process the submitted content in the same way as content from a regular `<textarea>`.

## Next Steps

For information on:

- Customizing TinyMCE, see: [Basic Setup](https://www.tiny.cloud/docs/tinymce/latest/basic-setup/).

- The three editor modes, see:



- [TinyMCE classic editing mode](https://www.tiny.cloud/docs/tinymce/latest/use-tinymce-classic/).

- [TinyMCE inline editing mode](https://www.tiny.cloud/docs/tinymce/latest/use-tinymce-inline/).

- [TinyMCE distraction-free editing mode](https://www.tiny.cloud/docs/tinymce/latest/use-tinymce-distraction-free/).


- Adding TinyMCE plugins, see: [Work with plugins to extend TinyMCE](https://www.tiny.cloud/docs/tinymce/latest/work-with-plugins/).

- Localizing the TinyMCE editor, see: [Localize TinyMCE](https://www.tiny.cloud/docs/tinymce/latest/localize-your-language/).

- For information on the CSS required to render some TinyMCE elements outside of the editor, see: [CSS for rendering TinyMCE content outside the editor](https://www.tiny.cloud/docs/tinymce/latest/editor-content-css/).


It only takes 2 minutes to create your free Tiny account and get the API key:


[Sign up\\
with email![Google](https://www.tiny.cloud/images/icons/google.svg)![GitHub](https://www.tiny.cloud/images/icons/github.svg)\\
 ->](https://tiny.cloud/signup?_gl=1*1m4fqt3*_ga*NDE5MTIxMjQwLjE3MzIxOTkwODE.*_ga_GQ50XYHWQZ*MTczMjI2OTAwMi4yLjEuMTczMjI2OTQwNy40LjAuMA..*_gcl_au*NTYyNTc2NTQyLjE3MzIxOTkwODE. "Sign up with Google")

**About cookies on this site**

❮

❯

- [Categories](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#ch2-settings)
- [Cookie declaration](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#ch2-declaration)

Cookies used on the site are categorized and below you can read about each category and allow or deny some or all of them. When categories than have been previously allowed are disabled, all cookies assigned to that category will be removed from your browser.
Additionally you can see a list of cookies assigned to each category and detailed information in the cookie declaration.

[Learn more](https://www.tiny.cloud/legal/privacy/)

Allow all cookies



**Necessary cookies**

Some cookies are required to provide core functionality. The website won't function properly without these cookies and they are enabled by default and cannot be disabled.

[CookieHub](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

CookieHub is a Consent Management Platform (CMP) which allows users to control storage and processing of personal information.

- [Privacy Policy](https://www.cookiehub.com/legal/privacy-policy)

- cookiehub

[Cloudflare](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

Cloudflare is a global network designed to make everything you connect to the Internet secure, private, fast, and reliable.

- \_\_cf\_bm
- \_\_cf\_bm
- \_\_cf\_bm
- \_\_cf\_bm



**Preferences**

Preference cookies enables the web site to remember information to customize how the web site looks or behaves for each user. This may include storing selected currency, region, language or color theme.

[Intercom](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

Customer service solution that combines an AI chatbot, help desk, and proactive support.

- [Privacy Policy](https://intercom.com/terms-and-policies)

- intercom-id-\*
- intercom-session-\*
- intercom-device-id-\*



**Analytical cookies**

Analytical cookies help us improve our website by collecting and reporting information on its usage.

[Google Analytics](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.

- [Privacy Policy](https://policies.google.com/privacy)

- \_ga
- \_ga\_\*

[Hotjar](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

Hotjar is a product experience insights platform that gives you behavior analytics and feedback data to help you empathize with and understand your customers.

- \_hjSessionUser\_\*
- \_hjSession\_\*

[Segment](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

- ajs\_anonymous\_id

[Mixpanel](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

Mixpanel is a powerful real-time analytics platform that helps companies measure and optimize user engagement.

- [Privacy Policy](https://mixpanel.com/legal/privacy-policy)

- mp\_\*
- mp\_\*



**Marketing cookies**

Marketing cookies are used to track visitors across websites to allow publishers to display relevant and engaging advertisements. By enabling marketing cookies, you grant permission for personalized advertising across various platforms.

[Google Ads](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

Google Ads is an advertising service by Google for businesses that want to display ads on Google search results and its advertising network.

- [Privacy Policy](https://business.safety.google/privacy/)

- IDE
- \_gcl\_au

[Facebook Pixel](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

A piece of code that lets businesses measure, optimise and build audiences for advertising campaigns.

- [Privacy Policy](https://www.facebook.com/privacy/policy)

- \_fbp

[YouTube](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

YouTube is a free video sharing website that makes it easy to watch online videos.

- [Privacy Policy](https://policies.google.com/privacy)

- YSC
- VISITOR\_INFO1\_LIVE
- VISITOR\_PRIVACY\_METADATA

[LinkedIn Insight](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

The LinkedIn Insight tag powers conversion tracking, website audiences, and website demographics within the LinkedIn system.

- [Privacy Policy](https://www.linkedin.com/legal/privacy-policy)

- UserMatchHistory
- AnalyticsSyncHistory
- bcookie
- lidc
- bscookie
- li\_gc

[Microsoft Ads](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

Microsoft Advertising (formerly Bing Ads) is a service that provides pay per click advertising on the Bing, Yahoo!, and DuckDuckGo search engines.

- [Privacy Policy](https://privacy.microsoft.com/en-gb/privacystatement)

- MUID
- MSPTC
- \_uetsid
- \_uetvid

[Twitter](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

Twitter is an online news and social networking site where people communicate in short messages called tweets.

- muc\_ads
- personalization\_id

[Visual Website Optimizer](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

- \_vwo\_uuid\_v2
- \_vwo\_uuid
- \_vwo\_ds



**Other cookies**

The cookies in this category have not yet been categorized and the purpose may be unknown at this time.

Cookies used on the site are categorized and below you can read about each category and allow or deny some or all of them. When categories than have been previously allowed are disabled, all cookies assigned to that category will be removed from your browser.
Additionally you can see a list of cookies assigned to each category and detailed information in the cookie declaration.

[Learn more](https://www.tiny.cloud/legal/privacy/)

**Necessary cookies**

Some cookies are required to provide core functionality. The website won't function properly without these cookies and they are enabled by default and cannot be disabled.

| Name | Hostname | Vendor | Expiry |
| --- | --- | --- | --- |
| \_rdt\_uuid | .tiny.cloud |  | 90 days |
| Set by Reddit to help build a profile of your interests and show you relevant ads. |
| \_\_cf\_bm | .g2crowd.com | Cloudflare, Inc. | 1 hour |
| The \_\_cf\_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption. |
| visitor\_id2202 | www.tiny.cloud<br>pi.tiny.cloud |  | 400 days |
| visitor\_id2202-hash | www.tiny.cloud<br>pi.tiny.cloud |  | 400 days |
| cookiehub | .tiny.cloud | [CookieHub](https://www.cookiehub.com/legal/privacy-policy) | 365 days |
| Used by CookieHub to store information about whether visitors have given or declined the use of cookie categories used on the site. |
| \_pbd | .productboard.com |  | 14 days |
| Productboard |
| \_\_cf\_bm | .js.ubembed.com | Cloudflare, Inc. | 1 hour |
| The \_\_cf\_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption. |
| url-tracker | .tiny.cloud |  | 400 days |
| visitor\_id2202 | pi.tiny.cloud |  | 400 days |
| visitor\_id2202-hash | pi.tiny.cloud |  | 400 days |
| utm-touches | .tiny.cloud |  | 400 days |
| \_\_cf\_bm | .productboard.com | Cloudflare, Inc. | 1 hour |
| The \_\_cf\_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption. |
| maxio-product | .tiny.cloud |  | Session |
| \_\_cf\_bm | .t.co | Cloudflare, Inc. | 1 hour |
| The \_\_cf\_bm cookie supports Cloudflare Bot Management by managing incoming traffic that matches criteria associated with bots. The cookie does not collect any personal data, and any information collected is subject to one-way encryption. |
| \_vwo\_sn | .tiny.cloud |  | 1 hour |
| Stores session-level information. (VWO) |
| \_vis\_opt\_s | .tiny.cloud |  | 100 days |
| The number of times the browser was closed and reopened. Tracks sessions created for a user. (VWO) |
| \_vis\_opt\_test\_cookie | .tiny.cloud |  | Session |
| Session cookie generated to detect if the cookies are enabled on the browser of the user or not. It also helps in tracking the number of browser sessions a visitor has gone through. (VWO) |

Necessary cookies

**Preferences**

Preference cookies enables the web site to remember information to customize how the web site looks or behaves for each user. This may include storing selected currency, region, language or color theme.

| Name | Hostname | Vendor | Expiry |
| --- | --- | --- | --- |
| bcookie | .linkedin.com | [LinkedIn Ireland Unlimited Company](https://www.linkedin.com/legal/privacy-policy) | 365 days |
| This is a Microsoft MSN 1st party cookie for sharing the content of the website via social media. |
| lidc | .linkedin.com | [LinkedIn Ireland Unlimited Company](https://www.linkedin.com/legal/privacy-policy) | 1 day |
| Used by LinkedIn for routing. |
| visitor\_id2202 | .pardot.com |  | 400 days |
| visitor\_id2202-hash | .pardot.com |  | 400 days |
| lpv2202 | pi.pardot.com |  | 1 hour |
| intercom-id- | .tiny.cloud | [Intercom R&D Unlimited Company](https://intercom.com/terms-and-policies) | 270 days, 1 hour |
| Used by Intercom Messenger to store anonymous visitor identifier cookie. |
| intercom-session- | .tiny.cloud | [Intercom R&D Unlimited Company](https://intercom.com/terms-and-policies) | 7 days |
| Used by Intercom Messenger to store identifier for each unique browser session and is used to keep track of sessions. |
| VisitorId | .ws.zoominfo.com |  | 365 days |
| li\_gc | .linkedin.com | [LinkedIn Ireland Unlimited Company](https://www.linkedin.com/legal/privacy-policy) | 180 days |
| Used by LinkedIn to store consent of guests regarding the use of cookies for non-essential purposes |
| intercom-device-id- | .tiny.cloud | [Intercom R&D Unlimited Company](https://intercom.com/terms-and-policies) | 270 days, 1 hour |
| Used by Intercom Messenger to store identifier for each unique device that interacts with the Messenger. Intercom uses this cookie to determine the unique devices interacting with the Intercom Messenger to prevent abuse. |
| OptanonConsent | .portal.productboard.com |  | 365 days |
| Contain the consent status of a visitor is indicated using the first party OptanonConsent cookie. |
| slireg | www.tiny.cloud |  | 7 days |
| Salesloft cookie for use in live website tracking to help identify and qualify leads. |
| slirequested | www.tiny.cloud |  | 365 days |
| Salesloft cookie for use in live website tracking to help identify and qualify leads. |
| sliguid | www.tiny.cloud |  | 365 days |
| Salesloft cookie for use in live website tracking to help identify and qualify leads. |
| YSC | .youtube.com | [Google](https://policies.google.com/privacy) | Session |
| This cookie is set by YouTube video service on pages with YouTube embedded videos to track views. |
| VISITOR\_INFO1\_LIVE | .youtube.com | [Google](https://policies.google.com/privacy) | 180 days |
| Set by YouTube and used for various purposes, including analytical and advertising. |

Preferences

**Analytical cookies**

Analytical cookies help us improve our website by collecting and reporting information on its usage.

| Name | Hostname | Vendor | Expiry |
| --- | --- | --- | --- |
| \_ga | .tiny.cloud | [Google](https://policies.google.com/privacy) | 400 days |
| Contains a unique identifier used by Google Analytics to determine that two distinct hits belong to the same user across browsing sessions. |
| personalization\_id | .twitter.com | Twitter, Inc. | 400 days |
| This cookie carries out information about how the end user uses the website and any advertising that the end user may have seen before visiting the said website. |
| UserMatchHistory | .linkedin.com | [LinkedIn Ireland Unlimited Company](https://www.linkedin.com/legal/privacy-policy) | 30 days |
| Contains a unique identifier used by LinkedIn to determine that two distinct hits belong to the same user across browsing sessions. |
| AnalyticsSyncHistory | .linkedin.com | [LinkedIn Ireland Unlimited Company](https://www.linkedin.com/legal/privacy-policy) | 30 days |
| Used by LinkedIn to store information about the time a sync with the lms\_analytics cookie took place for users in the Designated Countries |
| \_ga\_ | .tiny.cloud | [Google](https://policies.google.com/privacy) | 400 days |
| Contains a unique identifier used by Google Analytics 4 to determine that two distinct hits belong to the same user across browsing sessions. |
| \_hjSessionUser\_ | .tiny.cloud | Hotjar | 365 days |
| Hotjar cookie. This cookie is set when the customer first lands on a page with the Hotjar script. It is used to persist the Hotjar User ID, unique to that site on the browser. This ensures that behavior in subsequent visits to the same site will be attributed to the same user ID. |
| \_hjSession\_ | .tiny.cloud | Hotjar | 1 hour |
| Used by Hotjar to hold current session data. |
| ajs\_anonymous\_id | .tiny.cloud | Twilio Inc. | 365 days |
| This cookie is used to aggregate and segment data to different data tracking tools by Segment |
| mp\_ | .tiny.cloud | [Mixpanel](https://mixpanel.com/legal/privacy-policy) | 365 days |
| Used by Mixpanel to track user's activity |
| MUID | .bing.com | [Microsoft](https://privacy.microsoft.com/en-gb/privacystatement) | 390 days |
| Microsoft User Identifier tracking cookie used by Bing Ads. It can be set by embedded microsoft scripts. Widely believed to sync across many different Microsoft domains, allowing user tracking. |
| mp\_ | www.tiny.cloud | [Mixpanel](https://mixpanel.com/legal/privacy-policy) | 365 days |
| Used by Mixpanel to track user's activity |
| \_vwo\_uuid\_v2 | .tiny.cloud | Visual Website Optimizer | 366 days |
| Calculates Unique Traffic On a website |
| \_vwo\_uuid | .tiny.cloud | Visual Website Optimizer | 365 days, 6 hours |
| It generates a unique id for every visitor and is used for the report segmentation feature in VWO, and it also allows you to view data in a more refined manner. (VWO) |
| \_vwo\_ds | .tiny.cloud | Visual Website Optimizer | 30 days |
| Stores persistent user-level data for Track (goals, funnels) and Analyze (heatmaps, recordings, form analytics) (VWO) |

Analytical cookies

**Marketing cookies**

Marketing cookies are used to track visitors across websites to allow publishers to display relevant and engaging advertisements. By enabling marketing cookies, you grant permission for personalized advertising across various platforms.

| Name | Hostname | Vendor | Expiry |
| --- | --- | --- | --- |
| muc\_ads | .t.co | Twitter, Inc. | 400 days |
| This is a cookie that is set by twitter.com. It is used for optimizing ad relevance by collecting visitor navigation data. |
| \_fbp | .tiny.cloud | [Meta Platforms](https://www.facebook.com/privacy/policy) | 90 days |
| Facebook Pixel advertising first-party cookie. Used by Facebook to track visits across websites to deliver a series of advertisement products such as real time bidding from third party advertisers. |
| IDE | .doubleclick.net | [Google Advertising Products](https://business.safety.google/privacy/) | 390 days |
| Used by Google's DoubleClick to serve targeted advertisements that are relevant to users across the web. Targeted advertisements may be displayed to users based on previous visits to a website. These cookies measure the conversion rate of ads presented to the user. |
| bscookie | .www.linkedin.com | [LinkedIn Ireland Unlimited Company](https://www.linkedin.com/legal/privacy-policy) | 365 days |
| Used by the social networking service, LinkedIn, for tracking the use of embedded services. |
| \_gcl\_au | .tiny.cloud | [Google Advertising Products](https://business.safety.google/privacy/) | 90 days |
| Used by Google AdSense to understand user interaction with the website by generating analytical data. |
| VISITOR\_PRIVACY\_METADATA | .youtube.com | [Google](https://policies.google.com/privacy) | 180 days |
| YouTube visitor privacy metadata cookie. |
| MSPTC | .bing.com | [Microsoft](https://privacy.microsoft.com/en-gb/privacystatement) | 390 days |
| \_uetsid | .tiny.cloud | [Microsoft](https://privacy.microsoft.com/en-gb/privacystatement) | 1 day |
| This cookie is used by Bing to determine what ads should be shown that may be relevant to the end user perusing the site. |
| \_uetvid | .tiny.cloud | [Microsoft](https://privacy.microsoft.com/en-gb/privacystatement) | 390 days |
| Used by Microsoft Advertising to store a unique, anonymized visitor ID to personalize marketing. |

Marketing cookies

**Other cookies**

The cookies in this category have not yet been categorized and the purpose may be unknown at this time.

| Name | Hostname | Vendor | Expiry |
| --- | --- | --- | --- |
| \_reb2buid | www.tiny.cloud |  | 360 days |
| \_reb2bsessionID | www.tiny.cloud |  | 1 hour |
| \_reb2bgeo | www.tiny.cloud |  | 20 days |
| \_reb2bref | www.tiny.cloud |  | 15 days |
| \_vwo\_consent | .tiny.cloud |  | 365 days |
| \_vis\_opt\_exp\_46\_combi | .tiny.cloud |  | 100 days |
| \_vis\_opt\_exp\_47\_combi | .tiny.cloud |  | 100 days |
| \_reb2bloaded | www.tiny.cloud |  | 1 hour |

Other cookies

Save settings

[Cookie settings](https://www.tiny.cloud/docs/tinymce/latest/cloud-quick-start/#)

![](https://app.spara.co/api/v1/organization/vMdBxG3LA/default_sales_rep.jpeg)

![](https://app.spara.co/api/v1/organization/vMdBxG3LA/primary_color.svg)

Spara