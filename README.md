# SialiaJS

Sialia is an embeddable C-CDA rendering library. It breaks down CDA documents into sections, allowing clinical users to order and select sections that
are relevant to their job.  Sialia references a single built javascript file, then targets a section of your app to inject the viewer.  Check out the installation and
demo for more details.

### Demo

Viewer: http://mikelarned.github.io/sialia/client/  
File Upload: http://sialia.ria.ms/

C-CDA files uploaded at sialia.ria.ms and will be available for testing in the demo viewer document dropdown.

### Installation

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My HL7 Viewer</title>
</head>

<body>

    <sialia></sialia>
    <script src="https://cdn.rawgit.com/MikeLarned/sialia/gh-pages/client/build/sialia.js"></script>
    <script>
        var url = "http://sialia.ria.ms/files";

        $.get(url, function(docs) {
            new Sialia({
                docs: docs
            });
        });

    </script>
</body>
</html>
```
1. Reference the sialia.js file.
2. Include the <sialia></sialia> tag on your page.
3. Load a set of documents for sialia to consume.
4. Create a new Sialia instance.

The 'docs' parameter is an array of document objects containing a Name and Url.  Each URL would return an xml cda document with a mime type of text/html; charset=utf-8.  Our example loads a set of docs
through jquery for our Sialia instance.  Here is an example docs array object.

```javascript
{
  Name: "CCD_1",
  Url: "http://sialia.ria.ms:80/file/CCD_1"
},
{
  Name: "Doc2",
  Url: "http://sialia.ria.ms:80/file/Doc2"
}
```

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
4. **entries** - the original array of entries

#### BlueButton Generic sections

We've also modified BlueButton.js to include generic sections.  These are sections where a specific templateId isn't present in section mapping function for c32, ccd, etc.  Generic sections only parse out narrative text, displayName and templateId.
this gave us the ability to still display and filter on a section that wasn't explicitly added in the BlueButton library.  

The forked bluebutton is here:

https://github.com/MikeLarned/bluebutton.js
