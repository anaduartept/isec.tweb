


//alterar isto, como só temos 1 modal não vale a pena ter o ciclo

let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "flex";
  };
});
// let closeBtns = [...document.querySelectorAll(".close")];
// closeBtns.forEach(function (btn) {
//   btn.onclick = function () {
//     let modal = btn.closest(".modal");
//     modal.style.display = "none";
//   };
// });
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }

  if(event.target.value=="company"){
    document.getElementById("last_name").style.visibility="hidden";
    //document.getElementById("last_name").disabled = true;
    //document.getElementById("last_name").style.backgroundColor="gray";
  }
  if(event.target.value=="individual"){
    //document.getElementById("last_name").disabled = false;
    document.getElementById("last_name").style.visibility="visible";
  }

  
  if(event.target.value=="other"){
    document.getElementById("txt-d-value-other").focus();
  }

  if(event.target.name=="d-value")
  {
    //vamos calcular n refeiçoes e escrever a mensagem
    var dValue = frmDonations.elements["d-value"].value;

    if (dValue == "other")
      dValue = frmDonations.elements["txt-d-value-other"].value;
    else if (dValue == "monthly")
      dValue = frmDonations.elements["txt-d-value-monthly"].value;

    var nMeals = 0;

    if (dValue <= 40) {
      nMeals = dValue / 1.5 / 2;
      document.getElementById("message").innerHTML="*O seu donativo permitirá alimentar diariamente " + parseInt(nMeals) + " pessoas.";
    }
    else {
      nMeals = dValue / 1.5;
      document.getElementById("message").innerHTML="*O seu donativo permitirá alimentar diariamente " + parseInt(nMeals/2) + " pessoas.<br/>*O seu donativo permitirá fornecer aproximadamente " + parseInt(nMeals) + " refeições.";
    }

  }



};


// let information = document.getElementById("company");
// information.addEventListener("click", function(e) {
//   document.getElementById("last_name").disabled = true;
// });



//se se quiser chamar a funcao pelo action do form

function saveDonation() {

  const form = document.querySelector('#frm-donation');

  const formData = new FormData(form);

  alert(formData.get("d-value"));

};


//botão de submit

let frmDonations = document.getElementById("frm-donations");

frmDonations.addEventListener("submit", (e) => {
  e.preventDefault();

  // let name = document.getElementById("name");
  // let nif = document.getElementById("nif");

  // var dValue = frmDonations.elements["d-value"].value;

  // if (dValue == "other")
  //   dValue = frmDonations.elements["txt-d-value-other"].value;
  // else if (dValue == "monthly")
  //   dValue = frmDonations.elements["txt-d-value-monthly"].value;

  // var nMeals = 0;

  // if (dValue > 40) {
  //   nMeals = dValue / 1.5 / 2;
  //   alert("O seu donativo permitirá alimentar diariamente " + parseInt(nMeals) + " pessoas.");
  // }
  // else {
  //   nMeals = dValue / 1.5;
  //   alert("O seu donativo permitirá fornecer aproximadamente " + parseInt(nMeals) + " refeições.");
  // }


});



/* https://miniature.earth */

/* load earth script when page is ready */

window.addEventListener('load', function () {
  var script = document.createElement("script");
  script.src = "https://drc.ngo/scripts/earth.js";
  document.body.appendChild(script);
});

