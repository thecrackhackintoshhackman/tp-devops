// Tests unitaires pour le TP DevOps

const { add } = require('./app.js');

console.log('🧪 Démarrage des tests...\n');

// Test 1 : Addition simple
try {
    const result1 = add(2, 3);
    if (result1 !== 5) {
        throw new Error(`2 + 3 = ${result1}, attendu 5`);
    }
    console.log('✅ Test 1 passé: 2 + 3 = 5');
} catch (error) {
    console.error('❌ Test 1 échoué:', error.message);
    process.exit(1);
}

// Test 2 : Nombres négatifs
try {
    const result2 = add(-1, 1);
    if (result2 !== 0) {
        throw new Error(`-1 + 1 = ${result2}, attendu 0`);
    }
    console.log('✅ Test 2 passé: -1 + 1 = 0');
} catch (error) {
    console.error('❌ Test 2 échoué:', error.message);
    process.exit(1);
}

// Test 3 : Grands nombres
try {
    const result3 = add(100, 200);
    if (result3 !== 300) {
        throw new Error(`100 + 200 = ${result3}, attendu 300`);
    }
    console.log('✅ Test 3 passé: 100 + 200 = 300');
} catch (error) {
    console.error('❌ Test 3 échoué:', error.message);
    process.exit(1);
}

console.log('\n🎉 Tous les tests sont passés avec succès!');
console.log('Le pipeline CI peut être déployé en toute confiance.');