var XWiki = require('xwiki-tools');
var RTools = require('resilience-tools');
var Fs = require('fs');

var makePackage = function (webviewerPath, callback)
{
  Fs.readFile(webviewerPath + '/package.json', function(err, content) {
    if (err) { throw err; }
    var json = JSON.parse(content);

    RTools.genZip(webviewerPath + '/src', function(zipName) {
      console.log("Building zip complete, creating xar file");

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

      callback(pack);
    });
  });
};

var genXar = module.exports.genXar = function(webviewerPath)
{
  makePackage(webviewerPath, function(pack) {
    pack.genXar('xwiki-webviewer-' + pkgJson.name + '-' + pkgJson.version + '.xar');
  });
};

var postToXWiki = module.exports.postToXWiki = function(webviewerPath, postCmd, callback)
{
  makePackage(webviewerPath, function(pack) {
    pack.postToWiki(postCmd, callback);
  });
};

var genMvn = module.exports.genMvn = function(webviewerPath, mvnPath)
{
  makePackage(webviewerPath, function(pack) {
    pack.genMvn(mvnPath);
  });
};

var commandLine = module.exports.commandLine = function() {
  if (process.argv.indexOf('--mvn') > -1) {
    genMvn('src', 'mvnout');

  } else if (process.argv.indexOf('--post') > -1) {
    var path = process.argv[process.argv.indexOf('--post') + 1];
    console.log("Posting to XWiki");
    postToXWiki('src', path, function () {
      console.log('posting complete');
    });

  } else {
    genZip('src', function() {
      console.log('done');
    });
  }
};
