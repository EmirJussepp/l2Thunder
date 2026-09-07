// HopZone exige tener uno de sus banners de voto visible en el sitio para
// aprobar el listado. Se reimplementa como componente propio (no se pega el
// <a><img></a> que da su panel tal cual) para mantener el mismo patrón que
// el resto del sitio y evitar HTML crudo.
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
        src="https://l2.hopzone.net/assets/img/banners/banner_1.png"
        alt="Votar por L2THUNDER.ONLINE"
        title="L2.HOPZONE.NET – Lineage 2 Servers ranking"
        width={140}
        height={120}
      />
    </a>
  );
}
