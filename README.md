# Tridium Eliwell PLC Webpage
Custom page for the Eliwell PLC Webserver.

## Adding logos
Pictures are loaded in series to avoid overloading the server with requests.
For this, the `<img>` tags must have it's `src` attribute blank, and it's `id` and image source must be passed as parameters to the `AddPreCacheImage()` function.

Logos must be aligned to the bottom of the image and have the following dimensions:

Big (desktop view): 150x40px.

Small (mobile view): 110x35px.
