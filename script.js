// implements

// implements을 사용하여 클래스가 특정 인터페이스를 충족하는지 확인할 수 있다.
// 클래스를 올바르게 구현하지 못하면 오류가 발생.
// implements 절은 클래스가 인터페이스 유형으로 처리될 수 있는지 확인하는 것이다. 클래스의 유형이나 메서드는 전혀 변경하지 않는다.
// 또한 클래스는 여러 인터페이스를 구현할 수도 있습니다. 클래스 C는 A, B를 구현.
// ex) class C implements A, B { }
// ```
// interface Pingable {
// ping(): void;
// }

// // Sonar클래스는 Pingable인터페이스를 implement했기 때문에 Pingable가 가진 ping메서드를 구현해줘야 한다.
// class Sonar implements Pingable {
// ping() {
// console.log("ping!");
// }
// }
// ```


// interface는 private property 들을 사용하지 못한다.
// constructor 가 없다
// interface를 리턴한다면 new ~~ 를 쓸 필요x

// interface User {
//     firstName: string,
//     lastName: string,
//     sayHi(name: string): string
//     fullName(): string
// }

// interface Human {
//     health: number
// }

// class Player implements User, Human {
//     constructor(
//         public firstName: string,
//         public lastName: string,
//         public health: number
//     ) { }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
//     sayHi(name: string) {
//         return `Hello ${name}.My name is ${this.fullName()}`
//     }
// }

// function makeUser(user: User): User {
//     return {
//         firstName: "nico",
//         lastName: "las",
//         fullName: () => "xx",
//         sayHi: (name) => "bb"
//     }
// }

// makeUser({
//     firstName: "nico",
//     lastName: "las",
//     fullName: () => "xx",
//     sayHi: (name) => "bb"
// })