# Firebase Project Setup

### Before Starting the Project:

Make sure you have the Firebase credentials file, which you can obtain from the Firebase Console under:

`Project Settings > Service Accounts > Generate New Private Key`

The generated file should be renamed to `keyFirebase.json` and placed in the following directory:

`functions/keys/keyFirebase.json`

**If You Are Exporting the Project**  
Generate the following rules:

```json
{
  "rules": {
    "customer": {
      ".indexOn": ["email"]
    }
  }
}
```

**To Start the Project**
To start the project, you can use `npm run serve`
To deploy changes to Firebase, use `npm run deploy`