
import {CSS_PREFIX} from "./Utils";
import {SettingsPanel} from "./SettingsPanel";

const gCssPrefix = CSS_PREFIX + "-control-panel";
const gScreenNodeCssClass = gCssPrefix + "-screen-node";
const gPanelCssClass = gCssPrefix + "-panel";
const gButtonCssClass = gCssPrefix + "-button";
const gShowingOtherPanelCssClass = gCssPrefix + "-showing-other-panel";

// https://thenounproject.com/search/?q=reset&i=3012384
const RESET_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100" xml:space="preserve">
    <switch>
        <g fill="white">
            <path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/>
            <path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"/>
            <path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"/>
            <path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"/>
            <path d="M84.3,18C67.1,0.8,39.5,0.4,21.8,16.5l-4.1-4.1c-1.6-1.6-4-2.2-6.2-1.6c-2.2,0.7-3.9,2.5-4.3,4.7L2.6,36.9    c-0.4,2.1,0.2,4.2,1.7,5.7c1.5,1.5,3.6,2.1,5.7,1.7l21.4-4.5c1.2-0.3,2.3-0.9,3.1-1.7c0.7-0.7,1.3-1.6,1.6-2.6    c0.6-2.2,0-4.6-1.6-6.2l-3.9-3.9C43.5,14,63.1,14.5,75.4,26.8c12.8,12.8,12.8,33.6,0,46.4C62.6,86,41.8,86,29,73.2    c-4.1-4.1-7-9.2-8.5-14.8c-0.9-3.3-4.3-5.3-7.6-4.4c-3.3,0.9-5.3,4.3-4.4,7.6c2,7.7,6.1,14.8,11.8,20.4    c17.7,17.7,46.4,17.7,64.1,0C101.9,64.4,101.9,35.6,84.3,18z"/>
        </g>
    </switch>
</svg>
`;

// https://thenounproject.com/search/?q=camera&i=1841396
const CAMERA_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100" xml:space="preserve">
    <g fill="white">
        <circle cx="50" cy="55.4" r="13.8"/>
        <path d="M80.6,25.4H67.1l-1.8-7.2c-0.5-2.1-2.5-3.6-4.7-3.6H39.3c-2.2,0-4.1,1.5-4.7,3.6l-1.8,7.2H19.4C11.5,25.4,5,31.9,5,39.8V71   c0,7.9,6.5,14.4,14.4,14.4h61.2C88.5,85.4,95,78.9,95,71V39.8C95,31.9,88.5,25.4,80.6,25.4z M50,76.4c-11.6,0-21-9.4-21-21   s9.4-21,21-21s21,9.4,21,21S61.6,76.4,50,76.4z M81.4,40.3c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6   C85,38.7,83.4,40.3,81.4,40.3z"/>
    </g>
</svg>
`;

// https://thenounproject.com/search/?q=previous%20track&i=658409
const PREVIOUS_TRACK_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" viewBox="-1 -2 16 21" version="1.1" x="0px" y="0px">
    <g fill="white" fill-rule="evenodd">
        <g transform="translate(-320.000000, -618.000000)">
            <path d="M330,628.032958 L330,634.00004 C330,634.545291 330.45191,635 331.009369,635 L332.990631,635 C333.556647,635 334,634.552303 334,634.00004 L334,618.99996 C334,618.454709 333.54809,618 332.990631,618 L331.009369,618 C330.443353,618 330,618.447697 330,618.99996 L330,624.967057 C329.894605,624.850473 329.775773,624.739153 329.643504,624.634441 L322.356496,618.865559 C321.054403,617.834736 320,618.3432 320,620.000122 L320,632.999878 C320,634.663957 321.055039,635.164761 322.356496,634.134441 L329.643504,628.365559 C329.775779,628.260841 329.894611,628.149527 330,628.032958 Z" transform="translate(327.000000, 626.500000) scale(-1, 1) translate(-327.000000, -626.500000) "/>
        </g>
    </g>