window.addEventListener("earthjsload", function () {

  /* setup earth */

  var myearth = new Earth("myearth",
    {
      location: { lat: 10, lng: -80 },
      autoRotate: true,
      autoRotateSpeed: 2,
      autoRotateDelay: 1000,
      autoRotateStart: 100,
      zoom: 1.25,
      zoomable: true,
      zoomMin: 1.25,
      zoomMax: 1.75,
      quality: (window.innerWidth <= 1024) ? 4 : 5,
      light: 'simple',
      transparent: true,
      mapSeaColor: 'rgba(97,195,217,.25)',
      mapLandColor: 'rgba(120,138,151,.50)',
      mapBorderColor: 'rgba(255,255,255,1)',
      mapBorderWidth: 0.2,
    });

  // wait for earth to be ready

  myearth.addEventListener("ready", function () {

    // add tooltip

    tooltip = this.addOverlay({
      className: 'tooltip',
      visible: false,
      containerScale: 0.2,
      zoomScale: 0,
      depthScale: 0
    });

    // define markers

    markers = [

      {
        title: 'Afghanistan',
        link: '/afghanistan/',
        location: { lat: 34.26, lng: 66.37 }
      },

      {
        title: 'Algeria',
        link: '/saharawi/',
        location: { lat: 27.64, lng: 2.66 }
      },

      {
        title: 'Bangladesh',
        link: '/bangladesh/',
        location: { lat: 24.30, lng: 90.18 }
      },

      {
        title: 'Bosnia and Herzegovina',
        link: '/where-we-work/europe/bosnia-herzegovina/',
        location: { lat: 43.95, lng: 18.04 }
      },

      {
        title: 'Burkina Faso',
        link: '/burkina-faso/',
        location: { lat: 11.72, lng: -1.64 }
      },

      {
        title: 'Burundi',
        link: '/burundi/',
        location: { lat: -3.70, lng: 29.92 }
      },

      {
        title: 'Cameroon',
        link: '/cameroon/',
        location: { lat: 5.14, lng: 12.61 }
      },

      {
        title: 'C.A.R.',
        link: '/car/',
        location: { lat: 6.49, lng: 20.03 }
      },

      {
        title: 'Colombia',
        link: '/colombia/',
        location: { lat: 3.20, lng: -73.17 }
      },

      {
        title: 'Denmark',
        link: '/where-we-work/europe/denmark/',
        location: { lat: 55.68, lng: 12.58 }
      },

      {
        title: 'Djibouti',
        link: '/djibouti/',
        location: { lat: 11.68, lng: 42.62 }
      },

      {
        title: 'D.R. Congo',
        link: '/congo/',
        location: { lat: -3.07, lng: 23.91 }
      },

      {
        title: 'Ethiopia',
        link: '/ethiopia/',
        location: { lat: 8.13, lng: 39.58 }
      },

      {
        title: 'South Caucasus',
        link: '/south-caucasus/',
        location: { lat: 42.01, lng: 43.92 }
      },

      {
        title: 'Greece',
        link: '/greece/',
        location: { lat: 39.27, lng: 22.14 }
      },

      {
        title: 'Iraq',
        link: '/iraq/',
        location: { lat: 33.07, lng: 43.87 }
      },

      {
        title: 'Italy',
        link: '/italy/',
        location: { lat: 42.76, lng: 12.55 }
      },

      {
        title: 'Jordan',
        link: '/jordan/',
        location: { lat: 31.34, lng: 36.50 }
      },

      {
        title: 'Kenya',
        link: '/kenya/',
        location: { lat: 0.16, lng: 38.08 }
      },

      {
        title: 'Kosovo',
        link: '/Kosovo/',
        location: { lat: 42.61, lng: 20.86 }
      },

      {
        title: 'Lebanon',
        link: '/lebanon/',
        location: { lat: 33.86, lng: 35.72 }
      },

      {
        title: 'Libya',
        link: '/libya/',
        location: { lat: 26.73, lng: 17.46 }
      },

      {
        title: 'Mexico',
        link: '/mexico/',
        location: { lat: 21.53, lng: -101.55 }
      },

      {
        title: 'Mali',
        link: '/mali/',
        location: { lat: 17.45, lng: -1.76 }
      },

      {
        title: 'Moldova',
        link: '/Moldova/',
        location: { lat: 47.15, lng: 28.61 }
      },

      {
        title: 'Myanmar',
        link: '/myanmar/',
        location: { lat: 21.92, lng: 95.95 }
      },

      {
        title: 'Niger',
        link: '/niger/',
        location: { lat: 17.02, lng: 9.49 }
      },

      {
        title: 'Nigeria',
        link: '/nigeria/',
        location: { lat: 9.29, lng: 8.04 }
      },

      {
        title: 'Poland',
        link: '/Poland/',
        location: { lat: 52.32, lng: 19.29 }
      },

      {
        title: 'Romania',
        link: '/Romania/',
        location: { lat: 46.10, lng: 24.83 }
      },

      {
        title: 'Serbia',
        link: '/serbia/',
        location: { lat: 43.94, lng: 20.80 }
      },

      {
        title: 'Somalia',
        link: '/somalia/',
        location: { lat: 4.81, lng: 47.30 }
      },

      {
        title: 'South Sudan',
        link: '/south-sudan/',
        location: { lat: 7.15, lng: 30.35 }
      },

      {
        title: 'Sudan',
        link: '/sudan/',
        location: { lat: 15.19, lng: 30.77 }
      },

      {
        title: 'Syria',
        link: '/syria/',
        location: { lat: 35.24, lng: 38.54 }
      },

      {
        title: 'Tanzania',
        link: '/tanzania/',
        location: { lat: -6.79, lng: 35.15 }
      },

      {
        title: 'Tunesia',
        link: '/tunisia/',
        location: { lat: 33.66, lng: 9.69 }
      },

      {
        title: 'Türkiye',
        link: '/turkiye/',
        location: { lat: 39.00, lng: 35.08 }
      },

      {
        title: 'Uganda',
        link: '/uganda/',
        location: { lat: 1.10, lng: 32.31 }
      },

      {
        title: 'Ukraine',
        link: '/ukraine/',
        location: { lat: 48.81, lng: 31.44 }
      },

      {
        title: 'Yemen',
        link: '/yemen/',
        location: { lat: 16.02, lng: 47.80 }
      },

    ];

    // add markers to earth

    for (var i = 0; i < markers.length; i++) {
      var marker = myearth.addMarker({
        mesh: "Cone",
        transparent: true,
        opacity: .75,
        color: 'rgb(175,22,30)',
        location: markers[i].location,
        offset: .1,
        scale: 0.4,
        scaleY: 0.5,
        hotspot: true,
        hotspotRadius: 1.25,
        hotspotHeight: 0,
        title: markers[i].title,
        link: markers[i].link
      });

      // behaviour settings

      marker.addEventListener('mouseover', enterMarker);
      marker.addEventListener('mouseout', leaveMarker);
      marker.addEventListener('click', openLink);

    }
  });
});

function enterMarker() {
  tooltip.location = this.location;
  tooltip.content = this.title;
  tooltip.visible = true;
}

function leaveMarker() {
  tooltip.visible = false;
}

function openLink() {
  window.location.assign(this.link);
}
