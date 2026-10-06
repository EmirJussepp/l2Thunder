// El cliente (l2thunderclient.rar) y el launcher (L2ThunderLauncher.exe) se
// descargan de MEGA, cada uno en su propia carpeta. Es la única fuente: no hay
// espejos, así que si MEGA falla o corta por cuota no hay alternativa en la web.
export const CLIENT_URL = "https://mega.nz/folder/Sz5nzajD#K0hgkoEwf3FJAFgOA0KXDg";
export const LAUNCHER_URL = "https://mega.nz/folder/y6BGkawQ#tZnUwfk4GWjz9CqtuXP8qw";

// Huellas SHA-256 de lo que hay en esas carpetas, para que el jugador pueda
// comprobar que lo que bajó es lo que subimos nosotros, venga del link que
// venga (si algún día se suma un espejo o un torrent, valen los mismos).
// VerifyDownload las muestra.
//
// IMPORTANTE: cada vez que se reemplace uno de los dos archivos hay que
// recalcular su hash y actualizar esta lista (y la fecha), si no la web le va
// a decir al jugador que un archivo bueno está mal. Para calcularlo:
//   Get-FileHash -Algorithm SHA256 .\L2ThunderLauncher.exe
// Los valores van en minúsculas, igual que se muestran en pantalla.
export type DownloadFile = {
  name: string;
  size: string;
  bytes: number;
  sha256: string;
  updated: string;
};

export const DOWNLOAD_FILES: DownloadFile[] = [
  {
    name: "l2thunderclient.rar",
    size: "3.18 GB",
    bytes: 3412758526,
    sha256: "b35ea2c9837231e8d37f74284a71485d12b57822f3e15eb185d9bd95b257c16e",
    updated: "27/09/2026",
  },
  {
    name: "L2ThunderLauncher.exe",
    size: "21.8 MB",
    bytes: 22842836,
    sha256: "12f5cd17b13269e656c1aa738ecf1d283128567281fb4632bf4f60e2e468f966",
    updated: "27/09/2026",
  },
];
