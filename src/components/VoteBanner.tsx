// HopZone exige tener un banner de voto visible en el sitio para aprobar el
// listado. Los banners <img> que da su panel (banner_1/2/3.png) devuelven 404
// directo desde su propio servidor — el link de voto en sí funciona bien, así
// que se arma un badge propio en vez de mostrar una imagen rota.
export default function VoteBanner() {
  return (
    <a
      href="https://l2.hopzone.net/site/vote/107612/1"
      target="_blank"
      rel="noopener noreferrer"
      className="card-surface fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-none border-accent-2/40 px-3 py-2 text-xs font-semibold text-foreground shadow-lg transition hover:border-gold hover:bg-gold hover:text-background"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2Z" />
      </svg>
      Votar en HopZone
    </a>
  );
}
