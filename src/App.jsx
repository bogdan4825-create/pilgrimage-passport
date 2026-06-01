import "./App.css";

const monasteries = [
  {
    id: 1,
    name: "Manastir Studenica",
    location: "Kraljevo, Srbija",
    tradition: "Pravoslavna sakralna baština",
    visited: true,
    tokenId: 1,
    uri: "ipfs://studenica-proof-of-pilgrimage",
  },
  {
    id: 2,
    name: "Manastir Žiča",
    location: "Kraljevo, Srbija",
    tradition: "Pravoslavna sakralna baština",
    visited: true,
    tokenId: 2,
    uri: "ipfs://zica-proof-of-pilgrimage",
  },
  {
    id: 3,
    name: "Manastir Ostrog",
    location: "Crna Gora",
    tradition: "Pravoslavna sakralna baština",
    visited: true,
    tokenId: 3,
    uri: "ipfs://ostrog-proof-of-pilgrimage",
  },
  {
    id: 4,
    name: "Manastir Hilandar",
    location: "Sveta Gora",
    tradition: "Pravoslavna sakralna baština",
    visited: false,
    tokenId: null,
    uri: null,
  },
];

function App() {
  const visitedCount = monasteries.filter((item) => item.visited).length;

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">SacredChain prototype</p>
          <h1>Proof of Pilgrimage Passport</h1>
          <p className="heroText">
            Digitalni hodočasnički pasoš za prikaz verifikovanih poseta
            manastirima kroz soulbound NFT tokene i portfolio sakralne baštine.
          </p>
        </div>

        <div className="walletCard">
          <span>Wallet status</span>
          <strong>Demo korisnik</strong>
          <p>0x7A3...91F2</p>
          <button>Connect Wallet</button>
        </div>
      </section>

      <section className="stats">
        <div className="statCard">
          <span>Posećeno</span>
          <strong>{visitedCount}/4</strong>
          <p>Manastira u digitalnom portfoliju</p>
        </div>

        <div className="statCard">
          <span>Token tip</span>
          <strong>Soulbound NFT</strong>
          <p>Neprenosiva potvrda posete</p>
        </div>

        <div className="statCard">
          <span>Smart contract</span>
          <strong>Solidity</strong>
          <p>Verifikacija kroz blockchain logiku</p>
        </div>
      </section>

      <section className="layout">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2>Moje hodočasničke posete</h2>

          <div className="cards">
            {monasteries.map((monastery) => (
              <article
                key={monastery.id}
                className={`card ${monastery.visited ? "visited" : "notVisited"}`}
              >
                <div className="cardTop">
                  <span>#{monastery.id}</span>
                  <strong>{monastery.visited ? "Posećeno" : "Nije posećeno"}</strong>
                </div>

                <h3>{monastery.name}</h3>
                <p>{monastery.location}</p>
                <small>{monastery.tradition}</small>

                {monastery.visited ? (
                  <div className="tokenBox">
                    <span>Token ID</span>
                    <strong>#{monastery.tokenId}</strong>
                    <p>{monastery.uri}</p>
                  </div>
                ) : (
                  <div className="tokenBox inactive">
                    <span>Status</span>
                    <strong>Token nije izdat</strong>
                    <p>Poseta još nije verifikovana u smart contractu.</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <aside className="sidePanel">
          <p className="eyebrow">Smart contract logika</p>
          <h2>Šta sistem dokazuje?</h2>

          <ul>
            <li>Manastir se registruje u blockchain sistemu.</li>
            <li>Korisnik dobija token nakon verifikovane posete.</li>
            <li>Ista poseta ne može biti mintovana dva puta.</li>
            <li>Token je soulbound i ne može se preneti drugom korisniku.</li>
          </ul>

          <div className="summaryBox">
            <span>Demo status</span>
            <strong>3 od 4 posete verifikovane</strong>
            <p>
              Hilandar ostaje kao primer neposećenog lokaliteta, dok Studenica,
              Žiča i Ostrog imaju izdate tokene.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;