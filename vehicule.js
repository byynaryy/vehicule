Vehicule = function(modele, kilometrage, moteur, couleur) {
    this.modeleVehicule = modele;
    this.kilometrageVehicule = kilometrage;
    this.moteurVehicule = moteur;
    this.couleurVehicule= couleur;
    this.colorOfVehicule= color;
    this.voyage = function(input) {
        this.kilometrageVehicule += input;
    }
} 

