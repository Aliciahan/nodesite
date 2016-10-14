/**
 * Created by xicunhan on 14/10/2016.
 */
var appLZW = angular.module('appLZW',[]);

appLZW.controller ('LzwCtrl', function ($scope){
  //String.fromCharCode();
  //GGACGATGTGTGGATA
  var dict ={};
  for (var i=0; i<256;i++){
    dict[String.fromCharCode(i)]=i;
  }

  var dicCounter =256;
  var w ='';
  var code = [];


  $scope.calCode = function(){
    for (var i=0; i<$scope.textInputed.length;i++){
      c=$scope.textInputed[i];
      wc=w+c;
      //console.log(wc);
      if (dict.hasOwnProperty(wc)){
        w=wc;
      } else{
        code.push(dict[w]);
        dict[wc]= dicCounter;
        dicCounter+=1;
        w=c;
      }
    }
    code.push(dict[w]);
    $scope.arrayInput = code ;
    console.log(dict)
  };

  $scope.decompress = function(){
    txt= '';
    dict ={};

    for (var i=0; i<256;i++){
      dict[String.fromCharCode(i)]=i;
    }
    cle =[];
    for (ele in dict){
      cle.push(ele);
    }
    dicCounter = 256;
    var codes = $scope.arrayInput.toString().split(',');

    var dernierChar = cle[parseInt(codes[0])];
    txt+= dernierChar;

    for (var i=1;i<codes.length;i++){
      txt+=cle[parseInt(codes[i])];
      cle.push(dernierChar+cle[parseInt(codes[i])][0]);
      dernierChar = cle[parseInt(codes[i])];
    }
    console.log(cle);
    $scope.decomp =txt;
  };


  $scope.cleanWork = function(){
    dict ={};
    for (var i=0; i<256;i++){
      dict[String.fromCharCode(i)]=i;
    }
    dicCounter = 256;
    w ='';
    code = [];
    $scope.textInputed ='';
    $scope.arrayInput=[];
  };


  var isInDict = function(wc, dic){
    for (items in dic){
      if (items == wc){
        return true;
      }
    }
    return false;
  }



});

