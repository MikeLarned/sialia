# SialiaJS

Sialia is an embeddable C-CDA rendering library. It breaks down CDA documents into sections, allowing clinical users to order and select sections that
are relevant to their job.  Sialia references a single built javascript file, then targets a section of your app to inject the viewer.  Check out the installation and
demo for more details.

### Installation

Install with yarn
```bash
yarn add github:Royal-Jay/sialia
```

Install with npm
```bash
npm install --save github:Royal-Jay/sialia
```

### Usage


```javascript
import { Sialia } from 'sialia';

ctrl.sialia = new Sialia({
    docs: [{
        name: 'Document Name',
        url: '/path/to/cda.xml'
    }]
});
```

The `docs` property is an array of document objects containing a `name` and `url`.  Each URL would return an XML CDA document with a mime type of `text/html; charset=utf-8`.  Here is an example docs array object:

```javascript
[{
  name: "CCD_1",
  url: "http://sialia.ria.ms:80/file/CCD_1"
},
{
  name: "Doc2",
  url: "http://sialia.ria.ms:80/file/Doc2"
}]
```

### Building

```bash
yarn
yarn build
```

### Development

To use BrowserSync as a development server and watch for file changes, run the following gulp command:

```bash
yarn start
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
4. **entries** - the original array of entries

#### BlueButton Generic sections

We've also modified BlueButton.js to include generic sections.  These are sections where a specific templateId isn't present in section mapping function for c32, ccd, etc.  Generic sections only parse out narrative text, displayName and templateId.
this gave us the ability to still display and filter on a section that wasn't explicitly added in the BlueButton library.  

The forked bluebutton is here:

https://github.com/Royal-Jay/bluebutton.js
