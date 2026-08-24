Put each app's icon here, named to match its "id" in apps.data.js:

  qr-generator.png   <- for the app with id: 'qr-generator'
  my-new-app.png      <- for an app with id: 'my-new-app'

Square images work best (512x512 or larger is plenty - it's shown
small, at 52x52, in the grid). PNG, JPG, or WEBP all work; just
update the "icon" field in ../apps.data.js if you use a different
extension.

Until a file is uploaded (or if the filename doesn't match), that
app still displays fine in the grid - it just shows a generated
color tile with the app's first initial instead of a broken image.
This file itself is just a placeholder so the empty folder isn't
lost when zipping/uploading - delete it any time.
