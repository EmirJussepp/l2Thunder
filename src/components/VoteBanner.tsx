// HopZone exige tener un banner de voto visible en el sitio para aprobar el
// listado. Los primeros banners que dio su panel (banner_1/2/3.png) devolvían
// 404 — este (vote_banners/simple_banner_3.png) sí carga. Queda en la misma
// esquina que veníamos usando (abajo a la izquierda) en vez del bottom:0/
// right:0 fijo que trae su HTML, para no pisar el cartel de Discord.
export default function VoteBanner() {
  return (
    <a
      href="https://l2.hopzone.net/site/vote/107612/1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-40"
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
  );
}
