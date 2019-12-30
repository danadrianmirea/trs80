
// Represents a recorded tape, with its audio samples,
// filtered-down samples for display, and other information
// we got from it.

import {highPassFilter} from "./AudioUtils";
import {DisplaySamples} from "./DisplaySamples";
import {LowSpeedTapeDecoder} from "./LowSpeedTapeDecoder";
import {Program} from "./Program";

export class Tape {
    public name: string;
    public originalSamples: DisplaySamples;
    public filteredSamples: DisplaySamples;
    public lowSpeedSamples: DisplaySamples;
    public programs: Program[];

    /**
     * @param name text to display (e.g., "LOAD80-Feb82-s1").
     * @param samples original samples from the tape.
     */
    constructor(name: string, samples: Float32Array) {
        this.name = name;
        this.originalSamples = new DisplaySamples(samples);
        this.filteredSamples = new DisplaySamples(highPassFilter(samples, 500));
        this.lowSpeedSamples = new DisplaySamples(LowSpeedTapeDecoder.filterSamples(
            this.filteredSamples.samplesList[0]));
        this.programs = [];
    }

    public addProgram(program: Program) {
        this.programs.push(program);
    }
}
