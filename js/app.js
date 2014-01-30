var installBtn = document.getElementById('install-btn');

if(installBtn) {
    
    installBtn.style.display = 'none';
    
    // Essa parte só funcionará quando hospedar o app em um servidor remoto.
    if(navigator.mozApps) {

        installBtn.addEventListener('click', function() {
            navigator.mozApps.install(location.href + 'manifest.webapp');
        }, false);

        var req = navigator.mozApps.getSelf();
        req.onsuccess = function() {
            if(!req.result) {
                installBtn.style.display = 'inline-block';
            }
        };

    }
}

