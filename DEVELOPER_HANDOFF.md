# Project HyperNym — Team Handoff Document

This document contains all the necessary information for the web development and graphics teams to bring the HyperNym website to production-ready status.

---

## Section 1 — Developer Setup Instructions

Follow these steps to set up the local development environment and verify the application.

### 1. Prerequisites
Before starting, ensure you have the following software installed:
*   **Node.js**: Version 18.0.0 or higher. [Download from nodejs.org](https://nodejs.org/)
*   **npm**: Comes bundled with Node.js.
*   **Code Editor**: [Visual Studio Code](https://code.visualstudio.com/) is highly recommended.
*   **Browser**: [Google Chrome](https://www.google.com/chrome/) (latest version) for the best development experience.

### 2. Initial Setup
1.  **Unzip** the project folder.
2.  **Open VS Code**, then go to `File > Open Folder...` and select the unzipped directory.
3.  Open the **Integrated Terminal** in VS Code (``Ctrl + ` `` or `Terminal > New Terminal`).

### 3. Running the Site
Run the following commands in the terminal:
```bash
# Install all project dependencies
npm install

# Start the local development server
npm run dev
```

### 4. Verification & Review
*   **Local URL**: Once the server starts, open [http://localhost:5173](http://localhost:5173) in Chrome.
*   **Route Checklist**: The site contains 13 pages. Please navigate to each to verify functionality:
    1.  `/` (Home)
    2.  `/about` (About us)
    3.  `/careers` (Job openings)
    4.  `/case-studies` (Portfolio)
    5.  `/contact` (Lead form)
    6.  `/privacy` (Legal)
    7.  `/iotility` (Product Hub)
    8.  `/iotility/fleet-intelligence`
    9.  `/iotility/asset-management`
    10. `/iotility/twinscape`
    11. `/iotility/sustainex`
    12. `/iotility/utilities-monitoring`
    13. `/dataverse` (AI Hub)
*   **Asset Placeholders**: You will see dark boxes with text labels (e.g., "[ASSET: 1200x600]"). This is **expected**. These are placeholders waiting for the graphics team.
*   **Placement**: Once the graphics team provides the assets, simply drop them into the `public/SiteGraphics/` folder hierarchy. The site will pick them up automatically with no code changes needed.
*   **Responsive Check**: Use Chrome DevTools (F12) Device Toolbar to check:
    *   **Mobile**: 375px width
    *   **Tablet**: 768px width
    *   **Desktop**: 1200px width
*   **Handoff**: Share your screen on **Microsoft Teams** with the Project Owner to review the site together before pushing to the GitHub repository for production deployment.

---

## Section 2 — Complete Graphics Asset List

### Asset Requirements
*   **Logos**: SVG preferred. Transparent backgrounds. No shadows.
*   **Dashboards**: JPG (90% quality). Dark theme UI.
*   **Icons**: SVG only. Outline style. IoTility Icons (#00C8E0), Dataverse Icons (#6B2FD9).
*   **Video**: MP4 (H.264), 1920x1080, loop, max 15s, max 8MB, no audio.
*   **Naming**: No spaces. Use hyphens (`-`).

| File Name | Folder Path | Format | Dimensions | Description | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `hypernym-white.png` | `logos/hypernym/` | PNG | 160x32 | Primary logo for dark background | High |
| `hero-bg-video.mp4` | `hero/` | MP4 | 1920x1080 | Dark cinematic tech/industrial loop | High |
| `vodafone.svg` | `logos/clients/` | SVG | 120x30 | Vodafone logo (white/grayscale) | High |
| `mtn.svg` | `logos/clients/` | SVG | 120x30 | MTN logo | High |
| `qatar-energy.svg` | `logos/clients/` | SVG | 120x30 | Qatar Energy logo | High |
| `first-group.svg` | `logos/clients/` | SVG | 120x30 | First Group Dubai logo | High |
| `bateel.svg` | `logos/clients/` | SVG | 120x30 | Bateel Qatar logo | High |
| `sunoono.svg` | `logos/clients/` | SVG | 120x30 | Sunoono Qatar logo | High |
| `doha-cables.svg` | `logos/clients/` | SVG | 120x30 | Doha Cables logo | High |
| `nitb.svg` | `logos/clients/` | SVG | 120x30 | NITB Pakistan logo | High |
| `mtn-case.svg` | `logos/clients/` | SVG | 120x32 | MTN Case Study logo | Medium |
| `vodafone-case.svg` | `logos/clients/` | SVG | 120x32 | Vodafone Case Study logo | Medium |
| `nitb-case.svg` | `logos/clients/` | SVG | 120x32 | NITB Case Study logo | Medium |
| `teltonika.svg` | `logos/hardware/` | SVG | 120x30 | Teltonika manufacturer logo | Medium |
| `mokosmart.svg` | `logos/hardware/` | SVG | 120x30 | MokoSmart logo | Medium |
| `milesight.svg` | `logos/hardware/` | SVG | 120x30 | Milesight logo | Medium |
| `bsjiot.svg` | `logos/hardware/` | SVG | 120x30 | BSJIOT logo | Medium |
| `howen.svg` | `logos/hardware/` | SVG | 120x30 | Howen logo | Medium |
| `jimiiot.svg` | `logos/hardware/` | SVG | 120x30 | JimiIoT logo | Medium |
| `microsoft-partner-data-ai.png` | `logos/certifications/` | PNG | 120x40 | Microsoft Partner badge | Medium |
| `ccs-supplier.png` | `logos/certifications/` | PNG | 60x24 | Crown Commercial Service logo | Medium |
| `fleet-icon.svg` | `icons/` | SVG | 40x40 | Vehicle/Truck icon (#00C8E0) | Medium |
| `asset-icon.svg` | `icons/` | SVG | 40x40 | Asset/Inventory icon (#00C8E0) | Medium |
| `twinscape-icon.svg` | `icons/` | SVG | 40x40 | 3D Building/Digital Twin icon (#00C8E0) | Medium |
| `sustainex-icon.svg` | `icons/` | SVG | 40x40 | Sustainability/Carbon icon (#00C8E0) | Medium |
| `utilities-icon.svg` | `icons/` | SVG | 40x40 | Water/Energy/Gas icon (#00C8E0) | Medium |
| `globe-icon.svg` | `icons/` | SVG | 40x40 | Global network/Connectivity icon | Medium |
| `vertical-schools.svg` | `icons/` | SVG | 48x48 | School/University sector icon | Medium |
| `vertical-rental.svg` | `icons/` | SVG | 48x48 | Vehicle rental sector icon | Medium |
| `vertical-coldchain.svg` | `icons/` | SVG | 48x48 | Cold chain/refrigerated sector icon | Medium |
| `vertical-oil.svg` | `icons/` | SVG | 48x48 | Oil & Gas sector icon | Medium |
| `vertical-waste.svg` | `icons/` | SVG | 48x48 | Waste management sector icon | Medium |
| `vertical-transit.svg` | `icons/` | SVG | 48x48 | Public transit/bus sector icon | Medium |
| `usecase-hospital.svg` | `icons/` | SVG | 32x32 | Hospital/Medical use case icon | Medium |
| `usecase-bank.svg" ` | `icons/` | SVG | 32x32 | Banking/Corporate use case icon | Medium |
| `usecase-building.svg` | `icons/` | SVG | 32x32 | Smart building use case icon | Medium |
| `iotility-hero.jpg` | `products/` | JPG | 1200x600 | IoTility multi-product dashboard | High |
| `fleet-hero.jpg` | `products/` | JPG | 1200x600 | Fleet Intelligence map visualization | High |
| `asset-hero.jpg` | `products/` | JPG | 1200x600 | Asset Management dashboard view | High |
| `twinscape-hero.jpg` | `products/` | JPG | 1200x600 | 3D digital twin building interface | High |
| `sustainex-hero.jpg` | `products/` | JPG | 1200x600 | ESG and carbon tracking dashboard | High |
| `utilities-hero.jpg` | `products/` | JPG | 1200x600 | Utilities monitoring dashboard | High |
| `dataverse-hero.jpg` | `products/` | JPG | 1200x600 | AI / Neural network abstract hero | High |
| `iotility-platform-preview.png` | `products/` | PNG | 800x450 | IoTility platform UI showcase | High |
| `dataverse-platform-preview.jpg` | `products/` | JPG | 800x450 | Dataverse interface showcase | High |
| `iotility-ecosystem-diagram.jpg` | `products/` | JPG | 800x500 | Diagram of connected IOT modules | Medium |
| `fleet-hardware-lineup.jpg` | `products/` | JPG | 800x400 | Professional photo of GPS and dashcams | Medium |
| `outdoor-asset-dashboard.jpg` | `products/` | JPG | 480x320 | Field tracking dashboard UI | Medium |
| `indoor-asset-dashboard.jpg` | `products/` | JPG | 480x320 | Indoor RTLS tracking dashboard UI | Medium |
| `twinscape-explainer.jpg` | `products/` | JPG | 800x450 | Digital Twin vs Physical comparison | Medium |
| `agentic-ai-visual.jpg` | `products/` | JPG | 480x300 | Advanced AI Agent workflow UI | Medium |
| `data-intelligence-visual.jpg` | `products/` | JPG | 480x300 | Big data visualization dashboard | Medium |
| `dashiq-dashboard.jpg` | `products/` | JPG | 480x300 | Dataverse DashIQ interface | Medium |
| `syncro-visual.jpg` | `products/` | JPG | 480x300 | Dataverse Syncro ETL interface | Medium |
| `dataverse-ai-visual.jpg` | `products/` | JPG | 1200x600 | Abstract Dataverse AI connection web | Medium |
| `team-hero.jpg` | `about/` | JPG | 1200x500 | Professional team/modern office | Medium |
| `careers-hero.jpg` | `about/` | JPG | 1200x400 | Collaborative team env shot | Medium |
| `iso-badge.svg` | `about/` | SVG | 100x24 | ISO 27001 Mark | Medium |

---

## Section 3 — Folder Structure and Placement

The graphics team must create and populate the following folder structure inside the project's `public/` directory:

```text
SiteGraphics/
├── hero/                   # Hero video background
├── logos/                  # All corporate identity
│   ├── hypernym/           # Own brand assets
│   ├── clients/            # Client partner logos
│   ├── hardware/           # OEM manufacturer logos
│   └── certifications/     # ISO and Partner badges
├── products/               # Software UI and product photos
├── icons/                  # Custom SVG icons
└── about/                  # Careers and Team photography
```

**Instruction to Graphics Team:**
1.  Create this structure inside the unzipped project folder under `public/SiteGraphics/`.
2.  Ensure every file matches the naming and format specified in the table.
3.  Do not add subfolders not listed above.
4.  Once all assets are placed, notify the Project Owner to arrange a **Microsoft Teams screen share** for final visual sign-off.
