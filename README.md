# 🌿 TaynPlantz

**TaynPlantz** is a mobile-friendly plant and flower identification web app designed for iPhone.

Take a photo of a plant or flower and TaynPlantz uses the **Pl@ntNet API** to identify it and provide useful information about the result.

---

## 🌱 Features

### 📷 Plant & Flower Scanner

- Take a photo directly with your iPhone camera
- Choose an existing photo from your gallery
- Identify flowers, leaves, fruit, bark, and whole plants
- Supports up to **5 photos** of the same plant
- Automatically prepares photos before sending them for identification
- Shows the most likely identification
- Shows alternative possible matches
- Displays identification confidence
- Displays the detected plant part when available

### 🌸 Better Flower Identification

TaynPlantz is designed to identify more than traditional houseplants.

It can identify things such as:

- 🌹 Roses
- 🌻 Sunflowers
- 🌷 Tulips
- 🌼 Daisies
- 💜 Lavender
- 🌸 Orchids
- 🌺 Hibiscus
- 🌼 Marigolds
- 🌿 Houseplants
- 🌳 Garden plants
- And many more species supported by Pl@ntNet

### 🪴 Plant Information

When a plant is identified, TaynPlantz can display:

- Common name
- Scientific name
- Plant family
- Identification confidence
- Detected plant organ
- Watering information
- Lighting information
- Basic care information

---

## 📚 Plant Resource Guide

TaynPlantz includes a built-in plant guide containing information for common plants.

Current examples include:

- Monstera
- Snake Plant
- Pothos
- Peace Lily
- Spider Plant
- Rubber Plant
- Aloe Vera
- ZZ Plant
- Fiddle Leaf Fig
- Calathea
- Boston Fern
- Jade Plant
- Rose
- Sunflower
- Tulip
- Daisy
- Lavender
- Orchid
- Hibiscus
- Marigold

The guide also includes a plant search feature.

---

## 🕘 Scan History

TaynPlantz keeps a history of identified plants on the device.

History includes:

- Plant name
- Scientific name
- Identification confidence
- Scan date
- Photo

The history is stored locally in the browser using `localStorage`.

---

## 📱 iPhone PWA

TaynPlantz is designed to work as a Progressive Web App.

It includes:

- PWA manifest
- Service worker
- iPhone home-screen support
- Apple touch icon
- 192×192 application icon
- 512×512 application icon
- Mobile-optimized interface
- Safe-area support for modern iPhones

After adding the website to the iPhone Home Screen, TaynPlantz can behave much more like a native app.

---

## 📁 Project Files

The project currently contains:

```text
TaynPlantz/
│
├── index.html
├── taynplantz.html
├── manifest.json
├── service-worker.js
├── icon-192.png
└── icon-512.png
