<template>
    <div id="secure-app">
        <img src="./assets/URFO_logo.png" alt="URFO Logo" class="logo">
        <h1 ref="hello"> HELLO WORLD! </h1>
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
    mounted() {
        console.log("SecureApp mounted");
        // set timer, after 5 seconds, change the text of hello to "HELLO URFO", switch indefinitely until unmounted
        setInterval(() => {
            if (this.$refs.hello.innerText === "HELLO WORLD!") {
                this.$refs.hello.innerText = "HELLO URFO!";
            }
            else {
                this.$refs.hello.innerText = "HELLO WORLD!";
            }
            // add a random number to the end of the text
            this.$refs.hello.innerText += Math.floor(Math.random() * 100).toString();
        }, 5000);
    }, 
    unmounted() {
        console.log("SecureApp unmounted");
        // clear the interval
        clearInterval();
    },
    methods: {
      /**
        * DO NOT MODIFY
        * method: decrypter
        * arguments:
        *       encryptedFilePath: path of file to be decrypted
        *       typename: the file suffix, just in string form
        * effect:
        *       uses openpgp to decrypt the file content, and return a blob of file content to be displayed or downloaded
        * side effect: 
        *       this method is asyncrhonous method. you must use await to call this function or you may get undefined for result.
        */
      async decrypter(encryptedFilePath, typename) {
            const openpgp = require('openpgp');     // this imported openpgp
            const publicKeyData = window.publicKeyData;
            const privateKeyData = window.privateKeyData;
            const passphrase = window.passphrase;
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
  
  /* This is an INDIVIDUAL App from App.vue and components in public, therefore import again */
  @import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
  
  .urfo-red {
    color: #b20000;
  }
  
  .urfo-orange {
    color: #ff6638;
  }
  
  /* deprecated */
  .urfo-blue {
    color: #0032c9;
  }
  
  </style>