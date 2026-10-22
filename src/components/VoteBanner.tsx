"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Botón fijo abajo a la izquierda que lleva a /votar, donde se vota (HopZone y Dragones Negros) y se reclama
// el Amuleto de Votación. En /votar no se muestra: ya estás ahí.
// HopZone exige tener su banner de voto visible en el sitio para mantener el listado, y Dragones Negros tiene
// su badge oficial: los dos viven ahora en el pie de la página (Footer), que se ve en todas las rutas.
// Mide 44 px de alto (menos que los dos badges de antes, ~78 px), así que el aviso de comunidad del celular
// (CommunityPopup, pegado abajo) lo tapa menos. Va sobre un fondo sólido porque .btn-ghost es translúcido.
export default function VoteBanner() {
  const pathname = usePathname();
  if (pathname === "/votar") return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 bg-background">
      <Link href="/votar" className="btn btn-ghost btn-sm">
        ¡Votá aquí!
      </Link>
    </div>
  );
}
