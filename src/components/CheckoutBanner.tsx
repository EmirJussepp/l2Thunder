"use client";

import { useSearchParams } from "next/navigation";
import Callout from "@/components/guias/Callout";

// Mercado Pago devuelve al jugador a /donar?checkout=success|pending|failed (ver /api/checkout).
// Sin esto volvía a la página de donar sin ningún mensaje de cómo le fue al pago.
const DISCORD = "https://discord.gg/nNFJVWTbD";

export default function CheckoutBanner() {
  const status = useSearchParams().get("checkout");

  if (status === "success") {
    return (
      <div role="status" className="mx-auto mb-12 max-w-3xl">
        <Callout title="¡Gracias por tu aporte!" variant="custom">
          <p>
            Recibimos tu pago. Los Coins of Luck llegan solos por correo in-game en unos minutos.
            Tu personaje tiene que estar conectado para recibirlos; si no, el correo te espera
            hasta que entres. Dejá espacio libre en el inventario.
          </p>
        </Callout>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div role="status" className="mx-auto mb-12 max-w-3xl">
        <Callout title="Tu pago está pendiente" variant="info">
          <p>
            Mercado Pago todavía está acreditando el pago. Apenas se apruebe, los Coins of Luck
            llegan solos por correo in-game: no hace falta que hagas nada más.
          </p>
        </Callout>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div role="status" className="mx-auto mb-12 max-w-3xl">
        <Callout title="El pago no se completó" variant="warn">
          <p>
            No se te cobró nada. Podés volver a intentarlo cuando quieras. Si vuelve a fallar,
            escribinos por{" "}
            <a
              href={DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline underline-offset-4 hover:text-foreground"
            >
              Discord
            </a>
            .
          </p>
        </Callout>
      </div>
    );
  }

  return null;
}
