var stimApp = angular.module('stimApp',['ngSanitize'])
	.controller('stimController', function($scope, stimFactory){
		function init(){
			stimFactory.getStrings().success(function(data){
				$scope.textos = data ;
				inscripcion = $scope.textos.idiomas[0].inscripcion;
				//mails = $scope.textos.idiomas[idioma].inscripcion.mails;
				// mail_en = $scope.textos.idiomas[1].inscripcion.success.mail_externo;
			});
			$scope.idioma=0;
			$scope.selected_curso= "";

			$scope.cambiaridioma = function (indice) {

				$scope.idioma = indice;	
			}
			$scope.selectVal = function (item) {

                $('button.button-label').html(item.id +'<span class="caret"></span>' );
                $scope.selected_curso = item.id;
            }
		}
		init();

	})
	.factory('stimFactory', function($http){
		var factory = {};
		factory.getStrings = function(){
			return $http.get('editor/strings.json')
		}
		return factory;
	});

	(function($) {
	
	'use strict';
	
	var $slides = $('[data-slides]');
	var images = $slides.data('slides');
	var count = 0;
	var slideshow = function() {
		if(count>=images.length-1){
			count=0;
		}else{
			count++ ;
		}  
		$slides
			.css('background-image', 'url("' + images[count] + '")')
			.show(0, function() {
				setTimeout(slideshow, 5000);
			});
	};
	
	slideshow();
	
}(jQuery));