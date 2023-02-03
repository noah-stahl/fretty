import { Howl } from "howler";
import { PitchClass } from "./PitchClass";

export type Note = {
  pitchClass: PitchClass;
  name: string;
  sound: Howl;
};
