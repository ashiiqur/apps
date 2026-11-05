/* =====================================================================
   QR Generator Store — package list.  To add a package, copy one block
   below, paste it at the end of the list, and edit. Nothing else to touch.

   Files are found automatically from the name (spaces become hyphens):
     assets/packages/Aztec-Code/preview.png
     assets/packages/Aztec-Code/engines/generator.aqr
     assets/packages/Aztec-Code/engines/scanner.aqr
     assets/packages/Aztec-Code/screenshots/video.mp4     (video:true)
     assets/packages/Aztec-Code/screenshots/1.jpeg, 2.jpeg …   (shots:2)

   generator / scanner:  "YES" → shown as available (even if no file yet)
                         "NO"  → shown as not available (even if a file exists)
   (Both "NO" → hidden, unless you add show:true — then it is listed with
    a dim "No engines available" note and a disabled Download button.)
   A package is listed in the store if at least one of them is "YES".

   Dates (YYYY-MM-DD): published = first release date, date = last update.
             If published is left out, the update date is shown instead.

   Optional: dir:"Folder-Name" (if the folder differs from the name),
             generatorDesc / scannerDesc (text under each engine).
   ===================================================================== */
const PACKAGES = [
 { name:"QR Code Classic", author:"ashiqur", source:"Official", kind:"Existing code", cat:"2D",
   ver:"1.0.0", size:96, date:"2026-11-01", published:"2026-11-01",
   desc:"The standard QR code with error-correction levels and custom colours.",
   generator:"YES", generatorDesc:"Text, URLs, Wi-Fi and more. Levels L, M, Q and H.",
   scanner:"YES",   scannerDesc:"Reads QR codes from camera or gallery." },

 { name:"Data Matrix", author:"ashiqur", source:"Official", kind:"Existing code", cat:"2D",
   ver:"1.2.0", size:84, date:"2026-10-20", published:"2026-10-20",
   desc:"Compact 2D code used for small parts and pharma labels.",
   generator:"YES", generatorDesc:"Square and rectangular symbols, ECC200.",
   scanner:"YES",   scannerDesc:"Fast detection of ECC200 symbols." },

 { name:"Code 128", author:"BarWorks Labs", source:"Third-party", kind:"Existing code", cat:"1D",
   ver:"2.0.1", size:58, date:"2026-10-12", published:"2026-10-12",
   desc:"High-density 1D barcode for shipping and logistics.",
   generator:"YES", generatorDesc:"Subsets A, B and C with auto switching.",
   scanner:"NO" },

 { name:"Aztec Code", author:"Nora K.", source:"Third-party", kind:"Existing code", cat:"2D",
   ver:"1.1.0", size:71, date:"2026-09-30", published:"2026-09-30", video:true, shots:2,
   desc:"Ticketing-friendly 2D code that needs no quiet zone.",
   generator:"NO",
   scanner:"YES",   scannerDesc:"Reads compact and full-range Aztec symbols." },

 { name:"PixelTag", author:"Dev Studio", source:"Third-party", kind:"Original code", cat:"Custom",
   ver:"0.9.0", size:42, date:"2026-11-04", published:"2026-11-04",
   desc:"A brand-new 5×5 colour grid code made for quick sharing.",
   generator:"YES", generatorDesc:"Encodes up to 25 characters in coloured cells.",
   scanner:"YES",   scannerDesc:"Decodes PixelTag from camera frames." },

 { name:"EAN-13 / UPC", dir:"EAN-13", author:"BarWorks Labs", source:"Third-party", kind:"Existing code", cat:"1D",
   ver:"1.4.0", size:36, date:"2026-08-18", published:"2026-08-18",
   desc:"Retail product barcodes with check-digit validation.",
   generator:"YES", generatorDesc:"EAN-13, EAN-8 and UPC-A.",
   scanner:"YES",   scannerDesc:"Reads retail barcodes in any orientation." },
];
