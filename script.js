const treeElement = document.getElementById("tree");
const lyricsElement = document.getElementById("lyrics");

// The ASCII tree
const treeTemplate = [
    "         *",
    "        ***",
    "       *****",
    "      *******",
    "     *********",
    "    ***********",
    "   *************",
    "        |||",
    "        |||"
];

// Lyrics list — now each line has a custom "time" (in milliseconds)
const lyrics = [
    { text: "♪ A face on a lover ♪", time: 2000 },
    { text: "♪ With a fire in his heart ♪", time: 2000 },
    { text: "♪ A man undercover ♪", time: 2000 },
    { text: "♪ BUT YOU TORE ME APART ♪", time: 5000 }
];

let lyricIndex = 0;
let lyricTimeout;

// Function to render the tree with twinkling lights
function renderTree() {
    let result = "";

    treeTemplate.forEach(line => {
        let newLine = "";
        for (let char of line) {
            if (char === "*") {
                const rand = Math.random();
                if (rand < 0.3) newLine += `<span class="star">*</span>`;
                else newLine += `<span class="green">*</span>`;
            } else if (char === "|") {
                newLine += `<span class="trunk">|</span>`;
            } else {
                newLine += char;
            }
        }
        result += newLine + "\n";
    });

    treeElement.innerHTML = result;
}

// Function to change lyrics with custom timing
function showNextLyric() {
    const current = lyrics[lyricIndex];
    lyricsElement.innerText = current.text;

    lyricIndex = (lyricIndex + 1) % lyrics.length;

    // Wait custom time before showing next lyric
    lyricTimeout = setTimeout(showNextLyric, current.time);
}

// Animation intervals
setInterval(renderTree, 300); // Twinkle every 0.3s

// Start the loop
renderTree();
showNextLyric();
