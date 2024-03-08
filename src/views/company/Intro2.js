import React, { useEffect, useState } from 'react';
import IntroTab from './IntroTab';

const { kakao } = window;

export default function Intro2() {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.537059, 127.084358),
      draggable: false,
      level: 3,
    };

    if (!map) {
      setMap(new kakao.maps.Map(container, options));
    }
  }, [map]);

  useEffect(() => {
    if (!map) return;

    const markerPosition = new kakao.maps.LatLng(37.537059, 127.084358);
    const newMarker = new kakao.maps.Marker({ position: markerPosition });
    newMarker.setMap(map);
    setMarker(newMarker);
  }, [map]);

   useEffect(() => {
     if (!map || !marker) return;

     const iwContent = `<div style="padding:5px; width:190px; border-color:#d3d3d3;">
       <p style="font-size:17px;">럭키시스템</p>
       <p style="font-size:17px; margin-top:5px;">크레신타워 11층 1116호</p>
       <a href="https://place.map.kakao.com/744827414" style="color:blue" target="_blank">큰지도보기</a></div>`;
     const iwPosition = new kakao.maps.LatLng(37.537059, 127.084358);
     const infowindow = new kakao.maps.InfoWindow({
       position: iwPosition,
       content: iwContent,
     });

     infowindow.open(map, marker);

     return () => {
       infowindow.close();
     };
   }, [map, marker]);


  function setBounds() {
    if (!map || !marker) return;

    const bounds = new kakao.maps.LatLngBounds();
    bounds.extend(marker.getPosition());
    map.setBounds(bounds);
  }


  function zoomIn() {
    if (map) map.setLevel(map.getLevel() - 1);
  }

  function zoomOut() {
    if (map) map.setLevel(map.getLevel() + 1);
  }

  return (
    <div className="inner">
      <IntroTab activeTab="intro2" />
      <div className="intro_wrap">
        <p className="txt_wrap">서울 광진구 아차산로 375 (크레신타워 1116호)</p>
        <div className="map_wrap">
          <div
            id="map"
            style={{
              width: '100%',
              height: '500px',
            }}
          ></div>
          <div className="custom_zoomcontrol">
            <span onClick={zoomIn}>
              <img
                src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
                alt="확대"
              />
            </span>
            <span onClick={zoomOut}>
              <img
                src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
                alt="축소"
              />
            </span>
          </div>
          <button onClick={setBounds} className="reset_btn">
            지도 중심으로 이동
          </button>
        </div>
      </div>
    </div>
  );
}
