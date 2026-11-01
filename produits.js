
// 1. Déclaration des données de départ (produits)
const produits = [
    { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
    { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
    { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
    { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];

for (let i = 0; i < produits.length; i++) {    
    console.log(produits[i].nom, produits[i].prix);
}

// 2. Filtrage des produits disponibles (stock > 0)
const produitsDisponibles = produits.filter(
    (produit) => produit.stock > 0
);
console.log(produitsDisponibles.length); 

// 3. Calcul de la valeur totale du stock
const somme = produits.reduce((total, produit) => {
    return total + (produit.prix * produit.stock);
}, 0);
console.log(somme); 

// 4. Recherche du produit disponible le moins cher
if (produitsDisponibles.length === 0) {
    console.log("Aucun produit disponible.");
} else {
    const leMoinsCher = produitsDisponibles.reduce((min, produit) => {
        return (produit.prix < min.prix) ? produit : min;
    });
    console.log(`Le produit le moins cher est ${leMoinsCher.nom} à ${leMoinsCher.prix} MAD.`);
}

// 5. Création du résumé du catalogue avec map()
const resume = produits.map((produit) => {
    return `${produit.nom} ${produit.prix} MAD ${produit.stock} unités`;
});
console.log(resume);

// 6. Fonction de validation des données
function estValide(produit) {
    return produit && 
           typeof produit.nom === 'string' && 
           typeof produit.prix === 'number' && produit.prix >= 0 && 
           typeof produit.stock === 'number' && produit.stock >= 0;
}

console.log("\n=== 6. Produits Valides ===");
produits.forEach((p) => {
    if (estValide(p)) {
        console.log(`- ${p.nom} : ${p.prix} MAD (${p.stock} en stock)`);
    }
});

module.exports = { produits, produitsDisponibles, somme, estValide };
