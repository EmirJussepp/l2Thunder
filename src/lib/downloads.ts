// El cliente (l2thunderclient.rar) y el launcher (L2ThunderLauncher.exe) se descargan de GOOGLE DRIVE, los dos
// desde la misma carpeta pública. Es la única fuente: no hay espejos, así que si Drive limita las descargas de un
// archivo muy pedido ("demasiados usuarios...") no hay alternativa en la web. El link va SIN "/u/0" ni "?hl=": esos
// pedazos dependen de la cuenta de quien copió el link y mandan a otros usuarios a una cuenta que no es la suya.
const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1tm1lnz_Ty0ULe7iFT7oD3BLUE2HB_bRy";

export const CLIENT_URL = DRIVE_FOLDER_URL;
export const LAUNCHER_URL = DRIVE_FOLDER_URL;
