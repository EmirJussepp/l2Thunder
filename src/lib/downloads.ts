// El cliente (l2thunderclient.rar) y el launcher (L2ThunderLauncher.exe) se descargan de GOOGLE DRIVE, los dos
// desde la misma carpeta pública, y de MEGA como respaldo (cada uno en su carpeta): Drive suele cortar los
// archivos grandes muy pedidos ("demasiados usuarios..."), y la apertura es justo el momento en que más pasa.
// El link de Drive va SIN "/u/0" ni "?hl=": esos pedazos dependen de la cuenta de quien copió el link y mandan a
// otros usuarios a una cuenta que no es la suya.
const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1tm1lnz_Ty0ULe7iFT7oD3BLUE2HB_bRy";

export const CLIENT_URL = DRIVE_FOLDER_URL;
export const LAUNCHER_URL = DRIVE_FOLDER_URL;

export const CLIENT_MEGA_URL = "https://mega.nz/folder/Sz5nzajD#K0hgkoEwf3FJAFgOA0KXDg";
export const LAUNCHER_MEGA_URL = "https://mega.nz/folder/y6BGkawQ#tZnUwfk4GWjz9CqtuXP8qw";
