//Carrega anteriormente todos os recursos
 resUrls = ['sound-res/corda1.ogg','sound-res/corda2.ogg','sound-res/corda3.ogg','sound-res/corda4.ogg','sound-res/corda5.ogg','sound-res/corda7.ogg'];
var audioCollection = {};
function loadsounds(){
	for(url in resUrls){
		url = resUrls[url]//url antes era apenas o index
		som = new Audio();
		som.src = url;
		som.load();
		audioCollection[url] = som;
	}
}
loadsounds();
//Zepto para lidar com os triggers do audio
$(document).ready(function() {

        $('.cordas').on('click tap',function (e){
		var filename = $(this).attr('id');
		var url = "sound-res/filename.ogg".replace('filename',filename);
		som = audioCollection[url];
		if(!som.ended){som.load()};//Faz o som recarregar do começo caso não tenha ainda acabado
		som.play()
		

        });
});
