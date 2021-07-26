# Mapping_Earthquakes

## Project Overview

The objective of the project is to create an interactive world map using GeoJSON , building dashboard with various geographical features to map the earthquakes around the world.The earthquake data is represented on the maps in relation to the tectonic plate's location on the earth, and according to each event's magnitude.

## Resources

- Data Source: [Earthquakes GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson), [Major Earthquake GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson), [Tectonic Plate GeoJSON](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)
- Software: HTML/CSS, JavaScript, Visual Studio Code 1.49.1, Leaflet 1.7.1, D3.js 6.2.0

## Results

To interact with the maps API, the user have to visit [Mapbox.com](https://www.mapbox.com/), create an account and retrieve the API id. We need to save this token in config.js file and use in index.html when making API calls to Mapbox to plot the world map.

  ![image](https://user-images.githubusercontent.com/83181834/127033779-3078bcd1-171f-4330-8d64-be3729b90b70.png)

### Interactive map

Interactive Maps View: 

- Street view of the map with overlays of Earthquake circle marker, Major earthquake marker and tectonic plates.

![image](https://user-images.githubusercontent.com/83181834/127034282-746f11f0-2366-43ab-bfeb-d617a15c9219.png)


- Satellite view of the map with each circle size corresponds to earthquake magnitude and pop up information about the place and magnitude.

![image](https://user-images.githubusercontent.com/83181834/127034571-8cc80518-25cf-409d-9fa5-5ed6e6c74635.png)

- Dark view of the map with only tectonic plates view selected. Highlighted part shows the layers of the interactive map.

![image](https://user-images.githubusercontent.com/83181834/127034723-ce73dd25-1ef9-413d-b07a-8bbda64796fd.png)

