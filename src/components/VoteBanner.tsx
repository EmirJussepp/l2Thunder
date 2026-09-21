// HopZone exige tener un banner de voto visible en el sitio para aprobar el
// listado. Los primeros banners que dio su panel (banner_1/2/3.png) devolvían
// 404 — este (vote_banners/simple_banner_3.png) sí carga. Queda abajo a la
// izquierda en vez del bottom:0/right:0 fijo que trae su HTML, para no pisar
// el cartel de Discord.
// Arriba va el badge oficial de Dragones Negros (728x90). Está copiado en
// public/ con un nombre neutro a propósito: el original se llama
// "votar-728x90-oro.png" y EasyList bloquea cualquier URL con "-728x90-", así
// que Brave/uBlock/AdBlock lo ocultaban como si fuera publicidad.
// Se achica a 260/300px de ancho: a menos se pierde el texto. Si se cambia el
// alto del stack, ajustar el bottom del DiscordBanner en modo compacto para
// que siga por encima.
export default function VoteBanner() {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col items-start gap-2">
      <a
        href="https://dragonesnegros.online/servers/thunder"
        target="_blank"
        rel="noopener"
        className="block w-[260px] transition hover:brightness-110 sm:w-[300px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/votar-dragones-negros.png"
          alt="Votá por nosotros en Dragones Negros"
          title="Dragones Negros - Ranking de servidores privados"
          width={728}
          height={90}
          className="block h-auto w-full"
        />
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
