const fetch = require("node-fetch");

// Clé API pour sécuriser l’envoi
const API_KEY = "mon-super-token";
const API_URL = "http://localhost:1337/api/sync";

// Données à envoyer (ajoute ici tes œuvres et chapitres)
const DATA = [
    {
        model: "oeuvre",
        entry: {
            titre: "One Piece",
            description: "Un jeune pirate cherche le One Piece",
            image: { url: "https://exemple.com/one-piece.jpg" },
        },
    },
    {
        model: "chapitre",
        entry: {
            titre: "Chapitre 1",
            numero: 1,
            url: "https://trad-index.com/chapitre/1",
            oeuvre: { titre: "One Piece" },
        },
    },
];

// Fonction pour envoyer les données
async function syncData() {
    for (let item of DATA) {
        console.log(`📤 Envoi de ${item.model}: ${item.entry.titre}...`);
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-sync-key": API_KEY,
                },
                body: JSON.stringify(item),
            });

            const result = await response.json();
            console.log("✅ Réponse :", result);
        } catch (error) {
            console.error("❌ Erreur :", error);
        }
    }
}

// Lancer la synchronisation
syncData();
