// const { groupBy, range, maybeGet, ofNull } = require("./Utils");

// test("group by", () => {
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const dict = groupBy(array, x => x % 3);
//   expect(dict).toStrictEqual({ 0: [3, 6, 9], 1: [1, 4, 7], 2: [2, 5, 8] });
// });

// test("range", () => {
//   const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const array2 = [3, 4, 5, 6, 7, 8, 9];
//   expect(range(10)).toStrictEqual(array);
//   expect(range(3, 10)).toStrictEqual(array2);
//   expect(range(10, 3)).toStrictEqual([]);
// });

// test("Maybe get", () => {
//   a = { b: { c: "alive" } };
//   cat = ofNull(a)
//     .flatMap(maybeGet("b"))
//     .flatMap(maybeGet("c"))
//     .orSome("dead");

//   deadCat = ofNull(a)
//     .flatMap(maybeGet("b"))
//     .flatMap(maybeGet("d"))
//     .orSome("dead");

//   expect("alive").toStrictEqual(cat);
//   expect("dead").toStrictEqual(deadCat);
// });
