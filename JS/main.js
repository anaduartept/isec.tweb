


//alterar isto, como só temos 1 modal não vale a pena ter o ciclo

let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "flex";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };


      //se se quiser chamar a funcao pelo action do form

      function saveDonation(){
        alert('aqui');
        
        const form = document.querySelector('#frm-donation');

        const formData = new FormData(form);

        alert(formData.get("d-value"));

      };


      //botão de submit

      let frmDonations = document.getElementById("frm-donations");

      frmDonations.addEventListener("submit", (e) => {
        e.preventDefault();
      
        let name = document.getElementById("name");
        let nif = document.getElementById("nif");

        var dValue=frmDonations.elements["d-value"].value;
        
        if (dValue=="other")
          dValue=frmDonations.elements["txt-d-value-other"].value;
        else if(dValue=="monthly")
          dValue=frmDonations.elements["txt-d-value-monthly"].value;
      
        var nMeals= 0;

        if (dValue>40)
        {
            nMeals= dValue/1.5/2;
            alert("O seu donativo permitirá alimentar diariamente " + parseInt(nMeals) + " pessoas.");
        }
        else
        {
            nMeals= dValue/1.5;
            alert("O seu donativo permitirá fornecer aproximadamente " + parseInt(nMeals) + " refeições.");
        }
    
    
      });

