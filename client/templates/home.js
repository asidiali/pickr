Template.home.created = function () {
  Session.set("stateTitle", "Recommended");

  if (!Session.get("recommendedPlace")) {

    IonLoading.show({
      customTemplate: '<i class="icon ion-loading-c"></i><br><h3>Finding you...</h3>'
    });

    Tracker.autorun(function(c){
      if (Geolocation.latLng()) {
        var loc = Geolocation.latLng();
        console.log(loc);
        Session.set("loc", loc);
        IonLoading.show({
          customTemplate: '<i class="icon ion-loading-c"></i><br><h3>Finding the best place to eat...</h3>'
        });
        c.stop();
        getPlaces(loc);
      }
    });
  }


}

Template.home.helpers({

  "stateTitle": function () {
    return Session.get("stateTitle");
  },




});
