import type { Metadata } from "next";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import VoteClaimForm from "@/components/VoteClaimForm";
import { HOPZONE_VOTE_URL } from "@/lib/hopzone";
import { DRAGONES_NEGROS_VOTE_URL } from "@/lib/social";

export const metadata: Metadata = {
  title: "Votá y llevate el Amuleto",
  description:
    "Votá por L2Thunder en HopZone y en Dragones Negros y reclamá el Amuleto de Votación: +2 % de P. Atk, M. Atk, P. Def, M. Def, HP y MP máximos durante 12 horas.",
};

export default function VotarPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-36">
      <div className="mb-14">
        <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">Recompensa por votar</p>
        <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Votá y llevate el Amuleto de Votación</h1>
        <p className="mt-4 max-w-[38rem] text-muted">
          Votá por L2Thunder y llevate un amuleto que sube un 2 % tus stats durante 12 horas. Podés votar cada 12 horas
          y, de paso, ayudás a que más jugadores encuentren el servidor.
        </p>
      </div>

      <GuideStep n="I" title="Votá en HopZone y en Dragones Negros">
        <p>
          Los dos votos nos ayudan a subir en los rankings donde nos encuentran los jugadores nuevos. Se abren en
          pestañas aparte. Votá desde la misma conexión (la misma IP) con la que vas a reclamar: si votás con los datos
          del celular y reclamás desde la PC con wifi, el voto no se reconoce.
        </p>
        <p className="flex flex-wrap gap-3">
          <a href={HOPZONE_VOTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Votar en HopZone
          </a>
          <a href={DRAGONES_NEGROS_VOTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Votar en Dragones Negros
          </a>
        </p>
      </GuideStep>

      <GuideStep n="II" title="Reclamá tu amuleto">
        <p>Volvé acá, escribí el nombre de tu personaje y tocá el botón. Verificamos tu voto al instante.</p>
        <VoteClaimForm />
      </GuideStep>

      <GuideStep n="III" title="Usalo en el juego" last>
        <p>
          El amuleto llega por correo in-game al personaje que escribiste, apenas está conectado. Hacele doble clic
          para activarlo.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>+2 % de P. Atk, M. Atk, P. Def, M. Def, HP máximo y MP máximo.</li>
          <li>Dura 12 horas, sigue corriendo aunque te desconectes y no se saca con dispel.</li>
          <li>
            No se acumula con otro amuleto: usá uno por vez y esperá a que termine el efecto antes de activar el
            siguiente, o lo gastás sin ganar nada.
          </li>
        </ul>
      </GuideStep>

      <Callout title="Propio de L2Thunder" variant="custom">
        <p>
          Se entrega un amuleto por ronda de votos, y como máximo uno cada 12 horas por personaje, por cuenta y por conexión. El
          amuleto es personal: no se puede comerciar, tirar ni vender.
        </p>
      </Callout>
    </div>
  );
}
