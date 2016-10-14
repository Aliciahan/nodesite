/**
 * Created by xicunhan on 11/10/2016.
 */


var devoirM2TransInfoApp = angular.module('devoirM2TransInfoApp',[]);

// devoirM2TransInfoApp.config(function($stateProvider){
//   var HelloState = {
//     name:'hello',
//     url: '/hello',
//     templateUrl: '../pages/main-page.html'
//     controller :
//   };
//   $stateProvider.state(HelloState);
// });

devoirM2TransInfoApp.controller ('HuffmanController', function HuffmanController($scope){


  //Structure donnees pour un noeud.
  function HuffmanNode(weight, parent, leftChild, rightChild) {
    this.weight = weight || 0;
    this.parent = parent || 0;
    this.leftChild = leftChild || 0;
    this.rightChild = rightChild || 0;

  }
  //Construire un arbre de Huffman de N noeuds

  function buildHuffmanTree(weights,n){
    n = n || weights.length;
    var m = 2*n-1;
    var huffmanTree = [];

    //Initialeser
    for (var i =0; i<n; i++)
      huffmanTree[i] = new HuffmanNode(weights[i],0,0,0);
    for (; i<m; i++)
      huffmanTree[i] = new HuffmanNode(0,0,0,0);
    for(i=n; i<m; i++){
      //entre [1, i-1] trouver le parent =0 && les plus petits weights, retourner comme [s1, s2]
      var ret = select (huffmanTree, i);
      var s1 = ret[0];
      var s2 = ret[1];
      huffmanTree[s1].parent =i;
      huffmanTree[s2].parent =i;
      huffmanTree[i].leftChild = s1;
      huffmanTree[i].rightChild = s2;
      huffmanTree[i].weight = huffmanTree[s1].weight + huffmanTree[s2].weight;
    }
    return huffmanTree;
  }

  function select (huffmanTree, len) {
    var ret = [];
    for (var i=0; i<len; i++){
      var node= huffmanTree[i];
      if(node.parent!==0) continue;
      if(ret.length<2){
        ret.push(i);
      } else {
        var index = huffmanTree[ret[0]].weight > huffmanTree[ret[1]].weight? 0:1;
        if(node.weight< huffmanTree[ret[index]].weight)
          ret[index]=i;
      }
    }
    if(ret[0] > ret[1]){
      var temp = ret[0];
      ret[0] = ret[1];
      ret[1] = temp;
    }
    return ret
  }

  function huffmanCoding(weights){
    var n = weights.length;
    if (n<1) return;

    var huffmanTree = buildHuffmanTree(weights,n);

    var hc = calHuffmanCode(huffmanTree, n);
    return [huffmanTree, hc];
  }

  function calHuffmanCode(huffmanTree, n) {
    var hc = [];
    var cd = [];

    for (var i = 0; i < n; i++) {
      var start = n - 1;
      for (var c = i, f = huffmanTree[i].parent; f != 0; c=f, f = huffmanTree[f].parent) {
        if (huffmanTree[f].leftChild == c) cd[--start] = '0';
        else cd[--start] = '1';
      }
      hc[i] = strCopy(cd, start);
    }
    return hc;
  }

  function strCopy(str,start){
    var s='';
    for(; str[start];start++){
      s+=str[start];
    }
    return s;
  }

  $scope.tester = function(){
    $scope.arrayInput = [5, 29, 7, 8, 14, 23, 3, 11];
    console.log(huffmanCoding($scope.arrayInput));
  }
});
