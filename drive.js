AFRAME.registerComponent('drive ', {
    init:function(){
        var gameStateValue = this.el.getAttribute("game")
        if(gameStateValue == "play"){
            this.driveCar()
        }
    },

    isVelocityActive:function(){
        console.log("Hi")
        return Math.random() < 0.25
    },

    driveCar:function(){
        var multiply = 10;
        var wheelRotation = 0;
        

        //Key Down Events

        window.addEventListener('keydown', function(e){
            var wheel= document.querySelector("#control-wheel")

            if(e.code == "arrowRight" && wheelRotation >-40){
                wheelRotation-=5
            }

        })
    }

})