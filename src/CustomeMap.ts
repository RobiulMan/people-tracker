/**
 * Instrcution to every other class
 * on how they can be an argument to `addMarker`
 */
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomeMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.querySelector(divId) as Element,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi There!"
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
