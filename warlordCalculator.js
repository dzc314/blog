'use strict';
angular.module('myApp', [])
    .controller('warlordCalculatorController', function($scope) {
        $scope.sourceData = '';
        $scope.conversionRatio = [
            { 'name': '银币', 'price': 1 },
            { 'name': '粮食', 'price': 1 },
            { 'name': '木材', 'price': 1 },
            { 'name': '生铁', 'price': 2 },
            { 'name': '战马', 'price': 400 },
            { 'name': '大宛马', 'price': 800 },
            { 'name': '汗血宝马', 'price': 1600 },
            { 'name': '长枪', 'price': 400 },
            { 'name': '精铁枪', 'price': 800 },
            { 'name': '十纹枪', 'price': 1600 },
            { 'name': '短弓', 'price': 500 },
            { 'name': '强弓', 'price': 1000 },
            { 'name': '反曲弓', 'price': 2000 },
            { 'name': '环甲', 'price': 300 },
            { 'name': '锁子甲', 'price': 600 },
            { 'name': '龙鳞战甲', 'price': 1200 },
            { 'name': '铁剑', 'price': 400 },
            { 'name': '重剑', 'price': 800 },
            { 'name': '勇士剑', 'price': 1600 },
            { 'name': '重型板甲', 'price': 500 },
            { 'name': '合金铠甲', 'price': 1000 },
            { 'name': '皇家战甲', 'price': 2000 }
        ];
        $scope.calcul = function() {
            $scope.errMessage = '';
            $scope.result = '';
            if ($scope.sourceData.length == 0) {
                $scope.errMessage = '请输入您要计算的资源';
                return;
            }
            if ($scope.sourceData.indexOf('(') < 0 || $scope.sourceData.indexOf(')') < 0) {
                $scope.errMessage = '您要计算的资源格式有误！';
                return;
            }
            var data = $scope.sourceData.split(' ').join('').split('\n').join('').split(')');
            var result = 0;
            if (data.length > 0) {
                // console.log(data);
                data.forEach(function(value) {
                    if (value.indexOf('(') > -1) {
                        var thisData = value.split('(');
                        var num = Number(thisData[1]);
                        var price = getPrice(thisData[0]);
                        result += num * price;
                        // console.log(thisData[0],num,price)
                    }
                });
            }

            $scope.result = result;
        };

        function getPrice(name) {
            // console.log(name);
            var price = 0;
            for (var i = 0; i < $scope.conversionRatio.length; i++) {
                if ($scope.conversionRatio[i]['name'] == name) {
                    price = $scope.conversionRatio[i]['price'];
                    break;
                }
            }
            return price;
        }


    });