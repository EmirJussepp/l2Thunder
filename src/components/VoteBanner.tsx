// HopZone exige tener un banner de voto visible en el sitio para aprobar el
// listado. Los primeros banners que dio su panel (banner_1/2/3.png) devolvían
// 404 — este (vote_banners/simple_banner_3.png) sí carga. Queda abajo a la
// izquierda en vez del bottom:0/right:0 fijo que trae su HTML, para no pisar
// el cartel de Discord.
// Dragones Negros no da imagen de banner (el voto es un botón dentro de su
// listado, con login), así que va un badge propio del mismo ancho, apilado
// arriba. Si se cambia el alto del stack, ajustar el bottom del DiscordBanner
// en mobile para que siga por encima.
export default function VoteBanner() {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex w-[140px] flex-col gap-2">
      <a
        href="https://dragonesnegros.online/servers/thunder"
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-gold/50 bg-surface px-2 py-2 text-center transition hover:border-gold hover:bg-surface-2"
      >
        <span className="block text-[9px] font-semibold uppercase tracking-widest text-muted">
          Votanos en
        </span>
        <span className="block text-xs font-bold leading-tight text-gold">Dragones Negros</span>
      </a>

      <a
        href="https://l2.hopzone.net/site/vote/107612/1"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://l2.hopzone.net/assets/img/banners/vote_banners/simple_banner_3.png"
          alt="Vote for L2THUNDER.ONLINE"
          title="L2.HOPZONE.NET – Lineage 2 Servers ranking"
          width={140}
          height={120}
        />
      </a>
    </div>
  );
}
