export class TestCases {
    testCases; selectedId;

    constructor(testCases) {
        this.testCases = [];
        if (testCases != null) {
            for (let testCase of testCases) {
                this.addTestCase();
                this.testCases.at(-1).input = testCase.input
            }
        } else {
            this.addTestCase();
        }
        this.selectedId = 0;
    }

    addTestCase() {
        this.selectedId = this.length();
        this.testCases.push(new TestCase(this.selectedId));
    }

    deleteTestCase(index) {
        if (this.testCases.length > 1) {
            if (this.selectedId === this.testCases.length-1) {
                this.selectedId--;
            }
            this.testCases.splice(index, 1);
        }
    }

    current() {
        return this.testCases[this.selectedId];
    }

    currentFrame() {
        return this.current().currentFrame();
    }

    length() {
        return this.testCases.length;
    }
}

class TestCase {
    id; input; output; frames; selectedFrameId;
    constructor(id) {
        this.id = id;
        this.input = '';
        this.frames = [];
        this.selectedFrameId = 0;
        
        this.currentFrame = () => {
            return this.frames ? this.frames[this.selectedFrameId] : "";
        }
    }
}