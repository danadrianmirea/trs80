
import {Decoder} from "./Decoder";
import {Tape} from "./Tape";
import {TapeBrowser} from "./TapeBrowser";
import {Uploader} from "./Uploader";

function handleAudioBuffer(audioBuffer: AudioBuffer) {
    console.log("Audio is " + audioBuffer.duration + " seconds, " +
                audioBuffer.numberOfChannels + " channels, " +
                    audioBuffer.sampleRate + " Hz");
    // TODO check that there's 1 channel and it's 48 kHz.

    const zoomInButton = document.getElementById("zoom_in_button") as HTMLButtonElement;
    const zoomOutButton = document.getElementById("zoom_out_button") as HTMLButtonElement;
    const waveforms = document.getElementById("waveforms") as HTMLElement;
    const originalCanvas = document.getElementById("original_canvas") as HTMLCanvasElement;
    const filteredCanvas = document.getElementById("filtered_canvas") as HTMLCanvasElement;
    const lowSpeedCanvas = document.getElementById("low_speed_canvas") as HTMLCanvasElement;
    const programText = document.getElementById("program_text") as HTMLElement;
    const tapeContents = document.getElementById("tape_contents") as HTMLElement;

    const samples = audioBuffer.getChannelData(0);
    const tape = new Tape(samples);
    const decoder = new Decoder(tape);
    decoder.decode();
    const tapeBrowser = new TapeBrowser(tape, zoomInButton, zoomOutButton, waveforms,
        originalCanvas, filteredCanvas, lowSpeedCanvas, programText, tapeContents);
    tapeBrowser.draw();

    // Switch screens.
    const dropScreen = document.getElementById("drop_screen") as HTMLElement;
    const dataScreen = document.getElementById("data_screen") as HTMLElement;
    dropScreen.style.display = "none";
    dataScreen.style.display = "block";
}

export function main() {
    const dropZone = document.getElementById("drop_zone") as HTMLElement;
    const dropUpload = document.getElementById("drop_upload") as HTMLInputElement;
    const dropS3 = document.querySelectorAll("#test_files button");
    const dropProgress = document.getElementById("drop_progress") as HTMLProgressElement;
    const uploader = new Uploader(dropZone, dropUpload, dropS3, dropProgress, handleAudioBuffer);
}