</svg>
`;

// https://thenounproject.com/search/?q=settings&i=3593545
const SETTINGS_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="7 7 121 121" version="1.1" x="0px" y="0px" width="30" height="30">
    <g fill="white" transform="translate(0,-161.53332)">
        <path d="m 61.57997,173.33818 c -1.653804,0 -3.159177,0.77847 -4.132553,1.85984 -0.973402,1.08136 -1.513575,2.40442 -1.771491,3.76721 a 2.1609049,2.1609049 0 0 0 0,0.002 l -1.654678,8.74831 c -2.047981,0.67947 -4.038494,1.50768 -5.964476,2.48047 l -7.367508,-5.02347 c -1.145302,-0.78076 -2.462953,-1.33572 -3.916045,-1.41232 -1.4546,-0.0764 -3.068029,0.44118 -4.235926,1.60921 l -8.699209,8.69921 c -1.169405,1.16909 -1.685211,2.78351 -1.609725,4.23643 0.07501,1.45291 0.629259,2.7738 1.410256,3.92018 l 5.001762,7.336 c -0.9702,1.93582 -1.794192,3.93628 -2.468589,5.99392 l -8.740034,1.65417 c -1.362789,0.25787 -2.688378,0.79815 -3.769783,1.77147 -1.081405,0.97346 -1.859333,2.4815 -1.859333,4.13526 v 12.30262 c 0,1.65378 0.777928,3.1592 1.859333,4.13255 1.081405,0.97338 2.406994,1.51567 3.769783,1.77353 l 8.754004,1.6583 c 0.679477,2.04603 1.506088,4.03461 2.478379,5.95882 l -5.025522,7.3675 c -0.781606,1.14644 -1.334744,2.4664 -1.410256,3.91967 -0.07498,1.45325 0.439817,3.06745 1.609725,4.23643 l 8.699209,8.69921 c 1.1693,1.16941 2.782914,1.68325 4.235926,1.60713 1.452986,-0.0761 2.771908,-0.63037 3.918109,-1.41179 l 7.33597,-5.00022 c 1.9363,0.97001 3.937926,1.79294 5.996014,2.46702 l 1.654175,8.74004 c 0.257889,1.36284 0.798486,2.68843 1.771994,3.76981 0.973402,1.08138 2.478749,1.8593 4.132553,1.8593 H 73.88672 c 1.653805,0 3.159152,-0.77792 4.132554,-1.8593 0.973005,-1.0809 1.513999,-2.40554 1.771994,-3.76772 v -0.003 l 1.656212,-8.74778 c 2.048113,-0.67943 4.038415,-1.50768 5.964502,-2.48047 l 7.365445,5.02142 c 1.146095,0.78144 2.465096,1.33567 3.918108,1.41179 1.452905,0.0761 3.068585,-0.43786 4.237995,-1.60713 l 8.6992,-8.69921 c 1.16931,-1.16946 1.68395,-2.78551 1.60767,-4.23852 -0.076,-1.45301 -0.63074,-2.77196 -1.41232,-3.91811 l -5.00177,-7.33547 c 0.9705,-1.93617 1.79398,-3.93639 2.46857,-5.99445 l 8.74003,-1.65418 c 1.36271,-0.25794 2.68841,-0.80018 3.76981,-1.77352 1.0813,-0.97335 1.85931,-2.47881 1.85931,-4.13256 v -12.30312 c 0,-1.65378 -0.77801,-3.16127 -1.85931,-4.13465 -1.0809,-0.97292 -2.40562,-1.51344 -3.76772,-1.77146 l -8.74988,-1.65624 c -0.67918,-2.04684 -1.50825,-4.03585 -2.48046,-5.96088 l 5.02348,-7.36698 c 0.78118,-1.14583 1.33572,-2.46501 1.41232,-3.91811 0.077,-1.45309 -0.43952,-3.06905 -1.60973,-4.2385 l -8.69714,-8.69921 c -1.16962,-1.16891 -2.78461,-1.68557 -4.238494,-1.6092 -1.4528,0.0768 -2.770425,0.63186 -3.915542,1.41232 l -7.33597,5.00176 c -1.9363,-0.96998 -3.937926,-1.79297 -5.996014,-2.46703 l -1.656768,-8.74211 c -0.257783,-1.36269 -0.798062,-2.68582 -1.771464,-3.76721 -0.973297,-1.0814 -2.478749,-1.85984 -4.132554,-1.85984 z m 6.152595,34.74051 c 11.726704,0 21.185664,9.46065 21.185267,21.18735 0,11.7262 -9.459066,21.18696 -21.185267,21.18733 -11.726704,0 -21.187463,-9.4606 -21.18786,-21.18733 0,-11.72726 9.460653,-21.18772 21.18786,-21.18735 z"/>
    </g>
</svg>
`;

