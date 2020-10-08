var fibonacci = (function() {
    var memo = {};

    function f(x, n) {
        var value;

        memo[x] = memo[x] || {};

        if (x in memo && n in memo[x]) {
            value = memo[x][n];
        } else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(x, n - 1) + f(x, n - 2);

            memo[x][n] = value;
        }

        return value;
    }

    return f;
})();


function fibonacciWithMultiParams() {
    var cacheObject = {};

    function f(x, n) {
        var value;

        cacheObject[x] = cacheObject[x] || {};

        if (x in cacheObject && n in cacheObject[x]) {
            value = cacheObject[x][n];
        } else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(x, n - 1) + f(x, n - 2);

            cacheObject[x][n] = value;
        }

        return value;
    }

    return f;
}