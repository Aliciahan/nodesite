/**
 * Created by xicunhan on 11/10/2016.
 */
var devoirM2TransInfoApp = augular.module('devoirM2TransInfoApp',[ui.router]);

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

// 赫夫曼树和赫夫曼编码的存储结构

  function HuffmanNode(weight, parent, leftChild, rightChild) {
    this.weight = weight || 0;
    this.parent = parent || 0;
    this.leftChild = leftChild || 0;
    this.rightChild = rightChild || 0;
  }


});
