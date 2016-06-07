# SialiaJS

CCDA Rendering Tool

### Demo

http://mikelarned.github.io/sialia/client/

### Building

```bash
npm install
gulp
```

### Development

To use BrowserSync as a development server and watch for file changes, run the following gulp command:

```bash
gulp serve
```

### BlueButton Updates

There are a number of pre parsed sections for CCDA and C32 documents.  In the orignal bluebutton.js the section name was a key off of
the data object containing an array of entries. Those sections now contain an object vs an array with the following properties.

```
{
  displayName: "friendly display name",
  templateId: "",
  text: "<div>Some HTML for section</div>",
  entries: []
}
```
1. **displayName** - Friendly name to display in viewer.
2. **templateId** - The HL7 templateId for the section. This currently isn't filled for the pre parsed sections such as allergies, medications, etc. For any generically created section, there will be a template id.
3. **text** - the narrative text (generally HTML) for each section.  All the objects on data outside of demographics, document and smoking status should have this value set.  We can default to displaying this HTML if there is no custom section display.
4. **entries** - the original array of entries.
