var XWiki = require('xwiki-tools');
var RTools = require('resilience-tools');
var Fs = require('fs');

var makeXar = function (pkgJson, zipPath)
{
  var pack = new XWiki.Package();
  pack.setName("XWiki - WebViewer - " + pkgJson.name);
  pack.setDescription(typeof(pkgJson.description) !== 'undefined' ?
    pkgJson.description : "no description provided");
  pack.setExtensionId("org.xwiki.contrib:xwiki-webviewer-" + pkgJson.name);

  // beware of c's and s's, xwiki uses c and npm standard is s
  pack.setLicence(typeof(pkgJson.license) !== 'undefined' ?
    ''+pkgJson.license : "unknown");
  pack.setVersion(''+pkgJson.version);


  var doc = new XWiki.model.XWikiDoc(["WebViewers", pkgJson.name]);

  doc.setTitle(pkgJson.name + " WebViewer");
  var obj = new XWiki.model.BaseObj("WebViewers.WebViewerClass").instance();
  doc.addXObject(obj);

  doc.addAttachment(zipPath);

  pack.addDocument(doc);

  pack.genXar('xwiki-webviewer-' + pkgJson.name + '-' + pkgJson.version + '.xar');
};

var packageGadget = module.exports.packageGadget = function(webviewerPath)
{
  Fs.readFile(webviewerPath + '/package.json', function(err, content) {
    if (err) { throw err; }
    var json = JSON.parse(content);

    RTools.genZip(webviewerPath + '/src', function(zipName) {
      console.log("Building zip complete, creating xar file");
      makeXar(json, webviewerPath + '/' + zipName);
    });
  });
};

var commandLine = module.exports.commandLine = function()
{
  packageGadget(process.cwd());
};
