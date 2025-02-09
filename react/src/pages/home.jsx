export function Home() {
  return (
    <section className="m-4 mx-auto max-w-sm cursor-pointer rounded-2xl border bg-emerald-200 shadow-xl transition hover:bg-amber-50 active:scale-95">
      <img
        className="aspect-video rounded-2xl object-cover object-top"
        src="https://imgs.search.brave.com/c8P-_fV_Lsi1RTwdVD89I26W0TGiIrvwOD8xaGuD1q0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/am9zZXJhLmZyL21l/ZGlhL2NoYXRfbm9p/cl8yLmpwZw"
        alt="chat"
      />
      <div className="space-y-2 p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">My Cat</h2>
        <p className="text-sm font-light">
          4 septembre 2024 - Une goguette, la Goguette du Chat Noir, se
          réunissait dans ce cabaret. Deux ans après la mort de Rodolphe Salis
          survenue en 1897, le cabaret est racheté par le chansonnier
          montmartrois Henri Dreyfus dit Fursy et rebaptisé La Boîte à Fursy.25
          septembre 2024 - Dans le dessin animé Miraculous, ... et Chat noir,
          saison 1, épisode 25, l'affiche se trouve sur la boite d'allumettes
          servant de lit à Wayzz. Dans le jeu vidéo Overwatch, une affiche sous
          le même modèle indiquant « La tournée de Luna »
        </p>
      </div>
    </section>
  );
}
