var XWiki = require('xwiki-tools');
var props = XWiki.model.properties;
var obj = module.exports = XWiki.model.BaseObj.create("Viewers.ViewersClass");

obj.addProp("viewername", props.ComputedField.create({
  "customDisplay": "{{include reference=\"AppWithinMinutes.Title\"/}}",
  "prettyName": "Viewer Name",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("description", props.TextArea.create({
  "customDisplay": "",
  "editor": "Wysiwyg",
  "picker": "0",
  "prettyName": "Description",
  "rows": "5",
  "size": "40",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("package", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Package",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("status", props.StaticList.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Status",
  "sort": "none",
  "validationMessage": "",
  "validationRegExp": "",
  "values": "planned=Planned|alpha=Alpha|beta=Beta|released=Released"
}));
obj.addProp("mode", props.StaticList.create({
  "customDisplay": "",
  "displayType": "checkbox",
  "multiSelect": "1",
  "picker": "0",
  "prettyName": "Viewer Mode",
  "sort": "none",
  "validationMessage": "",
  "validationRegExp": "",
  "values": "view|edit"
}));
obj.addProp("type", props.StaticList.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Type",
  "sort": "none",
  "validationMessage": "",
  "validationRegExp": "",
  "values": "drawing|business|office|other"
}));
obj.addProp("wrapperDeveloper", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Wrapper Developer",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("wrapperVersion", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Wrapper Version",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("wrapperLicence", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Wrapper Licence",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("sourcecodeurl", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Wrapper Source Code URL",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("developer", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Developer",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("version", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Version",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("licence", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Licence",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("url", props.XString.create({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer URL",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("details", props.ComputedField.create({
  "customDisplay": "{{include reference=\"AppWithinMinutes.Content\"/}}",
  "prettyName": "Details",
  "validationMessage": "",
  "validationRegExp": ""
}));
