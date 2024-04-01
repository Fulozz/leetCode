/**
 * file: "arrays/01 binaryArray"
 * description: file responsible for identifying the max Width of vertical Area
 * data: 01/04/2024
 * author: Thiago Silva Andrade
 * complexity: O(n)
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    // Reorganiza os points
    points.sort((a,b) => a[0] - b[0])
    // Pré-define a resposta inicial para 0
    let ans = 0
    // Pré-define os pontos iniciais para o valor passado em X nos points
    let px = points[0][0];
    // Looping para verificar qual é a maior area vertical
    for(const [x, _] of points){
        //  Verifica qual é o número maior entre o ans e o x - px
        ans = Math.max(ans, x - px),
        // Utiliza o x para defininir o PX
        px = x
    }
    return ans;
};