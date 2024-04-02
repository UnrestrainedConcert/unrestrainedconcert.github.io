<template>
    <div id="secure-app">
        <img src="./assets/URFO_logo.png" alt="URFO Logo" class="logo">
        <h1> HELLO WORLD! </h1>
        <ScoreCard />
        <!--<router-view />-->
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import ScoreCard from './components/secure/ScoreCard.vue';

  export default defineComponent({
    name: 'SecureApp',
    components: {
        ScoreCard
    },
    methods: {
      async decryptAndDownload(encryptedFilePath, typename) {
            const openpgp = require('openpgp');
            const { privateKeyData, publicKeyData, passphrase } = await import('@/secure.js');
            const publicKey = await openpgp.readKey({ armoredKey: publicKeyData });
            const privateKey = await openpgp.decryptKey({
                privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyData }),
                passphrase
            });
            var decryptedBlob, encryptedData, encryptedMessage, format;
            if (typename == 'pdf' || typename == 'docx' || typename == 'xlsx' || typename == 'mp3' || typename == 'wav') {
                encryptedData = await fetch(encryptedFilePath).then((response) => response.arrayBuffer());    //response.text()
                encryptedMessage = await openpgp.readMessage({
                    binaryMessage: new Uint8Array(encryptedData) // parse binary message
                });
                format = 'binary';
            }
            else {
                encryptedData = await fetch(encryptedFilePath).then((response) => response.text());    //response.text()
                encryptedMessage = await openpgp.readMessage({
                    armoredMessage: encryptedData // parse armored message
                });
                format = 'armored';
            }
            await openpgp.decrypt({
                message: encryptedMessage,
                verificationKeys: publicKey,
                decryptionKeys: privateKey,
                format: format
            }).then( (decrypted) => {
                decryptedBlob = new Blob([decrypted.data], { type: 'application/' + typename });
                // saveAs(decryptedBlob, decryptedFileName);
            } )
            return decryptedBlob;
        },
    }
  });
  </script>
  
  <style>
  
  @import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
  
  .urfo-red {
    color: #b20000;
  }
  
  .urfo-orange {
    color: #ff6638;
  }
  
  .urfo-blue {
    color: #0032c9;
  }
  
  </style>