var XWiki = require("xwiki-tools");

var props = XWiki.model.properties;
var obj = new XWiki.model.BaseObj("Viewers.ViewersClass");

obj.addProp("viewername", new props.ComputedField({
  "customDisplay": "{{include reference=\"AppWithinMinutes.Title\"/}}",
  "prettyName": "Viewer Name",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("description", new props.TextArea({
  "customDisplay": "",
  "editor": "Wysiwyg",
  "picker": "0",
  "prettyName": "Description",
  "rows": "5",
  "size": "40",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("package", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Package",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("status", new props.StaticList({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Status",
  "sort": "none",
  "validationMessage": "",
  "validationRegExp": "",
  "values": "planned=Planned|alpha=Alpha|beta=Beta|released=Released"
}));
obj.addProp("mode", new props.StaticList({
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
obj.addProp("type", new props.StaticList({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Type",
  "sort": "none",
  "validationMessage": "",
  "validationRegExp": "",
  "values": "drawing|business|office|other"
}));
obj.addProp("wrapperDeveloper", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Wrapper Developer",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("wrapperVersion", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Wrapper Version",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("wrapperLicence", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Wrapper Licence",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("sourcecodeurl", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Wrapper Source Code URL",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("developer", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Developer",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("version", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Version",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("licence", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer Licence",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("url", new props.XString({
  "customDisplay": "",
  "picker": "0",
  "prettyName": "Viewer URL",
  "size": "30",
  "validationMessage": "",
  "validationRegExp": ""
}));
obj.addProp("details", new props.ComputedField({
  "customDisplay": "{{include reference=\"AppWithinMinutes.Content\"/}}",
  "prettyName": "Details",
  "validationMessage": "",
  "validationRegExp": ""
}));
module.exports = obj.instance;
