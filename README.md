# Agil Arbetskraft Careers

Static one-page careers website ready for Vercel.

## Languages

- Swedish is the default language on every page load.
- Use the `EN` button in the header to switch the full interface to English.
- When English is active, the button changes to `SV` to return to Swedish.

## Deploy

No build command is required. Deploy the repository root to Vercel using the `Other` framework preset.

## Fix
- Corrected the "JOBBA MED OSS" / "WORK WITH US" eyebrow label so it stays on one horizontal line.

## Cookie banner fix
The cookie choice buttons now reliably close the banner in Vercel and when testing the site directly through `file://`.

Latest fix:
- Replaced the handmade center mark with the official white Agil Arbetskraft symbol from the client brand package.
- Reworked tablet/mobile responsive layout and moved the navigation collapse breakpoint to 1080px.

## Header and career menu update
- Preserved the original rounded Agil header design without changing its layout or styling.
- Header logo, Home, Services, About and Contact now link to the main Agil Pro website.
- The existing Start, Jobb, Medarbetare and Avdelningar links now live inside a separate career menu.
