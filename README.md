# Tridium Eliwell PLC Webpage
Custom page for the Eliwell PLC Webserver.

## Adding logos
Pictures are loaded in series to avoid overloading the server with requests.
For this, the `<img>` tags must have it's `src` attribute blank, and it's `id` and image source must be passed as parameters to the `AddPreCacheImage()` function.

Desktop logos must be 150x40px.

Mobile logos must be 110x35px.