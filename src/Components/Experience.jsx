import {
  OrthographicCamera,
  PerspectiveCamera,
  SheetProvider,
  useCurrentSheet,
  editable as e,
} from "@theatre/r3f";
import React, { useEffect, useRef, useState } from "react";
import { getProject, val } from "@theatre/core";
import HeroModel from "./Models/HeroModel";
import { Environment } from "@react-three/drei";
import HeroCharacters from "./Models/HeroCharacters";
import SecondModel from "./Models/SecondModel";
import { SecondCharacters } from "./Models/SecondCharacters";
import { ThirdModelBroke } from "./Models/ThirdModelBroke";
import { ThirdCharacterCrying } from "./Models/ThirdCharacterCrying";
import { ThirdCharacterHappy } from "./Models/ThirdCharacterHappy";
import { ThirdModelFix } from "./Models/ThirdModelFix";
import { useThree } from "@react-three/fiber";
import extension from "@theatre/r3f/dist/extension";
import AquaProjectState from "../assets/AquaAnimationTake2.json";
import { useControls } from "leva";
import studio from "@theatre/studio";

studio.initialize();
studio.extend(extension);

const Experience = () => {
  const sheet = getProject("Demo Project", { state: AquaProjectState }).sheet(
    "Demo Sheet"
  );

  const ThirdModelVisibility = sheet.object("key", {
    broke: true,
    fix: false,
  });


const sliderEl = document.getElementById("slider-section");


const sliderTransition = sheet.object("translateX", {
  value : -100,
})



  const [broke, setBroke] = useState(true);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    ThirdModelVisibility.onValuesChange((values) => {
      setBroke(values.broke);
      setFix(values.fix);
    });


    sliderTransition.onValuesChange((values)=>{
      sliderEl.style.transform = `translateX(${values.value}%)`;
    })



  }, []);

  const { size } = useThree();
  const ModelRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Ensure that viewport width and height are non-zero
      if (size.width !== 0 && size.height !== 0) {
        const x = (event.clientX / size.width) * 2 - 1;
        const y = -(event.clientY / size.height) * 2 + 1;

        ModelRef.current.rotation.set(-y * 0.03, x * 0.03, 0); // Adjust the scaling factor if needed
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size.width, size.height]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.pageYOffset;
      const scrollHeight = window.innerHeight * 4;

      // Limit scrollValue to be at most scrollHeight
      const limitedScrollValue = Math.min(scrollValue, scrollHeight);

      // Assuming sheet.sequence.pointer.length represents the total duration of the sequence
      const sequenceLength = val(sheet.sequence.pointer.length);

      // Calculate the position as a fraction of the sequence length
      const positionFraction = limitedScrollValue / scrollHeight;

      // Update the playhead position in the sequence

      sheet.sequence.position = positionFraction * sequenceLength;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sheet.sequence.pointer.length]); // Ensure the effect runs when the sequence length changes

  const [cameraView, setCameraView] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      // Calculate the new cameraView value based on window width
      const newCameraView = Math.min(
        30,
        Math.max(10, 30 - (windowWidth - 400) / 20)
      );

      // Update the state
      setCameraView(newCameraView);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {}, [cameraView]);
  return (
    <>
      <SheetProvider sheet={sheet}>
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          // fov={controls.cameraFov}
          // left={(cameraView * window.innerWidth) / window.innerHeight / -2}
          // right={(cameraView * window.innerWidth) / window.innerHeight / 2}
          // top={cameraView / 2}
          // bottom={cameraView / -2}
          near={1}
          far={1000}
        />

        <Environment files="gem_2new.hdr" />
        {/* <e.directionalLight
          position={[14.840499100634922, 9.67791373447082, 11.275396281257873]}
          castShadow
          color={0xffffff}
          theatreKey="Sun Light"
        />
        <e.ambientLight color={0xffffff} theatreKey="Ambient Light" />
        <e.pointLight
          position={[12.304268591403916, 8.769959312154715, -2.620908306165153]}
          castShadow
          color={0xffffff}
          theatreKey="Point Light"
        /> */}

        <group ref={ModelRef}>
          <e.group theatreKey={"HeroModel"}>
            <HeroModel />
            <HeroCharacters />
          </e.group>

          <e.group theatreKey={"SecondModel"}>
            <SecondModel />
            <SecondCharacters />
          </e.group>

          <e.group theatreKey={"ThirdModel"}>
            <group visible={broke}>
              <ThirdCharacterCrying />
              <ThirdModelBroke />
            </group>

            <group visible={fix}>
              <ThirdCharacterHappy />
              <ThirdModelFix />
            </group>
          </e.group>
        </group>
      </SheetProvider>
    </>
  );
};

export default Experience;
