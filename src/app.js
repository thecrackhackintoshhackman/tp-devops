// Application JavaScript simple pour le TP DevOps

function runTest() {
    // Simuler un test
    const result = add(2, 3) === 5;
    
    if (result) {
        alert('✅ Tests passés avec succès!\n\n2 + 3 = 5');
    } else {
        alert('❌ Tests échoués!');
    }
}

function showInfo() {
    alert('📋 Informations du pipeline CI/CD\n\n' +
          '1. CI (Intégration Continue)\n' +
          '   - Tests automatiques\n' +
          '   - Validation du code\n\n' +
          '2. CD (Déploiement Continu)\n' +
          '   - Déploiement auto GitHub Pages\n\n' +
          '3. Docker\n' +
          '   - Image publiée sur Docker Hub');
}

// Fonction de test
function add(a, b) {
    return a + b;
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour la date
    const now = new Date();
    document.getElementById('deploy-date').textContent = 
        now.toLocaleDateString('fr-FR') + ' ' + now.toLocaleTimeString('fr-FR');
    
    // Mettre à jour l'URL
    document.getElementById('site-url').textContent = 
        window.location.hostname || 'github.io/tp-devops';
    document.getElementById('site-url').href = 
        window.location.href || 'https://github.io/tp-devops';
    
    // Exporter pour les tests
    if (typeof module !== 'undefined') {
        module.exports = { add };
    }
});