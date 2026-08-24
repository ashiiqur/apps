Media for the Home page's "Featured app" spotlight (the big video
section, not the small app grid) goes here. Referenced from
/featured.app.details.js - update the paths there if you rename
anything.

  demo.mp4          <- short screen recording of the app in use.
                       Landscape or portrait both work; portrait
                       (phone-shaped, e.g. 1080x2340) looks best in
                       the current layout. Keep it under ~15MB so it
                       loads fast - trim it or compress with
                       HandBrake / ffmpeg if it's larger:
                         ffmpeg -i in.mov -vcodec h264 -crf 28 demo.mp4

  poster.jpg        <- a still frame shown before the video plays
                       (and if the video fails to load). Same
                       aspect ratio as demo.mp4. Falls back to the
                       app's icon if missing.

  screenshot-1.png  <- optional. A few extra screenshots shown as a
  screenshot-2.png     strip under the video. Any number - just add
  screenshot-3.png     matching entries to the `screenshots` array
                       in featured.app.details.js. Leave the array
                       empty to skip the strip entirely.

Until demo.mp4 is uploaded (or if the filename doesn't match), the
spotlight still displays fine - it just shows the poster image (or
the app's icon, if that's missing too) with a "Demo video coming
soon" note instead of a broken video player. Same graceful-fallback
behavior as every other asset on this site.
