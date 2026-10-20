function check1004() {
    var S = parseFloat(document.getElementById('S').value);
    var R = parseFloat(document.getElementById('R').value);
    var K = parseFloat(document.getElementById('K').value);
    var result = document.getElementById('result1004');

    if (S <= 0 || R <= 0 || K < 0 || isNaN(S) || isNaN(R) || isNaN(K)) {
        result.textContent = 'Введите корректные числа';
        return;
    }

    var side = Math.sqrt(S);
    var need = 2 * R + 2 * K;

    if (side >= need) {
        result.textContent = 'Можно разместить';
    } else {
        result.textContent = 'Нельзя разместить';
    }
}