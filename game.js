const canvas= document.getElementById("canvas"

    const context =canvas.getContext("2");
    
    // configurações do jogo
    
    const gravity 8.251
    
    let bird (50, y: 150, width: 20, heights 20, velocitys e
    
    // Função para desenhar a passarn
    
    function dravird() { context.fillstyle 'yellow')
    
    context.fillRect(bind.x, bird.y, bird.width, bird.height);
    
    // Função para atualizar e posição de péssame
    
    function updateBind() {
    
    bird.velocity gravity; bird.ybird.velocity;