const GLOBAL_CSS = "." + gPanelCssClass + ` {
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity .20s ease-in-out;
}

.` + gScreenNodeCssClass + ` {
    /* Force the screen node to relative positioning. Hope that doesn't screw anything up. */
    position: relative;
}

.` + gScreenNodeCssClass + `:hover .` + gPanelCssClass + ` {
    opacity: 1;
}

/* Hide the control panel if any other panel is showing (like settings). */
.` + gScreenNodeCssClass + `.` + gShowingOtherPanelCssClass + `:hover .` + gPanelCssClass + ` {
    opacity: 0;
}

.` + gButtonCssClass + ` {
    display: block;
    margin: 15px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity .05s ease-in-out;
    transition: transform 0.05s ease-in-out;
}

.` + gButtonCssClass + `:hover {
    opacity: 1;
}

.` + gButtonCssClass + `:active {
    transform: scale(1.15);
}
`;

/**
 * Control panel that hovers in the screen for doing things like resetting the computer.
 */
export class ControlPanel {
    private readonly screenNode: HTMLElement;
    private readonly panelNode: HTMLElement;

    /**
     * @param screenNode the node from the Trs80Screen object's getNode() method.
     */
    constructor(screenNode: HTMLElement) {
        // Make global CSS if necessary.
        ControlPanel.configureStyle();

        this.screenNode = screenNode;
        screenNode.classList.add(gScreenNodeCssClass);

        this.panelNode = document.createElement("div");
        this.panelNode.classList.add(gPanelCssClass);
        screenNode.appendChild(this.panelNode);
    }

    /**
     * Add a reset button.
     */
    public addResetButton(callback: () => void) {
        let icon = document.createElement("img");
        icon.classList.add(gButtonCssClass);
        icon.src = "data:image/svg+xml;base64," + btoa(RESET_ICON);
        icon.title = "Reboot the computer";
        icon.addEventListener("click", callback);
        this.panelNode.appendChild(icon);
    }

    /**
     * Add a screenshot button.
     */
    public addScreenshotButton(callback: () => void) {
        let icon = document.createElement("img");
        icon.classList.add(gButtonCssClass);
        icon.src = "data:image/svg+xml;base64," + btoa(CAMERA_ICON);
        icon.title = "Take a screenshot";
        icon.addEventListener("click", callback);
        this.panelNode.appendChild(icon);
    }

    /**
     * Add a tape rewind button.
     */
    public addTapeRewindButton(callback: () => void) {
        let icon = document.createElement("img");
        icon.classList.add(gButtonCssClass);
        icon.src = "data:image/svg+xml;base64," + btoa(PREVIOUS_TRACK_ICON);
        icon.title = "Rewind the cassette";
        icon.addEventListener("click", callback);
        this.panelNode.appendChild(icon);
    }

    /**
     * Add a settings button.
     */
    public addSettingsButton(settingsPanel: SettingsPanel) {
        settingsPanel.onOpen = () => this.screenNode.classList.add(gShowingOtherPanelCssClass);
        settingsPanel.onClose = () => this.screenNode.classList.remove(gShowingOtherPanelCssClass);

        let icon = document.createElement("img");
        icon.classList.add(gButtonCssClass);
        icon.src = "data:image/svg+xml;base64," + btoa(SETTINGS_ICON);
        icon.title = "Show the settings panel";
        icon.addEventListener("click", () => settingsPanel.open());
        this.panelNode.appendChild(icon);
    }

    /**
     * Make a global stylesheet for all TRS-80 emulators on this page.
     */
    private static configureStyle(): void {
        const styleId = gCssPrefix;
        if (document.getElementById(styleId) !== null) {
            // Already created.
            return;
        }

        const node = document.createElement("style");
        node.id = styleId;
        node.innerHTML = GLOBAL_CSS;
        document.head.appendChild(node);
    }
}
