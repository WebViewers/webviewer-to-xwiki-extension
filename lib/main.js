var XWiki = require('xwiki-tools');
var WVTools = require('webviewer-tools');
var Fs = require('fs');
var Require = require('requirejs');

var makePackage = function (webviewerPath, callback)
{
  Fs.readFile(webviewerPath + '/webviewer.json', function(err, content) {
    if (err) { throw err; }
    var pkgJson = JSON.parse(content);

    WVTools.genZip(webviewerPath+'/src/', function(zipName) {
      console.log("Building zip complete, creating xar file");
      var name = pkgJson.name.replace(/[^a-zA-Z0-9_-]/g,'_');

      var pack = new XWiki.Package();
      pack.setName("XWiki - WebViewer - " + pkgJson.name);
      pack.setDescription(pkgJson.description || "no description provided");
      pack.setExtensionId("org.xwiki.contrib:xwiki-webviewer-" + name);

      // beware of c's and s's, xwiki uses c and npm uses s
      pack.setLicence(pkgJson.license || "unknown");
      pack.setVersion(''+pkgJson.version);

      var doc = new XWiki.model.XWikiDoc(["Viewers", name]);
      doc.setTitle(pkgJson.name + " WebViewer");
      doc.addAttachment(webviewerPath + '/' + zipName);

      Require([__dirname + '/'+'ViewersClass.js'], function (ViewersClass) {
          var obj = new ViewersClass();
          obj.setDescription(pack.getDescription());
          obj.setPackage('attach:' + zipName);
          obj.setStatus(pkgJson.releaseStatus || 'planned');

          var actions = {};
          for (var act in pkgJson.actions) {
              actions[act] = 1;
              if (['view','edit'].indexOf(act) === -1) {
                  throw new Error("action [" + act + "]");
              }
          }
          obj.setMode(Object.keys(actions).join('|'));

          obj.setType(pkgJson.type || 'other');
          obj.setWrapperDeveloper(pkgJson.author || 'unknown');
          obj.setWrapperVersion(pkgJson.version || '0.1.0');
          obj.setWrapperLicence(pkgJson.license || 'unknown');
          obj.setSourcecodeurl(pkgJson.sourceURL || '');
          obj.setDeveloper(pkgJson.originalDeveloper || '');
          obj.setLicence(pkgJson.viewerLicense || '');
          obj.setUrl(pkgJson.viewerURL || obj.getSourcecodeurl());

          doc.addXObject(obj);

          pack.addDocument(doc);

          callback(pack);
      });
    });
  });
};

var genXar = module.exports.genXar = function(webviewerPath, callback)
{
  makePackage(webviewerPath, function(pack) {
    pack.genXar(pack.getExtensionId().replace(/^.*:/, '') + '-' + pack.getVersion() + '.xar', callback);
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
    genMvn('.', 'mvnout');

  } else if (process.argv.indexOf('--post') > -1) {
    var path = process.argv[process.argv.indexOf('--post') + 1];
    console.log("Posting to XWiki");
    postToXWiki('.', path, function () {
      console.log('posting complete');
    });

  } else {
    genXar('.', function() {
      console.log('done');
    });
  }
};
