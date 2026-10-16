// Coins of Luck sueltas: se compran de a una, en la cantidad que el jugador elija, a un precio
// plano por Coin (el del paquete COIN_PACK con este slug; hoy $1.200: un poco más que dentro del VIP, las Cajas y los packs, que salen a $1.000 por Coin).
// Es el único paquete cuya cantidad se elige al comprar: el resto tiene precio y monedas fijos.
export const UNIT_COINS_SLUG = "coins-sueltas";

// Tope por compra. El bridge del juego acepta hasta 100 por orden; este es más bajo a propósito,
// para acotar el daño de un contracargo o de un error al tipear la cantidad.
export const UNIT_COINS_MAX = 30;
