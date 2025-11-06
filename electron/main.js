import { app, BrowserWindow } from "electron";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.setName("Traveler Desktop");

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        autoHideMenuBar: true,
        icon: path.join(__dirname, "assets", "icon.png"),
    });

    // charge le fichier index.html de ton build Vite
    if (process.env.NODE_ENV === "development") {
        win.loadURL("http://localhost:5173");
    } else {
        win.loadFile(path.join(__dirname, "../dist/index.html"));
    }

    // ouvre les devtools (optionnel)
    // win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
