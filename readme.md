# Convert WebViewers into XWiki Extensions

1. Install:

        npm install webviewer-to-xwiki-extension

2. Navigate into the webviewer directory and type:

        wv2xar

This will produce an XWiki `.xar` file from the webviewer which is sutible for importing into XWiki.

## Other options

Generate a maven build for the given `.xar` file.

        wv2xar --mvn

Post the WebViewer directly to a live wiki.
Form is `<user>:<password>@<hostname>:<port>/<wikiname>/`.

        wv2xar --post Admin:admin@192.168.1.1:8080/xwiki/

## Fields this Converter Pays Attention To

* **name**: the name of the viewer
* **author**: the author of the webviewer
* **description**: Brief description of the webviewer
* **version**: The version of the webviewer
* **releaseStatus**: One of "planned", "alpha", "beta", "released".
* **actions**: The webviewer actions and file types
* **sourceURL**: A URL for the repository where the webviewer source code is available
* **license**: The license of the WebViewers wrapper.
* **type**: One of "drawing", "business", "office", or "other".
* **originalDeveloper**: The developer of the viewer, specifically if different from the packager.
* **viewerLicense**: The license under which the viewer is made available.
* **viewerURL**: A URL for the website of the original viewer.
