$(function(){
	particlesInit();//粒子初始化
	$(".btn-login button").click(function(e){
		var canLogin = true;
		var account = $(".account input").val();
		var password = $(".password input").val();
		if (account.trim().length == 0) {
			//console.log('账号不能为空');
			$(".account .error").addClass("is-visible");
			canLogin = false;
		}
		if (password.trim().length == 0) {
			//console.log('账号不能为空');
			$(".password .error").text("密码不能为空").addClass("is-visible");
			canLogin = false;
		}
		if (!canLogin) {
			return false;
		}
		$.ajax('/login',{
			data:{
				account:account,
				password:password
			},
			method:"POST",
			success:function(data){
				var json = JSON.parse(data);
				console.log(json);
				if (json.status == 1) {
					window.location.href = json.redirect;
				}else{
					$(".password .error").text("账号或者密码错误").addClass("is-visible");
				}
			}
		});
		return false;
	});

	$(".account input").focus(function(e){
		$(".account .error").removeClass("is-visible");
	});
	$(".password input").focus(function(e){
		$(".password .error").removeClass("is-visible");
	});

	function particlesInit(){
		particlesJS('particles',
		  {
		    "particles": {
		      "number": {
		        "value": 30,
		        "density": {
		          "enable": true,
		          "value_area": 800
		        }
		      },
		      "color": {
		        "value": "#eceeef"
		      },
		      "shape": {
		        "type": "circle",
		        "stroke": {
		          "width": 0,
		          "color": "#eceeef"
		        },
		        "polygon": {
		          "nb_sides": 5
		        },
		        "image": {
		          "src": "img/github.svg",
		          "width": 100,
		          "height": 100
		        }
		      },
		      "opacity": {
		        "value": 1,
		        "random": false,
		        "anim": {
		          "enable": false,
		          "speed": 1,
		          "opacity_min": 0.1,
		          "sync": false
		        }
		      },
		      "size": {
		        "value": 12,
		        "random": true,
		        "anim": {
		          "enable": false,
		          "speed": 40,
		          "size_min": 0.1,
		          "sync": false
		        }
		      },
		      "line_linked": {
		        "enable": true,
		        "distance": 250,
		        "color": "#eceef0",
		        "opacity": 1,
		        "width": 2
		      },
		      "move": {
		        "enable": true,
		        "speed": 1,
		        "direction": "none",
		        "random": false,
		        "straight": false,
		        "out_mode": "out",
		        "attract": {
		          "enable": false,
		          "rotateX": 600,
		          "rotateY": 1200
		        }
		      }
		    },
		    "interactivity": {
		      "detect_on": "canvas",
		      "events": {
		        "onhover": {
		          "enable": false,
		          "mode": "repulse"
		        },
		        "onclick": {
		          "enable": false,
		          "mode": "push"
		        },
		        "resize": true
		      },
		      "modes": {
		        "grab": {
		          "distance": 400,
		          "line_linked": {
		            "opacity": 1
		          }
		        },
		        "bubble": {
		          "distance": 400,
		          "size": 40,
		          "duration": 2,
		          "opacity": 8,
		          "speed": 3
		        },
		        "repulse": {
		          "distance": 200
		        },
		        "push": {
		          "particles_nb": 4
		        },
		        "remove": {
		          "particles_nb": 2
		        }
		      }
		    },
		    "retina_detect": true,
		    "config_demo": {
		      "hide_card": false,
		      "background_color": "#b61924",
		      "background_image": "",
		      "background_position": "50% 50%",
		      "background_repeat": "no-repeat",
		      "background_size": "cover"
		    }
		  }

		);
	}

});



