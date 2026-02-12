# Google Sheets Form Integration Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" or whatever you prefer
4. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Company`
   - E1: `Budget`
   - F1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.company,
      data.budget,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Name your project (e.g., "Contact Form Handler")

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: Contact Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** - it looks like:
    `https://script.google.com/macros/s/AKfycby.../exec`

## Step 4: Update Your React Code

1. Open `src/sections/ContactForm/index.tsx`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your actual Web App URL from Step 3

Example:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
```

## Step 5: Test Your Form

1. Run your website
2. Fill out the contact form
3. Submit it
4. Check your Google Sheet - you should see the new entry!

## Troubleshooting

### Form submits but no data appears in sheet:
- Make sure you deployed the script as "Anyone" can access
- Check that the Web App URL is correct
- Try redeploying the script (Deploy → Manage deployments → Edit → New version)

### "Authorization required" error:
- Go back to Apps Script
- Click Deploy → Test deployments
- Make sure "Execute as: Me" is selected

### Want to receive email notifications?

Add this to your Apps Script after the `sheet.appendRow` line:

```javascript
// Send email notification
MailApp.sendEmail({
  to: "Nameh.tech.contact@gmail.com",
  subject: "New Contact Form Submission",
  body: `New submission from ${data.name}\n\nEmail: ${data.email}\nCompany: ${data.company}\nBudget: ${data.budget}\n\nMessage:\n${data.message}`
});
```

## Alternative: Use Web3Forms (Even Simpler!)

If Google Sheets seems complicated, use Web3Forms:

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email
3. Get your access key
4. Update the form code to use Web3Forms API

Let me know if you want me to implement Web3Forms instead!
