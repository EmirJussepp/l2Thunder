// Cliente y launcher viven en la misma carpeta de Drive (l2thunderclient.rar
// y L2ThunderLauncher.exe); los dos botones apuntan ahí, el usuario baja el
// archivo que corresponda.
export const CLIENT_URL =
  "https://drive.google.com/drive/folders/1tm1lnz_Ty0ULe7iFT7oD3BLUE2HB_bRy";
export const LAUNCHER_URL =
  "https://drive.google.com/drive/folders/1tm1lnz_Ty0ULe7iFT7oD3BLUE2HB_bRy";

// Espejos por si Drive se cae o corta la descarga por cuota (pasa con archivos
// grandes muy bajados). Es el mismo archivo en otro host, así que el hash de
// abajo vale para cualquiera de los links. Para sumar otro espejo (MediaFire,
// un torrent, el propio dominio) alcanza con agregarlo a la lista.
export type Mirror = { name: string; url: string };

export const CLIENT_MIRRORS: Mirror[] = [
  { name: "MEGA", url: "https://mega.nz/folder/Sz5nzajD#K0hgkoEwf3FJAFgOA0KXDg" },
];
export const LAUNCHER_MIRRORS: Mirror[] = [
  { name: "MEGA", url: "https://mega.nz/folder/y6BGkawQ#tZnUwfk4GWjz9CqtuXP8qw" },
];

// Huellas SHA-256 de lo que hay en esa carpeta, para que el jugador pueda
// comprobar que lo que bajó es lo que subimos nosotros, venga del link que
// venga (Drive, un espejo o un torrent). VerifyDownload las muestra.
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
