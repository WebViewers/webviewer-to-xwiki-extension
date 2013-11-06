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


