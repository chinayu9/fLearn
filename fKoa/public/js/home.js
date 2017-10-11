$(function(){
	var dialogIsShow = false;
	$("body").click(function(e){
		if (!dialogIsShow) {
			return;
		}
		dialogHide();
	});
	$("#personal-area").click(dialogShowHide());

	function dialogShowHide(){	
		return function(e){
			if (!dialogIsShow) {
				dialogShow();
			}else{
				dialogHide();
			}
			e.stopPropagation();
		};
	}

	function dialogShow(){
		$(".personal-drop-down-box").css({
			visibility:"visible",
			opacity:1
		});
		dialogIsShow = !dialogIsShow;
	}

	function dialogHide(){
		$(".personal-drop-down-box").css({
			visibility:"hidden",
			opacity:0
		});
		dialogIsShow = !dialogIsShow;
	}
});