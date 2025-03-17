const astronautList = () => {
    return new Promise((resolves, rejects) => {
        const api = "http://api.open-notify.org/astros.json";

        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response));
            } else {
                rejects(new Error(request.statusText));
            }
        };
        request.onerror = (err) => rejects(err);
        request.send();
    });
}

let getSpaceList = () => {
    fetch(
        "http://api.open-notify.org/astros.json"
    ).then((res) => res.json()) ;
};

astronautList().then(console.log);

let myList = () => {
    astronautList()
      .then((json) => json.people)
      .then((people) => people.map((p) => p.name))
      .then((names) => names.join(", "));
}

console.log(myList());

const delay = (seconds) => (
    new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject(
                new Error("Number expected")
            );
        };
        setTimeout(resolve, seconds * 1000)
    })
);


// console.log("One sec wait...");

// delay(1).then(() => console.log("One sec wait..."));

// delay(2).then(() => console.log("tWO sec wait..."));

//delay("6s").then(() => console.log("fIVE sec wait..."));

let studentList = (students) => console.log(students);
studentList(["A", "B", "C"]);




class vehicle {
    constructor(desc, wheels) {
        this.desc = desc;
        this.wheels = wheels;
    }

    describe() {
        console.log(`I am a ${this.desc} with ${this.wheels} wheels`);
    };
}

class truck extends vehicle {

}

let mycar = new truck('toyota', 12);
mycar.describe();


function skier(name, sound) {
    return {
        name: name,
        sound: sound,
        yell: function () {
            let yell1 = this.sound.toUpperCase();
            console.log(`${yell1} ${yell1}`)
        }
    };
}
skier("Sushant", "hello").yell();

